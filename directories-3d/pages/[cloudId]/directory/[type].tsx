import {Fragment} from 'react';
import {graphql, usePreloadedQuery} from 'react-relay';
import RelayMatchContainer from '../../../components/RelayMatchContainer';
import {Content} from '../../../components/LayoutComponents';
import Nav from '../../../components/Nav';
import {getPreloadedQuery} from '../../../lib/relay/getServerSideProps';
import Head from 'next/head';
import preLoadedQuery, {
  TypeBasedDirectoryPageQuery,
} from '../../../__generated__/TypeBasedDirectoryPageQuery.graphql';
import {GetServerSideProps} from 'next';
import {PreloadedQuery} from 'react-relay';

interface DirectoryProps {
  queryRefs: {
    query: PreloadedQuery<TypeBasedDirectoryPageQuery>;
  };
  cloudId: string;
}

const query = graphql`
  query TypeBasedDirectoryPageQuery(
    $cloudId: ID!
    $id: ID!
    $searchText: String
    $selectedTypes: [String!]
    $selectedCategory: String
    $page: Int
    $sortField: String
    $sortDirection: SortDirection
  ) @preloadable {
    jira {
      directory(
        cloudId: $cloudId
        id: $id
        filter: {
          criteria: [
            {
              id: "JiraDirectorySearchTextFilterCriteria"
              type: KEYWORD
              value: $searchText
            }
            {
              id: "JiraGenericDirectoryProjectTypesFilterCriteria"
              type: MULTISELECT
              values: $selectedTypes
            }
            {
              id: "JiraGenericDirectoryProjectCategoriesFilterCriteria"
              type: SELECT
              value: $selectedCategory
            }
          ]
          page: $page
          sortField: $sortField
          sortDirection: $sortDirection
        }
      ) @match {
        ...JiraGenericDirectory_directory @module(name: "JiraGenericDirectory")
        ...JiraIssueDirectory_directory @module(name: "JiraIssueDirectory")
      }
    }
  }
`;

export default function Directory(props: DirectoryProps) {
  const {jira} = usePreloadedQuery<TypeBasedDirectoryPageQuery>(
    query,
    props.queryRefs.query,
  );
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="cloudId" content={props.cloudId} />
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
  return {
    props: {
      preloadedQueries: {
        query: await getPreloadedQuery(preLoadedQuery, {
          cloudId: ctx.query.cloudId,
          id: ctx.query.type,
          searchText: ctx.query.contains ?? null,
          selectedTypes:
            ctx.query.selectedProjectType?.toString().split(',') ?? null,
          selectedCategory: ctx.query.selectedCategory ?? null,
          page: ctx.query.page ? parseInt(ctx.query.page.toString()) : 1,
          sortField: ctx.query.sortKey ?? 'name',
          sortDirection: ctx.query.sortOrder ?? 'ASC',
        }),
      },
    },
  };
};
