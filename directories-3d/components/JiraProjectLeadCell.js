import {useFragment, graphql} from 'react-relay';

const JiraProjectLeadCell = ({content}) => {
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

  return <span>{data.project.lead?.displayName}</span>;
};

export default JiraProjectLeadCell;
