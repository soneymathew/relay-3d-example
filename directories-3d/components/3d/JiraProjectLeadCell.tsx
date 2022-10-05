import {useFragment, graphql} from 'react-relay';
import {JiraProjectLeadCell_content$key} from '../../__generated__/JiraProjectLeadCell_content.graphql';

const JiraProjectLeadCell = ({
  content,
}: {
  content: JiraProjectLeadCell_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectLeadCell_content on JiraProjectLeadCell {
        project {
          lead {
            displayName
          }
        }
      }
    `,
    content,
  );

  return <span>{data?.project?.lead?.displayName}</span>;
};

export default JiraProjectLeadCell;
