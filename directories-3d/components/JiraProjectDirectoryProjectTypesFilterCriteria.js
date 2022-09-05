import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';

const JiraProjectDirectoryProjectTypesFilterCriteria = ({directory}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryProjectTypesFilterCriteria_content on JiraProjectDirectoryProjectTypesFilterCriteria {
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

export default JiraProjectDirectoryProjectTypesFilterCriteria;
