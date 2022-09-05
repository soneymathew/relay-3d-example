import {useFragment, graphql} from 'react-relay';

const JiraProjectCategoryCell = ({cell}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectCategoryCell_content on JiraProjectCategoryCell {
        todo
      }
    `,
    cell,
  );

  return (
      <span>{data.todo}</span>
  );
};

export default JiraProjectCategoryCell;
