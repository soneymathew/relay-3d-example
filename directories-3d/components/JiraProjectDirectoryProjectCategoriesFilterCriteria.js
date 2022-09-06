import {useFragment, graphql} from 'react-relay';

const JiraProjectDirectoryProjectCategoriesFilterCriteria = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryProjectCategoriesFilterCriteria_content on JiraProjectDirectoryProjectCategoriesFilterCriteria {
        type
      }
    `,
    content,
  );

  return <span>Category picker here</span>;
};

export default JiraProjectDirectoryProjectCategoriesFilterCriteria;
