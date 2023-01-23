import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/20/solid';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {useEffect, useState} from 'react';

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
  totalCount,
  page,
}: {
  totalCount: number;
  page: number;
}) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(page);
  useEffect(() => {
    const pageString = router.query.page?.toString() ?? '';
    setCurrentPage(pageString ? parseInt(pageString) : page);
  }, [router.query.page, setCurrentPage, page]);

  const pages = Math.ceil(totalCount / pageSize);
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          href={getUrl(router.asPath, Math.max(currentPage - 1, 1))}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </Link>
        <Link
          href={getUrl(router.asPath, Math.min(currentPage + 1, pages))}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">
              {pageSize * (currentPage - 1) + 1}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {pageSize * (currentPage - 1) + pageSize}
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
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {/* TODO: render pages in a loop */}
            <Link
              href={getUrl(router.asPath, 1)}
              aria-current="page"
              className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">
              1
            </Link>
            <Link
              href={getUrl(router.asPath, 2)}
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              2
            </Link>
            <Link
              href={getUrl(router.asPath, 3)}
              className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">
              3
            </Link>
            <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
              ...
            </span>
            <Link
              href={getUrl(router.asPath, 8)}
              className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">
              8
            </Link>
            <Link
              href={getUrl(router.asPath, 9)}
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              9
            </Link>
            <Link
              href={getUrl(router.asPath, 10)}
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              10
            </Link>
            <Link
              href={getUrl(router.asPath, Math.min(currentPage + 1, pages))}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
