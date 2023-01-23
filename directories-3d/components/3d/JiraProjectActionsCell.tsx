import {useFragment, graphql} from 'react-relay';
import {JiraProjectActionsCell_content$key} from '../../__generated__/JiraProjectActionsCell_content.graphql';
import {Bars3Icon} from '@heroicons/react/20/solid';

const JiraProjectActionsCell = ({
  content,
}: {
  content: JiraProjectActionsCell_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectActionsCell_content on JiraProjectActionsCell {
        project {
          isPrivate
        }
      }
    `,
    content,
  );

  return (
    <span>
      {data?.project?.isPrivate ? <Bars3Icon className="w-6 h-6" /> : null}
    </span>
  );
};

export default JiraProjectActionsCell;
