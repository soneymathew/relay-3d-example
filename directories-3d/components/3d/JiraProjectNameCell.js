import {useFragment, graphql} from 'react-relay';

const JiraProjectNameCell = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectNameCell_content on JiraProjectNameCell {
        project {
          name
          key
        }
      }
    `,
    content,
  );

  return <a href={`/browse/${data.project.key}`}>{data.project.name}</a>;
};

export default JiraProjectNameCell;
