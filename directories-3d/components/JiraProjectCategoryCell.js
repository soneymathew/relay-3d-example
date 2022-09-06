import {useFragment, graphql} from 'react-relay';

const JiraProjectCategoryCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectCategoryCell_content on JiraProjectCategoryCell {
        project {
   todo
}      }
    `,
    content,
  );

  return (
      <span>{data.project.todo}</span>
  );
};

export default JiraProjectCategoryCell;
