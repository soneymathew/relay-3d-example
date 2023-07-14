import {Fragment, useEffect, useState} from 'react';
import {useFragment, useLazyLoadQuery, graphql} from 'react-relay';
import {Listbox, Transition} from '@headlessui/react';
import {
  CheckIcon,
  ChevronUpDownIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';
import {useRouter} from 'next/router';
import {JiraGenericDirectoryProjectTypesFilterCriteria_content$key} from '../../__generated__/JiraGenericDirectoryProjectTypesFilterCriteria_content.graphql';
import {JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery} from '../../__generated__/JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery.graphql';

const JiraGenericDirectoryProjectTypesFilterCriteria = ({
  content,
}: {
  content: JiraGenericDirectoryProjectTypesFilterCriteria_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraGenericDirectoryProjectTypesFilterCriteria_content on JiraGenericDirectoryProjectTypesFilterCriteria {
        selectedItems {
          id
          type
          displayName
        }
      }
    `,
    content,
  );
  // FIX-ME: Replace useLazyLoadQuery with EntryPoint approach
  const pickerData =
    useLazyLoadQuery<JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery>(
      graphql`
        query JiraGenericDirectoryProjectTypesFilterCriteriaPickerQuery(
          $cloudId: ID!
          $searchText: String
        ) {
          jira {
            projectTypes(cloudId: $cloudId, searchText: $searchText) {
              edges {
                node {
                  id
                  type
                  displayName
                }
              }
              totalCount
            }
          }
        }
      `,
      {searchText: '', cloudId: ''}, // FIX-ME: Pass cloudId from route param
    );
  const currentSelectedProjectTypes = data.selectedItems?.map(
    (item) => item?.id,
  );
  const [selectedProjectTypes, setSelectedProjectTypes] = useState(
    currentSelectedProjectTypes,
  );

  const router = useRouter();
  useEffect(() => {
    const url = new URL(document.location.href);
    const selectedProjectTypeParam =
      selectedProjectTypes
        ?.map((projectTypeId) => {
          const splitArr = projectTypeId?.split('-') ?? [];
          return splitArr[splitArr.length - 1];
        })
        .join(',')
        .toLowerCase() ?? '';
    if (
      url.searchParams.get('selectedProjectType') !== selectedProjectTypeParam
    ) {
      if (selectedProjectTypeParam.length > 0) {
        url.searchParams.set('selectedProjectType', selectedProjectTypeParam);
      } else if (
        selectedProjectTypeParam === '' &&
        url.searchParams.get('selectedProjectType') != null
      ) {
        url.searchParams.delete('selectedProjectType');
      }
      if (url.toString() !== document.location.href) {
        router.push(url);
      }
    }
  }, [selectedProjectTypes, router]);

  return (
    <div>
      <Listbox
        value={selectedProjectTypes}
        onChange={setSelectedProjectTypes}
        multiple>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-600 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {selectedProjectTypes?.length !== undefined &&
              selectedProjectTypes?.length > 0
                ? selectedProjectTypes?.map((item, index) => (
                    <span
                      key={`item-${index}`}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-gray-400 hover:text-white font-medium mr-2 py-0.5 px-2.5 rounded-full inline-flex items-center">
                      <span>
                        {
                          data.selectedItems?.filter(
                            (selectedItem) => selectedItem?.id === item,
                          )[0]?.displayName
                        }
                      </span>
                      <XCircleIcon className="h-5 w-5 dark:text-blue-300 text-blue-800" />
                    </span>
                  ))
                : 'All Jira products'}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {pickerData?.jira?.projectTypes?.edges?.map((projectTypeEdge) => (
                <Listbox.Option
                  key={projectTypeEdge?.node?.id}
                  className={({active}) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={projectTypeEdge?.node?.id}>
                  {({selected}) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}>
                        {projectTypeEdge?.node?.displayName}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default JiraGenericDirectoryProjectTypesFilterCriteria;
