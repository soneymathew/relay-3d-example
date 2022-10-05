import {useFragment, graphql} from 'react-relay';
import {JiraProjectNameCell_content$key} from '../../__generated__/JiraProjectNameCell_content.graphql';

const JiraProjectNameCell = ({
  content,
}: {
  content: JiraProjectNameCell_content$key;
}) => {
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

  return <a href={`/browse/${data?.project?.key}`}>{data?.project?.name}</a>;
};

export default JiraProjectNameCell;
