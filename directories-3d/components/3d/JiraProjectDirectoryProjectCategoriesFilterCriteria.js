import {useFragment, graphql} from 'react-relay';
import {Select} from '../common/Select';

const JiraProjectDirectoryProjectCategoriesFilterCriteria = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryProjectCategoriesFilterCriteria_content on JiraProjectDirectoryProjectCategoriesFilterCriteria {
        selectedItems {
          name
        }
      }
    `,
    content,
  );

  return (
    <Select
      label={data.selectedItems?.map((item) => item.name).join(', ')}
      options={[]}
    />
  );
};

export default JiraProjectDirectoryProjectCategoriesFilterCriteria;
