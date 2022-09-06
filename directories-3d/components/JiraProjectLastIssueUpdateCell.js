import {useFragment, graphql} from 'react-relay';

const JiraProjectLastIssueUpdateCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectLastIssueUpdateCell_content on JiraProjectLastIssueUpdateCell {
        project {
          todo
        }
      }
    `,
    content,
  );

  return <span>{data.project.todo}</span>;
};

export default JiraProjectLastIssueUpdateCell;
