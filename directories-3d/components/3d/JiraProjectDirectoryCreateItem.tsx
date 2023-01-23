import {useFragment, graphql} from 'react-relay';
import {JiraProjectDirectoryCreateItem_directory$key} from '../../__generated__/JiraProjectDirectoryCreateItem_directory.graphql';

const JiraProjectDirectoryCreateItem = ({
  directory,
}: {
  directory: JiraProjectDirectoryCreateItem_directory$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryCreateItem_directory on JiraProjectDirectoryCreateItem {
        canCreate
      }
    `,
    directory,
  );

  return (
    <div>
      {data.canCreate ? (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Create
        </button>
      ) : (
        "can't create"
      )}
    </div>
  );
};

export default JiraProjectDirectoryCreateItem;
