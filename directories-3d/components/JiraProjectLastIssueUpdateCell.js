import {useFragment, graphql} from 'react-relay';

const JiraProjectLastIssueUpdateCell = ({cell}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectLastIssueUpdateCell_content on JiraProjectLastIssueUpdateCell {
        todo
      }
    `,
    cell,
  );

  return (
      <span>{data.todo}</span>
  );
};

export default JiraProjectLastIssueUpdateCell;
