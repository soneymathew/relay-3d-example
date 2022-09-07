import {useCallback} from 'react';
import {useFragment, graphql} from 'react-relay';

const JiraProjectFavouriteCell = ({content}) => {
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

  return <span onClick={onClick}>{data?.project?.favourite ? '⭐' : ''}</span>;
};

export default JiraProjectFavouriteCell;
