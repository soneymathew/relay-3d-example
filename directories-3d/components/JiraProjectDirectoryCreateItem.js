import {useFragment, graphql} from 'react-relay';

const JiraProjectDirectoryCreateItem = ({directory}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryCreateItem_directory on JiraProjectDirectoryCreateItem {
        canCreate
      }
    `,
    directory,
  );
  console.log('************JiraProjectDirectoryCreateItem', data);

  return (
    <div>
      {data.canCreate ? (
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Create
        </button>
      ) : (
        "can't create"
      )}
    </div>
  );
};

export default JiraProjectDirectoryCreateItem;
