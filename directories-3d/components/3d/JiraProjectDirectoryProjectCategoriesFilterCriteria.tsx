import {Fragment, useEffect, useState} from 'react';
import {useFragment, useLazyLoadQuery, graphql} from 'react-relay';
import {Listbox, Transition} from '@headlessui/react';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid';
import {useRouter} from 'next/router';
import {JiraProjectDirectoryProjectCategoriesFilterCriteria_content$key} from '../../__generated__/JiraProjectDirectoryProjectCategoriesFilterCriteria_content.graphql';
import {JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery} from '../../__generated__/JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery.graphql';

const JiraProjectDirectoryProjectCategoriesFilterCriteria = ({
  content,
}: {
  content: JiraProjectDirectoryProjectCategoriesFilterCriteria_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryProjectCategoriesFilterCriteria_content on JiraProjectDirectoryProjectCategoriesFilterCriteria {
        selectedItems {
          id
          categoryId
          name
        }
      }
    `,
    content,
  );
  // FIX-ME: Replace useLazyLoadQuery with EntryPoint approach
  const pickerData =
    useLazyLoadQuery<JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery>(
      graphql`
        query JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery(
          $cloudId: ID!
          $searchText: String
        ) {
          jira {
            projectCategories(
              cloudId: $cloudId
              first: 10
              searchText: $searchText
            ) {
              edges {
                node {
                  id
                  categoryId
                  name
                }
              }
              totalCount
            }
          }
        }
      `,
      {searchText: '', cloudId: ''}, // FIX-ME: Pass cloudId from route param
    );
  const currentSelectedCategoryId = data.selectedItems?.map(
    (item) => item?.categoryId,
  )[0];
  const [selectedCategories, setSelectedCategories] = useState(
    currentSelectedCategoryId ?? '',
  );

  const router = useRouter();
  useEffect(() => {
    const url = new URL(document.location.href);
    if (url.searchParams.get('selectedCategory') !== selectedCategories) {
      if (selectedCategories.length > 0) {
        url.searchParams.set('selectedCategory', selectedCategories);
      } else if (
        selectedCategories === '' &&
        url.searchParams.get('selectedCategory') != null
      ) {
        url.searchParams.delete('selectedCategory');
      }
      if (url.toString() !== document.location.href) {
        router.push(url);
      }
    }
  }, [selectedCategories, router]);
  return (
    <div>
      <Listbox value={selectedCategories} onChange={setSelectedCategories}>
        <div className="relative mt-1">
          <Listbox.Button className="relative min-w-full w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {data.selectedItems?.length && data.selectedItems?.length > 0
                ? data.selectedItems?.map((item) => item?.name).join(', ')
                : 'All categories'}
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
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <Listbox.Option
                key={'All Categories'}
                className={({active}) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={''}>
                {({selected}) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}>
                      {'All Categories'}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
              {pickerData?.jira?.projectCategories?.edges?.map(
                (projectCategoryEdge) => (
                  <Listbox.Option
                    key={projectCategoryEdge?.node?.id}
                    className={({active}) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={projectCategoryEdge?.node?.categoryId}>
                    {({selected}) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}>
                          {projectCategoryEdge?.node?.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ),
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default JiraProjectDirectoryProjectCategoriesFilterCriteria;
