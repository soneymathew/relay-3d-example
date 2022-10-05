const loaders = new Map();
const loadedModules = new Map();
const failedModules = new Map();
const pendingLoaders = new Map();

export default function moduleLoader(name: string) {
  return {
    getError() {
      return failedModules.get(name);
    },
    resetError() {
      failedModules.delete(name);
    },
    get() {
      const jsModule = loadedModules.get(name);
      return jsModule == null ? null : jsModule.default;
    },
    load() {
      const loader = loaders.get(name);
      if (loader == null) {
        const promise = new Promise((resolve, reject) => {
          loaders.set(name, {
            kind: 'pending',
            resolve,
            reject,
          });
        });
        pendingLoaders.set(name, promise);
        return promise;
      } else if (loader.kind == 'registered') {
        return loader.loaderFn().then(
          (module: any) => {
            loadedModules.set(name, module);
            return module.default;
          },
          (error: Error) => {
            failedModules.set(name, error);
            throw error;
          },
        );
      } else if (loader.kind == 'pending') {
        return pendingLoaders.get(name);
      }
    },
  };
}

export function registerLoader(
  name: any,
  loaderFn: {(): Promise<any>; (): Promise<any>; (): Promise<any>},
) {
  const loader = loaders.get(name);
  if (loader == null) {
    loaders.set(name, {
      kind: 'registered',
      loaderFn,
    });
  } else if (loader.kind === 'pending') {
    loaderFn().then(
      (module: {default: any}) => {
        loadedModules.set(name, module);
        pendingLoaders.delete(name);
        loader.resolve(module.default);
      },
      (error: any) => {
        failedModules.set(name, error);
        pendingLoaders.delete(name);
        loader.reject(error);
      },
    );
  }
}

export class ModuleLoaderError extends Error {
  moduleLoaderName: string;
  error: Error;
  constructor(moduleLoaderName: string, error: Error) {
    super('ModuleLoaderError: ' + error.message);
    this.moduleLoaderName = moduleLoaderName;
    this.error = error;
  }
}
