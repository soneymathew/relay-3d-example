import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';

const JiraDirectorySearchTextFilterCriteria = ({directory}) => {
  const data = useFragment(
    graphql`
      fragment JiraDirectorySearchTextFilterCriteria_content on JiraDirectorySearchTextFilterCriteria {
        type
      }
    `,
    directory,
  );

  return (
    <article>
      <Title>{data.canCreate}</Title>
      {/* <Text>{data.content}</Text> */}
    </article>
  );
};

export default JiraDirectorySearchTextFilterCriteria;
