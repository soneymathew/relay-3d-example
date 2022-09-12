import {useFragment, graphql} from 'react-relay';

const JiraProjectLastIssueUpdateCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectLastIssueUpdateCell_content on JiraProjectLastIssueUpdateCell {
        project {
          lastIssueUpdateDate
        }
      }
    `,
    content,
  );

  return <span>{data.project.lastIssueUpdateDate}</span>;
};

export default JiraProjectLastIssueUpdateCell;
