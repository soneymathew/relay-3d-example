import {useFragment, graphql} from 'react-relay';

const JiraProjectKeyCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectKeyCell_content on JiraProjectKeyCell {
        project {
          todo
        }
      }
    `,
    content,
  );

  return <span>{data.project.todo}</span>;
};

export default JiraProjectKeyCell;
