import React from 'react';
import MatchContainer, {
  type MatchContainerProps,
  // @ts-ignore Could not find a declaration file for module
} from 'react-relay/lib/relay-hooks/MatchContainer';
import moduleLoader, {ModuleLoaderError} from '../../lib/moduleLoader';
import ErrorBoundary from '../common/ErrorBoundary';
import {Button} from '../common/LayoutComponents';

export default function RelayMatchContainer({
  match,
}: {
  match: MatchContainerProps;
}) {
  return (
    <ErrorBoundary
      shouldCatchError={(error) => error instanceof ModuleLoaderError}
      // @ts-ignore FIX-ME
      renderError={(error: ModuleLoaderError, resetError) => (
        <div className="bg-red-200 rounded-md px-2 py-1 inline-block">
          Failed to load {error.moduleLoaderName}
          <Button
            size="small"
            onClick={() => {
              moduleLoader(error.moduleLoaderName).resetError();
              resetError();
            }}>
            Reload
          </Button>
        </div>
      )}>
      <MatchContainer
        match={match}
        loader={(name: string) => {
          const loader = moduleLoader(name);
          const error = loader.getError();
          if (error) {
            throw new ModuleLoaderError(name, error);
          }
          const jsModule = loader.get();
          if (jsModule != null) {
            return jsModule;
          }
          throw loader.load();
        }}
      />
    </ErrorBoundary>
  );
}
