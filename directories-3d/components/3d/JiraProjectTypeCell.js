import {useFragment, graphql} from 'react-relay';

const JiraProjectTypeCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectTypeCell_content on JiraProjectTypeCell {
        project {
          projectTypeKey
        }
      }
    `,
    content,
  );

  return <span>{data.project.projectTypeKey}</span>;
};

export default JiraProjectTypeCell;
