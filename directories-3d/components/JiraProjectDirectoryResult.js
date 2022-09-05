import {useFragment, graphql} from 'react-relay';
import {Title, Text} from './LayoutComponents';
import {RelayMatchContainer} from './RelayMatchContainer';

const JiraProjectDirectoryResult = ({results}) => {
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
            type
            renderer @match {
              ...JiraProjectFavouriteCell_content
                @module(name: "JiraProjectFavouriteCell")
            }
          }
        }
      }
    `,
    results,
  );

  return (
    <table class="table-auto">
      <thead>
        <tr>
          {data.headers.map((header) => (
            <th>{header.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row) => (
          <tr>
            {row.columns.map(
              column => (
                <td>
                  {column.renderer ? <RelayMatchContainer match={column.renderer} /> : <p>Unsupported cell.</p>}
                </td>)
              )
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JiraProjectDirectoryResult;
