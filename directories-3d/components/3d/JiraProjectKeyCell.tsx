import {useFragment, graphql} from 'react-relay';
import {JiraProjectKeyCell_content$key} from '../../__generated__/JiraProjectKeyCell_content.graphql';

const JiraProjectKeyCell = ({
  content,
}: {
  content: JiraProjectKeyCell_content$key;
}) => {
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

  return <span>{data?.project?.key}</span>;
};

export default JiraProjectKeyCell;
