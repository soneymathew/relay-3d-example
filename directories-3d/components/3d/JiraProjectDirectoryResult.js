import {useFragment, graphql} from 'react-relay';
import RelayMatchContainer from '../RelayMatchContainer';

const SortIcon = ({className}) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
    </svg>
  );
};

const SortUpIcon = ({className}) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path>
    </svg>
  );
};

const SortDownIcon = ({className}) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
    </svg>
  );
};

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

  // console.log('********data', data);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  {data &&
                    data.headers.map((header, index) => {
                      let SortComponent = null;
                      if (header.isSortable) {
                        SortComponent = (
                          <SortIcon className="w-4 h-4 text-gray-400 opacity-30 group-hover:opacity-100" />
                        );
                        if (header.sortDirection) {
                          if (header.sortDirection == 'DESC') {
                            SortComponent = (
                              <SortDownIcon className="w-4 h-4 text-gray-400" />
                            );
                          } else {
                            SortComponent = (
                              <SortUpIcon className="w-4 h-4 text-gray-400" />
                            );
                          }
                        }
                      }
                      return (
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left group"
                          key={`header-${index}`}>
                          <div className="flex items-left justify-between">
                            {header.title}
                            <span>{SortComponent}</span>
                          </div>
                        </th>
                      );
                    })}
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.rows.map((row, rowIndex) => (
                    <tr
                      key={`row-${rowIndex}`}
                      className={`${
                        rowIndex % 2 ? 'bg-gray-100' : 'bg-white'
                      } border-b`}>
                      {row.columns.map((column, columnIndex) => (
                        <td
                          key={`cell-${rowIndex}-${columnIndex}`}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default JiraProjectDirectoryResult;
