// Converted to typescript from https://github.com/relayjs/relay-examples/blob/main/todo/js/utilities/JSResource.js
interface JSResourceReference<T> {
  getModuleId(): string;
  getModuleIfRequired(): T | void;
  load(): Promise<T>;
}

class Resource<T> implements JSResourceReference<T> {
  static map: Map<string, Resource<any>> = new Map();

  _moduleId: string;
  _loader: () => Promise<T>;
  _loadingPromise: Promise<T> | void;
  _module: T | void;

  constructor(moduleId: string, loader: () => Promise<T>) {
    this._moduleId = moduleId;
    this._loader = loader;
    this._loadingPromise = undefined;
    this._module = undefined;
  }

  getModuleId(): string {
    return this._moduleId;
  }

  getModuleIfRequired(): T | void {
    return this._module;
  }

  load(): Promise<T> {
    if (!this._loadingPromise) {
      this._loadingPromise = this._loader()
        .then((module: T) => {
          this._module = module;
          return this._module;
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    }
    return this._loadingPromise;
  }
}

export default function JSResource<T>(
  moduleId: string,
  loader: () => Promise<T>,
): JSResourceReference<T> {
  let resource = Resource.map.get(moduleId);
  if (resource == null) {
    resource = new Resource(moduleId, loader);
    Resource.map.set(moduleId, resource);
  }
  return resource;
}
