import {useFragment, graphql} from 'react-relay';

const JiraProjectFavouriteCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectFavouriteCell_content on JiraProjectFavouriteCell {
        isFavourite
      }
    `,
    content,
  );

  return (
      <span>{data.isFavourite}</span>
  );
};

export default JiraProjectFavouriteCell;
