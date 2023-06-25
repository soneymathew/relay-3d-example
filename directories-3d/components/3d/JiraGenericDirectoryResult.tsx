import {useState, useEffect} from 'react';
import {useFragment, graphql} from 'react-relay';
import {useRouter} from 'next/router';
import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import RelayMatchContainer from '../RelayMatchContainer';
import {JiraGenericDirectoryResults_content$key} from '../../__generated__/JiraGenericDirectoryResults_content.graphql';
import JiraDirectoryResultPagination from './JiraDirectoryResultPagination';
import Link from 'next/link';

const getUrl = (urlPath: string, sortKey: string, sortDirection: string) => {
  let url;
  let hasUpdates = false;
  try {
    url = new URL('http://temp.com' + urlPath);
  } catch (e) {
    url = new URL('http://temp.com');
  }
  if (url.searchParams.get('sortKey') !== sortKey) {
    url.searchParams.set('sortKey', sortKey);
    hasUpdates = true;
  }
  if (url.searchParams.get('sortOrder') !== sortDirection) {
    url.searchParams.set('sortOrder', sortDirection);
    hasUpdates = true;
  }
  if (hasUpdates) {
    url.searchParams.set('page', '1');
  }
  return `${url.pathname}?${url.searchParams.toString()}`;
};

const JiraGenericDirectoryResult = ({
  content,
}: {
  content: JiraGenericDirectoryResults_content$key;
}) => {
  const router = useRouter();
  const [sortFieldValue, setSortFieldValue] = useState({
    sortKey: router.query.sortKey?.toString() ?? '',
    sortDirection: router.query.sortOrder?.toString() ?? '',
  });
  useEffect(() => {
    const [sortKey, sortDirection] = [
      router.query.sortKey?.toString() ?? 'name',
      router.query.sortOrder?.toString() ?? 'ASC',
    ];
    setSortFieldValue({
      sortKey,
      sortDirection,
    });
  }, [router.query, setSortFieldValue]);
  const data = useFragment(
    graphql`
      fragment JiraGenericDirectoryResults_content on JiraGenericDirectoryResult {
        headers {
          edges {
            node {
              title
              isSortable
              sortDirection
              sortKey
            }
          }
        }
        rows {
          edges {
            node {
              columns {
                edges {
                  node {
                    renderer @match {
                      ...JiraProjectFavouriteCell_content
                        @module(name: "JiraProjectFavouriteCell")
                      ...JiraProjectActionsCell_content
                        @module(name: "JiraProjectActionsCell")
                      ...JiraGenericField_content
                        @module(name: "JiraGenericField")
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
              <thead className="bg-white border-b">
                <tr>
                  {data &&
                    data.headers?.edges?.map((headerEdge, index) => {
                      const header = headerEdge?.node;
                      return (
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left group"
                          key={`header-${index}`}>
                          <div className="flex items-left justify-between">
                            <b>{header?.title}</b>
                            {header?.isSortable &&
                              (sortFieldValue.sortDirection === 'DESC' &&
                              sortFieldValue.sortKey === header?.sortKey ? (
                                <Link
                                  href={
                                    sortFieldValue.sortKey === header?.sortKey
                                      ? getUrl(
                                          router.asPath,
                                          header?.sortKey ?? '',
                                          'ASC',
                                        )
                                      : getUrl(
                                          router.asPath,
                                          header?.sortKey ?? '',
                                          'DESC',
                                        )
                                  }
                                  className="w-5 flex items-center">
                                  <ArrowUpCircleIcon
                                    className={`${
                                      sortFieldValue.sortKey === header?.sortKey
                                        ? 'text-blue-400'
                                        : 'text-gray-400'
                                    }`}
                                    aria-hidden="true"
                                  />
                                </Link>
                              ) : (
                                <Link
                                  href={
                                    sortFieldValue.sortKey === header?.sortKey
                                      ? getUrl(
                                          router.asPath,
                                          header.sortKey ?? '',
                                          'DESC',
                                        )
                                      : getUrl(
                                          router.asPath,
                                          header.sortKey ?? '',
                                          'ASC',
                                        )
                                  }
                                  className="w-5 flex items-center">
                                  <ArrowDownCircleIcon
                                    className={`${
                                      sortFieldValue.sortKey === header.sortKey
                                        ? 'text-blue-400'
                                        : 'text-gray-400'
                                    }`}
                                    aria-hidden="true"
                                  />
                                </Link>
                              ))}
                          </div>
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
                        edgeIndex % 2 ? 'bg-gray-100' : 'bg-white'
                      } border-b`}>
                      {edge?.node?.columns?.edges?.map(
                        (column, columnIndex) => (
                          <td
                            key={`cell-${edgeIndex}-${columnIndex}`}
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
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
