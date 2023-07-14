import {useFragment, graphql} from 'react-relay';
import {DocumentMagnifyingGlassIcon} from '@heroicons/react/20/solid';
import RelayMatchContainer from '../RelayMatchContainer';
import {JiraGenericDirectoryResults_content$key} from '../../__generated__/JiraGenericDirectoryResults_content.graphql';
import JiraDirectoryResultPagination from '../JiraDirectoryResultPagination';

const JiraGenericDirectoryResult = ({
  content,
}: {
  content: JiraGenericDirectoryResults_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraGenericDirectoryResults_content on JiraGenericDirectoryResult {
        headers {
          edges {
            node {
              renderer
                @match(key: "JiraGenericDirectoryResults_content_headers") {
                ...JiraDirectoryDefaultResultHeader_content
                  @module(name: "JiraDirectoryDefaultResultHeader")
                ...JiraDirectoryIssueResultHeader_content
                  @module(name: "JiraDirectoryIssueResultHeader")
              }
            }
          }
        }
        rows {
          edges {
            node {
              columns {
                edges {
                  node {
                    renderer
                      @match(
                        key: "JiraGenericDirectoryResults_content_columns"
                      ) {
                      ...JiraGenericFavouriteField_content
                        @module(name: "JiraGenericFavouriteField")
                      ...JiraGenericActionsField_content
                        @module(name: "JiraGenericActionsField")
                      ...JiraGenericField_content
                        @module(name: "JiraGenericField")
                      ...JiraGenericFieldCollection_content
                        @module(name: "JiraGenericFieldCollection")
                    }
                  }
                }
              }
            }
          }
          ...JiraDirectoryResultPagination_content
        }
      }
    `,
    content,
  );
  return data.rows?.edges !== undefined &&
    data.rows.edges !== null &&
    data.rows.edges.length < 1 ? (
    <div className="text-center">
      <DocumentMagnifyingGlassIcon className="mx-auto h-56 w-56 text-gray-400" />
      <h3 className="mt-2 text-sm font-medium text-gray-900">
        No matches for your filter criteria
      </h3>
    </div>
  ) : (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white dark:bg-gray-900 border-b">
                <tr>
                  {data &&
                    data.headers?.edges?.map((headerEdge, index) => {
                      const header = headerEdge?.node?.renderer;
                      return (
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 dark:text-white px-6 py-4 text-left group"
                          key={`header-${index}`}>
                          <RelayMatchContainer match={header} />
                        </th>
                      );
                    })}
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.rows?.edges?.map((edge, edgeIndex) => (
                    <tr
                      key={`row-${edgeIndex}`}
                      className={`${
                        edgeIndex % 2
                          ? 'bg-gray-100 dark:bg-gray-800'
                          : 'bg-white dark:bg-gray-900'
                      } border-b`}>
                      {edge?.node?.columns?.edges?.map(
                        (column, columnIndex) => (
                          <td
                            key={`cell-${edgeIndex}-${columnIndex}`}
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            <RelayMatchContainer
                              key={`cellmatch-${edgeIndex}-${columnIndex}`}
                              match={column?.node?.renderer}
                            />
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {data?.rows && <JiraDirectoryResultPagination content={data.rows} />}
    </div>
  );
};

export default JiraGenericDirectoryResult;
