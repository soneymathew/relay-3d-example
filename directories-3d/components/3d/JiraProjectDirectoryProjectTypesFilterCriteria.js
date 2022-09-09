import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../LayoutComponents';

import {Select} from '../common/Select';

const JiraProjectDirectoryProjectTypesFilterCriteria = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryProjectTypesFilterCriteria_content on JiraProjectDirectoryProjectTypesFilterCriteria {
        selectedItems {
          formattedKey
          id
        }
      }
    `,
    content,
  );

  return (
    <Select
      label={data.selectedItems?.map((item) => item.id).join(', ')}
      options={[]}
    />
  );
};

export default JiraProjectDirectoryProjectTypesFilterCriteria;
