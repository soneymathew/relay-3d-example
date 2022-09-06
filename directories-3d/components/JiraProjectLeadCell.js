import {useFragment, graphql} from 'react-relay';

const JiraProjectLeadCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectLeadCell_content on JiraProjectLeadCell {
        project {
          todo
        }
      }
    `,
    content,
  );

  return <span>{data.project.todo}</span>;
};

export default JiraProjectLeadCell;
