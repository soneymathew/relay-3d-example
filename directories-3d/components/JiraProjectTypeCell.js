import {useFragment, graphql} from 'react-relay';

const JiraProjectTypeCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectTypeCell_content on JiraProjectTypeCell {
        project {
          todo
        }
      }
    `,
    content,
  );

  return <span>{data.project.todo}</span>;
};

export default JiraProjectTypeCell;
