import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/20/solid';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {useFragment, graphql} from 'react-relay';

import {JiraDirectoryResultPagination_content$key} from '../../__generated__/JiraDirectoryResultPagination_content.graphql';

const getUrl = (urlPath: string, pageNum: number) => {
  let url;
  try {
    url = new URL('http://temp.com' + urlPath);
  } catch (e) {
    url = new URL('http://temp.com');
  }
  if (url.searchParams.get('page') !== pageNum.toString() && pageNum > 0) {
    url.searchParams.set('page', pageNum.toString());
  }
  return `${url.pathname}?${url.searchParams.toString()}`;
};

const pageSize = 10;
export default function JiraDirectoryResultPagination({
  content,
}: {
  content: JiraDirectoryResultPagination_content$key;
}) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const data = useFragment(
    graphql`
      fragment JiraDirectoryResultPagination_content on HasTotalCount {
        totalCount
      }
    `,
    content,
  );
  const totalCount =
    data.totalCount !== undefined &&
    data.totalCount !== null &&
    data.totalCount > 0
      ? data?.totalCount
      : 0;
  useEffect(() => {
    const pageString = router.query.page?.toString() ?? '';
    setCurrentPage(pageString ? parseInt(pageString) : currentPage);
  }, [router.query.page, setCurrentPage, currentPage]);
  const pages = Math.ceil(totalCount / pageSize);
  return totalCount < 1 ? null : (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white dark:bg-gray-900 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          href={getUrl(router.asPath, Math.max(currentPage - 1, 1))}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50">
          Previous
        </Link>
        <Link
          href={getUrl(router.asPath, Math.min(currentPage + 1, pages))}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50">
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-white">
            Showing{' '}
            <span className="font-medium">
              {pageSize * (currentPage - 1) + 1}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {Math.min(pageSize * (currentPage - 1) + pageSize, totalCount)}
            </span>{' '}
            of <span className="font-medium">{totalCount}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination">
            <Link
              href={getUrl(router.asPath, Math.max(currentPage - 1, 1))}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white dark:bg-gray-900 px-2 py-2 text-sm font-medium text-gray-500 dark:text-white hover:bg-gray-50 focus:z-20">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            {[...Array(pages)].map((_, i) => (
              <Link
                href={getUrl(router.asPath, i + 1)}
                key={`page-${i}`}
                className={`${
                  i + 1 === currentPage
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-600'
                    : 'bg-white dark:bg-gray-900 border-gray-300 hover:bg-gray-50 text-gray-500 dark:text-white'
                } border focus:z-20 font-medium inline-flex items-center px-4 py-2 relative text-sm`}>
                {i + 1}
              </Link>
            ))}
            <Link
              href={getUrl(router.asPath, Math.min(currentPage + 1, pages))}
              className="bg-white dark:bg-gray-900 border border-gray-300 focus:z-20 font-medium hover:bg-gray-50 inline-flex items-center px-2 py-2 relative rounded-r-md text-gray-500 dark:text-white text-sm">
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
