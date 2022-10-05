import {Fragment} from 'react';
import {graphql, usePreloadedQuery} from 'react-relay';
import RelayMatchContainer from '../../components/RelayMatchContainer';
import {Content} from '../../components/LayoutComponents';
import Nav from '../../components/Nav';
import {getPreloadedQuery} from '../../lib/relay/getServerSideProps';
import Head from 'next/head';
import preLoadedQuery, {
  TypeBasedDirectoryPageQuery,
} from '../../__generated__/TypeBasedDirectoryPageQuery.graphql';
import {GetServerSideProps} from 'next';
import {PreloadedQuery} from 'react-relay';

interface DirectoryProps {
  queryRefs: {
    query: PreloadedQuery<TypeBasedDirectoryPageQuery>;
  };
}

const query = graphql`
  query TypeBasedDirectoryPageQuery($id: ID!) @preloadable {
    jira {
      directory(cloudId: "cid-123", id: $id) @match {
        ...JiraProjectDirectory_directory @module(name: "JiraProjectDirectory")
      }
    }
  }
`;

export default function Directory(props: DirectoryProps) {
  const {jira} = usePreloadedQuery<TypeBasedDirectoryPageQuery>(
    query,
    props.queryRefs.query,
  );
  // console.log('*******jira', jira);
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Nav />
      <Content>
        {jira ? (
          <RelayMatchContainer match={jira.directory} />
        ) : (
          <p>Directory not found.</p>
        )}
      </Content>
    </Fragment>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
        query: await getPreloadedQuery(preLoadedQuery, {id: ctx.query.type}),
      },
    },
  };
};
