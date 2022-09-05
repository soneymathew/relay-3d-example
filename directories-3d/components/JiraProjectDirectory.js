import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';

const JiraProjectDirectory = ({directory}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectory_directory on JiraProjectDirectory {
        title
        createDirectoryItem @match(key: "JiraProjectDirectory_directory_createDirectoryItem") { 
          ...JiraProjectDirectoryCreateItem_directory @module(name: "JiraDirectoryCreateItem")
        }
        filterCriteria @match {
          ...JiraDirectorySearchTextFilterCriteria_content @module(name: "JiraDirectorySearchTextFilterCriteria")
          ...JiraProjectDirectoryProjectTypesFilterCriteria_content @module(name: "JiraProjectDirectoryProjectTypesFilterCriteria")
          ...JiraProjectDirectoryProjectCategoriesFilterCriteria_content @module(name: "JiraProjectDirectoryProjectCategoriesFilterCriteria")
        }
        result @match(key: "JiraProjectDirectory_directory_result") {
          ...JiraProjectDirectoryResults_content @module(name: "JiraProjectDirectoryResult")
        }
      }
    `,
    directory,
  );

  return (
    <article>
      <Title>{data.title}</Title>
      <br/>
      <div>{data.content}</div>
      {data.filterCriteria.map(criteria => (criteria ? <RelayMatchContainer match={criteria} /> : <p>Unsupported filterCriteria.</p>))}
    </article>
  );
};

export default JiraProjectDirectory;
