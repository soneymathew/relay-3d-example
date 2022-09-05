import {useFragment, graphql} from 'react-relay';

const JiraProjectLeadCell = ({cell}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectLeadCell_content on JiraProjectLeadCell {
        todo
      }
    `,
    cell,
  );

  return (
      <span>{data.todo}</span>
  );
};

export default JiraProjectLeadCell;
