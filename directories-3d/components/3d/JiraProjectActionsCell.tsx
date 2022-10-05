import {useFragment, graphql} from 'react-relay';
import {JiraProjectActionsCell_content$key} from '../../__generated__/JiraProjectActionsCell_content.graphql';

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
      {data?.project?.isPrivate ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      ) : null}
    </span>
  );
};

export default JiraProjectActionsCell;
