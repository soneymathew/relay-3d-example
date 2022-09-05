import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';

const JiraProjectDirectoryProjectCategoriesFilterCriteria = ({directory}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryProjectCategoriesFilterCriteria_content on JiraProjectDirectoryProjectCategoriesFilterCriteria {
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

export default JiraProjectDirectoryProjectCategoriesFilterCriteria;
