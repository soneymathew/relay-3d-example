import {useFragment, graphql} from 'react-relay';
import {JiraGenericDirectoryCreateItem_directory$key} from '../../__generated__/JiraGenericDirectoryCreateItem_directory.graphql';

const JiraGenericDirectoryCreateItem = ({
  directory,
}: {
  directory: JiraGenericDirectoryCreateItem_directory$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraGenericDirectoryCreateItem_directory on JiraCreateEntityAction {
        canPerform
      }
    `,
    directory,
  );

  return (
    <div>
      {data.canPerform ? (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Create
        </button>
      ) : (
        "can't create"
      )}
    </div>
  );
};

export default JiraGenericDirectoryCreateItem;
