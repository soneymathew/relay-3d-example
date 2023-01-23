import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {useFragment, graphql} from 'react-relay';
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import {JiraDirectorySearchTextFilterCriteria_content$key} from '../../__generated__/JiraDirectorySearchTextFilterCriteria_content.graphql';

const JiraDirectorySearchTextFilterCriteria = ({
  content,
}: {
  content: JiraDirectorySearchTextFilterCriteria_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraDirectorySearchTextFilterCriteria_content on JiraDirectorySearchTextFilterCriteria {
        type
        searchText
      }
    `,
    content,
  );

  const [keyword, setKeyword] = useState(data && data.searchText);
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  const router = useRouter();
  useEffect(() => {
    const url = new URL(document.location.href);
    if (
      url.searchParams.get('contains') !== debouncedKeyword &&
      debouncedKeyword !== null
    ) {
      url.searchParams.set('contains', debouncedKeyword);
      router.push(url);
    }
  }, [debouncedKeyword, router]);

  return (
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </div>
      <input
        type="text"
        id="simple-search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        required
        value={keyword ?? ''}
        onChange={(event) => {
          setKeyword(event.target.value);
        }}
      />
    </div>
  );
};

export default JiraDirectorySearchTextFilterCriteria;
