import {useCallback} from 'react';
import {useFragment, graphql} from 'react-relay';
import {JiraProjectFavouriteCell_content$key} from '../../__generated__/JiraProjectFavouriteCell_content.graphql';
import {StarIcon} from '@heroicons/react/20/solid';

const JiraProjectFavouriteCell = ({
  content,
}: {
  content: JiraProjectFavouriteCell_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectFavouriteCell_content on JiraProjectFavouriteCell {
        project {
          favourite
        }
      }
    `,
    content,
  );

  const onClick = useCallback(() => {
    // api call
  }, []);

  return (
    <button onClick={onClick} className="align-middle">
      {data?.project?.favourite ? (
        <StarIcon className="h-5 w-5 text-blue-500" />
      ) : (
        <StarIcon className="h-5 w-5 text-gray-400" />
      )}
    </button>
  );
};

export default JiraProjectFavouriteCell;
