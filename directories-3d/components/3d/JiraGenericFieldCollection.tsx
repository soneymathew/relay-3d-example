import {useFragment, graphql} from 'react-relay';
import {JiraGenericFieldCollection_content$key} from '../../__generated__/JiraGenericFieldCollection_content.graphql';
import RelayMatchContainer from '../common/RelayMatchContainer';

const JiraGenericFieldCollection = ({
  content,
}: {
  content: JiraGenericFieldCollection_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraGenericFieldCollection_content on JiraGenericFieldCollection {
        delimiter
        fields(cloudId: "", first: 1) {
          edges {
            node {
              ...JiraGenericField_content @module(name: "JiraGenericField")
            }
          }
          totalCount
        }
      }
    `,
    content,
  );
  return (
    <>
      {(data?.fields?.edges ?? [])
        .map<React.ReactNode>((edge, index) => (
          <RelayMatchContainer key={`cellmatch-${index}`} match={edge?.node} />
        ))
        .reduce(
          (prev, curr) => [prev, prev ? data.delimiter ?? ',' : null, curr],
          null,
        )}
      {(data?.fields?.totalCount ?? 0) > 1 && (
        <span>&nbsp;+{(data?.fields?.totalCount ?? 1) - 1}</span>
      )}
    </>
  );
};

export default JiraGenericFieldCollection;
