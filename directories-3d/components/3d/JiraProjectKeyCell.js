import {useFragment, graphql} from 'react-relay';

const JiraProjectKeyCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectKeyCell_content on JiraProjectKeyCell {
        project {
          key
        }
      }
    `,
    content,
  );

  return <span>{data.project.key}</span>;
};

export default JiraProjectKeyCell;
