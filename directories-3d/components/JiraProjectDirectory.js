import {useFragment, graphql} from 'react-relay';
import {Title, Text} from './LayoutComponents';
import RelayMatchContainer from './RelayMatchContainer';

const JiraProjectDirectory = ({directory}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectory_directory on JiraProjectDirectory {
        title
        createDirectoryItem
          @match(key: "JiraProjectDirectory_directory_createDirectoryItem") {
          ...JiraProjectDirectoryCreateItem_directory
            @module(name: "JiraProjectDirectoryCreateItem")
        }
        filterCriteria @match {
          ...JiraDirectorySearchTextFilterCriteria_content
            @module(name: "JiraDirectorySearchTextFilterCriteria")
          ...JiraProjectDirectoryProjectTypesFilterCriteria_content
            @module(name: "JiraProjectDirectoryProjectTypesFilterCriteria")
          ...JiraProjectDirectoryProjectCategoriesFilterCriteria_content
            @module(name: "JiraProjectDirectoryProjectCategoriesFilterCriteria")
        }
        result @match(key: "JiraProjectDirectory_directory_result") {
          ...JiraProjectDirectoryResults_content
            @module(name: "JiraProjectDirectoryResult")
        }
      }
    `,
    directory,
  );

  return (
    <div>
      <Title>{data.title}</Title>
      <div>
        {data.createDirectoryItem ? (
          <RelayMatchContainer match={data.createDirectoryItem} />
        ) : (
          <p>Unsupported result.</p>
        )}
      </div>
      <div>
        {data.filterCriteria.map((criteria, index) =>
          criteria ? (
            <RelayMatchContainer key={`criteria-${index}`} match={criteria} />
          ) : (
            <p>Unsupported filterCriteria.</p>
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

export default JiraProjectDirectory;
