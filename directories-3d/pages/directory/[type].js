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
  const {directory} = usePreloadedQuery(query, props.queryRefs.query);
  return (
    <>
      <Nav />
      <Content>
        {directory ? <RelayMatchContainer match={directory.content} /> : <p>Post not found.</p>}
      </Content>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      preloadedQueries: {
        query: await getPreloadedQuery(query, {id: ctx.query.type}),
      },
    },
  };
}
