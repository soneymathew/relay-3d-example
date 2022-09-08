import {graphql, usePreloadedQuery, useLazyLoadQuery} from 'react-relay';
import RelayMatchContainer from '../../components/RelayMatchContainer';
import {Content} from '../../components/LayoutComponents';
import Nav from '../../components/Nav';
import {getPreloadedQuery} from '../../lib/relay/getServerSideProps';

// TODO: think about relay's query naming conventions
const query = graphql`
  query TypeBasedDirectoryPageQuery($id: ID!) @preloadable {
    jira {
      directory(cloudId: "todo", id: $id) @match {
        ...JiraProjectDirectory_directory @module(name: "JiraProjectDirectory")
      }
    }
  }
`;

export default function Post(props) {
  const {jira} = usePreloadedQuery(query, props.queryRefs.query);
  // console.log('*******jira', jira);
  return (
    <>
      <Nav />
      <Content>
        {jira ? <RelayMatchContainer match={jira.directory} /> : <p>Directory not found.</p>}
      </Content>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // console.log('getServerSideProps', ctx.params.type);
  return {
    props: {
      preloadedQueries: {
        query: await getPreloadedQuery(query, {id: ctx.query.type}),
      },
    },
  };
}
