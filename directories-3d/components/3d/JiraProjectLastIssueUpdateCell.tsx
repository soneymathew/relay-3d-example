import {useFragment, graphql} from 'react-relay';
import {JiraProjectLastIssueUpdateCell_content$key} from '../../__generated__/JiraProjectLastIssueUpdateCell_content.graphql';

const JiraProjectLastIssueUpdateCell = ({
  content,
}: {
  content: JiraProjectLastIssueUpdateCell_content$key;
}) => {
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

  return <span>{data?.project?.lastIssueUpdateDate}</span>;
};

export default JiraProjectLastIssueUpdateCell;
