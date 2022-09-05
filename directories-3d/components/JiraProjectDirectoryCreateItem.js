import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';

const JiraProjectDirectoryCreateItem = ({directory}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryCreateItem_directory on JiraProjectDirectoryCreateItem {
        canCreate
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

export default JiraProjectDirectoryCreateItem;
