import { useFragment, graphql } from 'react-relay';
import RelayMatchContainer from '../RelayMatchContainer';

const JiraProjectDirectoryResult = ({ content }) => {
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

  // console.log('********data', data);
  return (<div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-white border-b">
              <tr>
                {data &&
                  data.headers.map((header, index) => (
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left" key={`header-${index}`}>{header.title}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {data &&
                data.rows.map((row, rowIndex) => (
                  <tr key={`row-${rowIndex}`} className={`${rowIndex % 2 ? "bg-gray-100" : "bg-white"} border-b`}>
                    {row.columns.map((column, columnIndex) => (
                      <td key={`cell-${rowIndex}-${columnIndex}`}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <RelayMatchContainer
                          key={`cellmatch-${rowIndex}-${columnIndex}`}
                          match={column.renderer}
                        />
                      </td>))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>);
};

export default JiraProjectDirectoryResult;
