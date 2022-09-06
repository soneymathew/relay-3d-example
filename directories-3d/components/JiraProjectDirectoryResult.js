import {useFragment, graphql} from 'react-relay';
import RelayMatchContainer from './RelayMatchContainer';

const JiraProjectDirectoryResult = ({content}) => {
  const data = useFragment(
    graphql`
      fragment JiraProjectDirectoryResults_content on JiraProjectDirectoryResult {
        headers {
          title
          isSortable
          sortDirection
        }
        rows {
          columns {
            renderer @match {
              ...JiraProjectFavouriteCell_content
                @module(name: "JiraProjectFavouriteCell")
              ...JiraProjectNameCell_content
                @module(name: "JiraProjectNameCell")
              ...JiraProjectKeyCell_content @module(name: "JiraProjectKeyCell")
              ...JiraProjectTypeCell_content
                @module(name: "JiraProjectTypeCell")
              ...JiraProjectLeadCell_content
                @module(name: "JiraProjectLeadCell")
              ...JiraProjectLastIssueUpdateCell_content
                @module(name: "JiraProjectLastIssueUpdateCell")
              ...JiraProjectCategoryCell_content
                @module(name: "JiraProjectCategoryCell")
              ...JiraProjectLinkCell_content
                @module(name: "JiraProjectLinkCell")
              ...JiraProjectActionsCell_content
                @module(name: "JiraProjectActionsCell")
            }
          }
        }
      }
    `,
    content,
  );

  console.log('********data', data);

  return (
    <table className="table-auto">
      <thead>
        <tr>
          {data &&
            data.headers.map((header, index) => (
              <th key={`header-${index}`}>{header.title}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.columns.map((column, columnIndex) => (
                <td key={`cell-${rowIndex}-${columnIndex}`}>
                  <RelayMatchContainer
                    key={`cellmatch-${rowIndex}-${columnIndex}`}
                    match={column.renderer}
                  />
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default JiraProjectDirectoryResult;
