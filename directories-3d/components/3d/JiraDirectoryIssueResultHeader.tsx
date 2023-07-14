import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {useFragment, graphql} from 'react-relay';
import {getSortInfoFromJql, getUrlWithNewJql} from '../../lib/utils';

import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from '@heroicons/react/20/solid';
import {JiraDirectoryIssueResultHeader_content$key} from '../../__generated__/JiraDirectoryIssueResultHeader_content.graphql';

const JiraDirectoryIssueResultHeader = ({
  content,
}: {
  content: JiraDirectoryIssueResultHeader_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraDirectoryIssueResultHeader_content on JiraDirectoryIssueResultHeader {
        title
        isSortable
        sortKey
      }
    `,
    content,
  );
  const router = useRouter();
  const [sortFieldValue, setSortFieldValue] = useState({
    sortKey: getSortInfoFromJql(router.query.jql?.toString())[0],
    sortDirection: getSortInfoFromJql(router.query.jql?.toString())[1],
  });
  useEffect(() => {
    const [sortKey, sortDirection] = [
      getSortInfoFromJql(router.query.jql?.toString())[0],
      getSortInfoFromJql(router.query.jql?.toString())[1],
    ];
    setSortFieldValue({
      sortKey,
      sortDirection,
    });
  }, [router.query, setSortFieldValue]);
  return (
    <div className="flex items-left justify-between whitespace-nowrap">
      <b>{data?.title}</b>
      {data?.isSortable &&
        (sortFieldValue.sortDirection === 'DESC' &&
        sortFieldValue.sortKey === data?.sortKey ? (
          <Link
            href={
              sortFieldValue.sortKey === data?.sortKey
                ? getUrlWithNewJql(router.asPath, data?.sortKey ?? '', 'ASC')
                : getUrlWithNewJql(router.asPath, data?.sortKey ?? '', 'DESC')
            }
            className="w-5 flex items-center">
            <ArrowUpCircleIcon
              className={`${
                sortFieldValue.sortKey === data?.sortKey
                  ? 'text-blue-400'
                  : 'text-gray-400'
              }`}
              aria-hidden="true"
            />
          </Link>
        ) : (
          <Link
            href={
              sortFieldValue.sortKey === data?.sortKey
                ? getUrlWithNewJql(router.asPath, data?.sortKey ?? '', 'DESC')
                : getUrlWithNewJql(router.asPath, data?.sortKey ?? '', 'ASC')
            }
            className="w-5 flex items-center">
            <ArrowDownCircleIcon
              className={`${
                sortFieldValue.sortKey === data.sortKey
                  ? 'text-blue-400'
                  : 'text-gray-400'
              }`}
              aria-hidden="true"
            />
          </Link>
        ))}
    </div>
  );
};

export default JiraDirectoryIssueResultHeader;
