import {useFragment, graphql} from 'react-relay';

const JiraProjectTypeCell = ({content}) => {
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
      {data.project.simplified
        ? data.project.projectType.teamManagedDisplayName
        : data.project.projectType.companyManagedDisplayName}
    </span>
  );
};

export default JiraProjectTypeCell;
