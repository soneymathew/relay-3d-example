import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {useFragment, graphql} from 'react-relay';

import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from '@heroicons/react/20/solid';
import {JiraDirectoryDefaultResultHeader_content$key} from '../../__generated__/JiraDirectoryDefaultResultHeader_content.graphql';

const getUrl = (urlPath: string, sortKey: string, sortDirection: string) => {
  let url;
  let hasUpdates = false;
  try {
    url = new URL('https://temp.com' + urlPath);
  } catch (e) {
    url = new URL('https://temp.com');
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

const JiraDirectoryDefaultResultHeader = ({
  content,
}: {
  content: JiraDirectoryDefaultResultHeader_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraDirectoryDefaultResultHeader_content on JiraDirectoryDefaultResultHeader {
        title
        isSortable
        sortDirection
        sortKey
      }
    `,
    content,
  );
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
  return (
    <div className="flex items-left justify-between whitespace-nowrap">
      <b>{data?.title}</b>
      {data?.isSortable &&
        (sortFieldValue.sortDirection === 'DESC' &&
        sortFieldValue.sortKey === data?.sortKey ? (
          <Link
            href={
              sortFieldValue.sortKey === data?.sortKey
                ? getUrl(router.asPath, data?.sortKey ?? '', 'ASC')
                : getUrl(router.asPath, data?.sortKey ?? '', 'DESC')
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
                ? getUrl(router.asPath, data.sortKey ?? '', 'DESC')
                : getUrl(router.asPath, data.sortKey ?? '', 'ASC')
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

export default JiraDirectoryDefaultResultHeader;
