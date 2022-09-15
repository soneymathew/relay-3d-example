import {graphql, usePreloadedQuery, useLazyLoadQuery} from 'react-relay';
import RelayMatchContainer from '../../components/RelayMatchContainer';
import {Content} from '../../components/LayoutComponents';
import Nav from '../../components/Nav';
import {getPreloadedQuery} from '../../lib/relay/getServerSideProps';
import Head from 'next/head'

// TODO: think about relay's query naming conventions
const query = graphql`
  query TypeBasedDirectoryPageQuery($id: ID!) @preloadable {
    jira {
      directory(cloudId: "cid-123", id: $id) @match {
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      </Head>
      <Nav />
      <Content>
        {jira ? <RelayMatchContainer match={jira.directory} /> : <p>Directory not found.</p>}
      </Content>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // console.log('getServerSideProps', ctx.params.type);
  // contains=<searchText>&page=1&selectedCategory=c1&selectedProjectType=service_desk%2Csoftware&sortKey=name&sortOrder=DESC
  // console.log('getServerSideProps', ctx.query);
  // [0] getServerSideProps {
  // [0]   contains: '<searchText>',
  // [0]   page: '1',
  // [0]   selectedCategory: 'c1',
  // [0]   selectedProjectType: 'service_desk,software',
  // [0]   sortKey: 'name',
  // [0]   sortOrder: 'DESC',
  // [0]   type: 'projectsAdmin'
  // [0] }
  return {
    props: {
      preloadedQueries: {
        query: await getPreloadedQuery(query, {id: ctx.query.type}),
      },
    },
  };
}
