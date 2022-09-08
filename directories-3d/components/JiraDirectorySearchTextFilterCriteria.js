import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';

const JiraDirectorySearchTextFilterCriteria = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraDirectorySearchTextFilterCriteria_content on JiraDirectorySearchTextFilterCriteria {
        type
      }
    `,
    content,
  );
  // console.log('************JiraDirectorySearchTextFilterCriteria', data);
  return (
    <div class="flex">
      <div class="bg-gray-200 py-2 px-3 border border-r-0 rounded-l-md border-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        class="flex-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        type="text"
      />
      <button
        type="button"
        class="rounded-r-md bg-gray-200 py-2 px-3 border border-l-0 border-gray-300">
        Search
      </button>
    </div>
  );
};

export default JiraDirectorySearchTextFilterCriteria;
