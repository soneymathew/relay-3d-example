import {useFragment, graphql} from 'react-relay';
import {Select} from '../common/Select';
import {JiraProjectDirectoryProjectCategoriesFilterCriteria_content$key} from '../../__generated__/JiraProjectDirectoryProjectCategoriesFilterCriteria_content.graphql';

const JiraProjectDirectoryProjectCategoriesFilterCriteria = ({
  content,
}: {
  content: JiraProjectDirectoryProjectCategoriesFilterCriteria_content$key;
}) => {
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
  const selectLabel =
    (data?.selectedItems?.length ?? 0) > 0
      ? data.selectedItems?.map((item) => item?.name).join(', ')
      : 'All';
  return <Select label={selectLabel ?? 'All'} options={[]} />;
};

export default JiraProjectDirectoryProjectCategoriesFilterCriteria;
