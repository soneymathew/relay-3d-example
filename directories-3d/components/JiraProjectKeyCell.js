import {useFragment, graphql} from 'react-relay';

const JiraProjectKeyCell = ({cell}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectKeyCell_content on JiraProjectKeyCell {
        todo
      }
    `,
    cell,
  );

  return (
      <span>{data.todo}</span>
  );
};

export default JiraProjectKeyCell;
