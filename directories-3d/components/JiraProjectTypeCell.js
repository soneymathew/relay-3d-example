import {useFragment, graphql} from 'react-relay';

const JiraProjectTypeCell = ({cell}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectTypeCell_content on JiraProjectTypeCell {
        todo
      }
    `,
    cell,
  );

  return (
      <span>{data.todo}</span>
  );
};

export default JiraProjectTypeCell;
