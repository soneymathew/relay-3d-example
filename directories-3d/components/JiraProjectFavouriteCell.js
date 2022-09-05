import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';

const JiraProjectFavouriteCell = ({directory}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectFavouriteCell_content on JiraProjectFavouriteCell {
        isFavourite
      }
    `,
    directory,
  );

  return (
    <article>
      <Title>{data.canCreate}</Title>
      {/* <Text>{data.content}</Text> */}
    </article>
  );
};

export default JiraProjectFavouriteCell;
