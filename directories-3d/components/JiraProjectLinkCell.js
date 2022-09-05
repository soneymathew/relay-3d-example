import {useFragment, graphql} from 'react-relay';

const JiraProjectLinkCell = ({cell}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectLinkCell_content on JiraProjectLinkCell {
        todo
      }
    `,
    cell,
  );

  return (
      <span>{data.todo}</span>
  );
};

export default JiraProjectLinkCell;
