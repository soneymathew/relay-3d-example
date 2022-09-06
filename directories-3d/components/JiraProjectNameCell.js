import {useFragment, graphql} from 'react-relay';

const JiraProjectNameCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectNameCell_content on JiraProjectNameCell {
        project {
          name
        }
      }
    `,
    content,
  );

  return <span>{data.project.name}</span>;
};

export default JiraProjectNameCell;
