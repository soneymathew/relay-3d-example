import {useFragment, graphql} from 'react-relay';
import {JiraProjectLinkCell_content$key} from '../../__generated__/JiraProjectLinkCell_content.graphql';

const JiraProjectLinkCell = ({
  content,
}: {
  content: JiraProjectLinkCell_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectLinkCell_content on JiraProjectLinkCell {
        project {
          url
        }
      }
    `,
    content,
  );

  return data?.project?.url ? (
    <a href={data.project.url}>🔗</a>
  ) : (
    <span>&nbsp;</span>
  );
};

export default JiraProjectLinkCell;
