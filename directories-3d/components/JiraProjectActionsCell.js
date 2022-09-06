import {useFragment, graphql} from 'react-relay';

const JiraProjectActionsCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectActionsCell_content on JiraProjectActionsCell {
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

export default JiraProjectActionsCell;
