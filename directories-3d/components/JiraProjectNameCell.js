import {useFragment, graphql} from 'react-relay';

const JiraProjectNameCell = ({cell}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectNameCell_content on JiraProjectNameCell {
        name
      }
    `,
    cell,
  );

  return (
      <span>{data.name}</span>
  );
};

export default JiraProjectNameCell;
