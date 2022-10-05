import {useCallback} from 'react';
import {useFragment, graphql} from 'react-relay';
import {JiraProjectFavouriteCell_content$key} from '../../__generated__/JiraProjectFavouriteCell_content.graphql';

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
    <span onClick={onClick}>
      {data?.project?.favourite ? (
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
          <path
            d="M12.072 17.284l-3.905 2.053a1 1 0 01-1.451-1.054l.745-4.349-3.159-3.08a1 1 0 01.554-1.705l4.366-.635 1.953-3.956a1 1 0 011.794 0l1.952 3.956 4.366.635a1 1 0 01.555 1.705l-3.16 3.08.746 4.349a1 1 0 01-1.45 1.054l-3.906-2.053z"
            fill="rgb(255, 171, 0)"
            fillRule="evenodd"></path>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
          <path
            d="M12.072 17.284l-3.905 2.053a1 1 0 01-1.451-1.054l.745-4.349-3.159-3.08a1 1 0 01.554-1.705l4.366-.635 1.953-3.956a1 1 0 011.794 0l1.952 3.956 4.366.635a1 1 0 01.555 1.705l-3.16 3.08.746 4.349a1 1 0 01-1.45 1.054l-3.906-2.053z"
            fill="rgb(223, 225, 230)"
            fillRule="evenodd"></path>
        </svg>
      )}
    </span>
  );
};

export default JiraProjectFavouriteCell;
