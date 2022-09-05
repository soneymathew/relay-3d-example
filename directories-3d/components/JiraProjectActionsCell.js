import {useFragment, graphql} from 'react-relay';

const JiraProjectActionsCell = ({cell}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectActionsCell_content on JiraProjectActionsCell {
        todo
      }
    `,
    cell,
  );

  return (
      <span>{data.todo}</span>
  );
};

export default JiraProjectActionsCell;
