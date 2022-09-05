import {useFragment, graphql} from 'react-relay';

const JiraProjectFavouriteCell = ({cell}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectFavouriteCell_content on JiraProjectFavouriteCell {
        isFavourite
      }
    `,
    cell,
  );

  return (
      <span>{data.isFavourite}</span>
  );
};

export default JiraProjectFavouriteCell;
