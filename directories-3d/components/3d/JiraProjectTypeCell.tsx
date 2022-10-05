import {useFragment, graphql} from 'react-relay';
import {JiraProjectTypeCell_content$key} from '../../__generated__/JiraProjectTypeCell_content.graphql';

const JiraProjectTypeCell = ({
  content,
}: {
  content: JiraProjectTypeCell_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectTypeCell_content on JiraProjectTypeCell {
        project {
          simplified
          projectType {
            teamManagedDisplayName
            companyManagedDisplayName
          }
        }
      }
    `,
    content,
  );

  return (
    <span>
      {data?.project?.simplified
        ? data?.project?.projectType?.teamManagedDisplayName
        : data?.project?.projectType?.companyManagedDisplayName}
    </span>
  );
};

export default JiraProjectTypeCell;
