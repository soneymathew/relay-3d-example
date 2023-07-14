import {useCallback} from 'react';
import {useFragment, graphql} from 'react-relay';
import {JiraGenericFavouriteField_content$key} from '../../__generated__/JiraGenericFavouriteField_content.graphql';
import {StarIcon} from '@heroicons/react/20/solid';

const JiraGenericFavouriteField = ({
  content,
}: {
  content: JiraGenericFavouriteField_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraGenericFavouriteField_content on JiraGenericFavouriteField {
        favoriteInfo {
          isFavorite
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
      {data?.favoriteInfo?.isFavorite ? (
        <StarIcon
          className="h-5 w-5 text-blue-500"
          title="Remove from Starred"
        />
      ) : (
        <StarIcon className="h-5 w-5 text-gray-400" title="Add to Starred" />
      )}
    </button>
  );
};

export default JiraGenericFavouriteField;
