import {useFragment, graphql} from 'react-relay';
import {useState} from 'react';
import {Listbox} from '@headlessui/react';
import {JiraProjectDirectoryProjectTypesFilterCriteria_content$key} from '../../__generated__/JiraProjectDirectoryProjectTypesFilterCriteria_content.graphql';

const projectTypes = [
  {id: 1, name: 'Product Discovery'},
  {id: 1, name: 'Jira Software'},
  {id: 1, name: 'Jira Service Management'},
  {id: 1, name: 'Jira Work Management'},
];

const JiraProjectDirectoryProjectTypesFilterCriteria = ({
  content,
}: {
  content: JiraProjectDirectoryProjectTypesFilterCriteria_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryProjectTypesFilterCriteria_content on JiraProjectDirectoryProjectTypesFilterCriteria {
        selectedItems {
          displayName
          id
        }
      }
    `,
    content,
  );
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([
    projectTypes[0],
    projectTypes[1],
  ]);

  return (
    <Listbox
      value={selectedProjectTypes}
      onChange={setSelectedProjectTypes}
      multiple>
      <Listbox.Button>
        {data.selectedItems?.map((item) => item?.displayName).join(', ')}
      </Listbox.Button>
      <Listbox.Options>
        {projectTypes.map((projectType) => (
          <Listbox.Option key={projectType.id} value={projectType}>
            {projectType.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default JiraProjectDirectoryProjectTypesFilterCriteria;
