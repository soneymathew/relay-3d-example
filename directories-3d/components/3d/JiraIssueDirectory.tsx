import {useFragment, graphql} from 'react-relay';
import {Title} from '../LayoutComponents';
import RelayMatchContainer from '../RelayMatchContainer';
import Head from 'next/head';
import {JiraIssueDirectory_directory$key} from '../../__generated__/JiraIssueDirectory_directory.graphql';
import {Disclosure} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/20/solid';

const JiraIssueDirectory = ({
  directory,
}: {
  directory: JiraIssueDirectory_directory$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraIssueDirectory_directory on JiraIssueDirectory {
        title
        description
        createDirectoryItem
          @match(key: "JiraIssueDirectory_directory_createDirectoryItem") {
          ...JiraGenericDirectoryCreateItem_directory
            @module(name: "JiraGenericDirectoryCreateItem")
        }
        filterCriteria
          @match(key: "JiraIssueDirectory_directory_filterCriteria") {
          ...JiraDirectoryJqlBuilderAdvancedCriteria_content
            @module(name: "JiraDirectoryJqlBuilderAdvancedCriteria")
        }
        result @match(key: "JiraIssueDirectory_directory_result") {
          ...JiraGenericDirectoryResults_content
            @module(name: "JiraGenericDirectoryResult")
        }
      }
    `,
    directory,
  );

  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between mt-3 mb-3">
        <Head>
          <title>{data.title}</title>
          <meta name="description" content="{data.title} directory page" />
        </Head>
        <Title>{data.title}</Title>
        <div>
          {data.createDirectoryItem ? (
            <RelayMatchContainer match={data.createDirectoryItem} />
          ) : (
            <span>❌No create permission❌</span>
          )}
        </div>
      </div>

      <Disclosure>
        {({open}) => (
          <>
            <Disclosure.Button className="whitespace-nowrap flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
              <span>Info</span>
              <ChevronUpIcon
                className={`${
                  open ? '' : 'rotate-180 transform'
                } h-5 w-5 text-blue-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {data.description}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="flex flex-wrap items-center gap-2">
        {data.filterCriteria?.map((criteria, index) =>
          criteria ? (
            <RelayMatchContainer key={`criteria-${index}`} match={criteria} />
          ) : (
            <p key={`criteria-${index}`}>Unsupported filterCriteria.</p>
          ),
        )}
      </div>
      <div>
        {data.result ? (
          <RelayMatchContainer match={data.result} />
        ) : (
          <p>Unsupported result.</p>
        )}
      </div>
    </div>
  );
};

export default JiraIssueDirectory;
