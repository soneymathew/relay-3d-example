import {useFragment, graphql} from 'react-relay';

const JiraProjectActionsCell = ({content}) => {
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

  return <span>{data.project.isPrivate ? 'actions' : 'no-actions'}</span>;
};

export default JiraProjectActionsCell;
