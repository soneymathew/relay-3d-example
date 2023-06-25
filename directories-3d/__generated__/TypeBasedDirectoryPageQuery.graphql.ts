/**
 * @generated SignedSource<<ade34c69a6e0c906d531c00337470aaa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency TypeBasedDirectoryPageQuery.jira.directory {"branches":{"JiraGenericDirectory":{"component":"JiraGenericDirectory","fragment":"JiraGenericDirectory_directory$normalization.graphql"},"JiraIssueDirectory":{"component":"JiraIssueDirectory","fragment":"JiraIssueDirectory_directory$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraGenericDirectory_directory.createDirectoryItem {"branches":{"JiraGenericDirectoryCreateItem":{"component":"JiraGenericDirectoryCreateItem","fragment":"JiraGenericDirectoryCreateItem_directory$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraGenericDirectory_directory.filterCriteria {"branches":{"JiraDirectorySearchTextFilterCriteria":{"component":"JiraDirectorySearchTextFilterCriteria","fragment":"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectCategoriesFilterCriteria":{"component":"JiraGenericDirectoryProjectCategoriesFilterCriteria","fragment":"JiraGenericDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectTypesFilterCriteria":{"component":"JiraGenericDirectoryProjectTypesFilterCriteria","fragment":"JiraGenericDirectoryProjectTypesFilterCriteria_content$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraGenericDirectory_directory.result {"branches":{"JiraGenericDirectoryResult":{"component":"JiraGenericDirectoryResult","fragment":"JiraGenericDirectoryResults_content$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraIssueDirectory_directory.createDirectoryItem {"branches":{"JiraGenericDirectoryCreateItem":{"component":"JiraGenericDirectoryCreateItem","fragment":"JiraGenericDirectoryCreateItem_directory$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraIssueDirectory_directory.filterCriteria {"branches":{"JiraDirectorySearchTextFilterCriteria":{"component":"JiraDirectorySearchTextFilterCriteria","fragment":"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectCategoriesFilterCriteria":{"component":"JiraGenericDirectoryProjectCategoriesFilterCriteria","fragment":"JiraGenericDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectTypesFilterCriteria":{"component":"JiraGenericDirectoryProjectTypesFilterCriteria","fragment":"JiraGenericDirectoryProjectTypesFilterCriteria_content$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraIssueDirectory_directory.result {"branches":{"JiraGenericDirectoryResult":{"component":"JiraGenericDirectoryResult","fragment":"JiraGenericDirectoryResults_content$normalization.graphql"}},"plural":false}

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SortDirection = "ASC" | "DESC" | "%future added value";
export type TypeBasedDirectoryPageQuery$variables = {
  cloudId: string;
  id: string;
  page?: number | null;
  searchText?: string | null;
  selectedCategory?: string | null;
  selectedTypes?: ReadonlyArray<string> | null;
  sortDirection?: SortDirection | null;
  sortField?: string | null;
};
export type TypeBasedDirectoryPageQuery$data = {
  readonly jira: {
    readonly directory: {
      readonly __fragmentPropName?: string | null;
      readonly __module_component?: string | null;
      readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectory_directory" | "JiraIssueDirectory_directory">;
    };
  } | null;
};
export type TypeBasedDirectoryPageQuery = {
  response: TypeBasedDirectoryPageQuery$data;
  variables: TypeBasedDirectoryPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cloudId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "searchText"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "selectedCategory"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "selectedTypes"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortDirection"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortField"
},
v8 = [
  {
    "kind": "Variable",
    "name": "cloudId",
    "variableName": "cloudId"
  },
  {
    "fields": [
      {
        "items": [
          {
            "fields": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "JiraDirectorySearchTextFilterCriteria"
              },
              {
                "kind": "Literal",
                "name": "type",
                "value": "KEYWORD"
              },
              {
                "kind": "Variable",
                "name": "value",
                "variableName": "searchText"
              }
            ],
            "kind": "ObjectValue",
            "name": "criteria.0"
          },
          {
            "fields": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "JiraGenericDirectoryProjectTypesFilterCriteria"
              },
              {
                "kind": "Literal",
                "name": "type",
                "value": "MULTISELECT"
              },
              {
                "kind": "Variable",
                "name": "values",
                "variableName": "selectedTypes"
              }
            ],
            "kind": "ObjectValue",
            "name": "criteria.1"
          },
          {
            "fields": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "JiraGenericDirectoryProjectCategoriesFilterCriteria"
              },
              {
                "kind": "Literal",
                "name": "type",
                "value": "SELECT"
              },
              {
                "kind": "Variable",
                "name": "value",
                "variableName": "selectedCategory"
              }
            ],
            "kind": "ObjectValue",
            "name": "criteria.2"
          }
        ],
        "kind": "ListValue",
        "name": "criteria"
      },
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      },
      {
        "kind": "Variable",
        "name": "sortDirection",
        "variableName": "sortDirection"
      },
      {
        "kind": "Variable",
        "name": "sortField",
        "variableName": "sortField"
      }
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  },
  {
    "kind": "Literal",
    "name": "supported",
    "value": "2JC3zz"
  }
],
v9 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "args": null,
      "documentName": "TypeBasedDirectoryPageQuery",
      "fragmentName": "JiraGenericDirectory_directory",
      "fragmentPropName": "directory",
      "kind": "ModuleImport"
    }
  ],
  "type": "JiraGenericDirectory",
  "abstractKey": null
},
v10 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "args": null,
      "documentName": "TypeBasedDirectoryPageQuery",
      "fragmentName": "JiraIssueDirectory_directory",
      "fragmentPropName": "directory",
      "kind": "ModuleImport"
    }
  ],
  "type": "JiraIssueDirectory",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TypeBasedDirectoryPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "JiraQuery",
        "kind": "LinkedField",
        "name": "jira",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "directory",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/),
      (v4/*: any*/),
      (v2/*: any*/),
      (v7/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Operation",
    "name": "TypeBasedDirectoryPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "JiraQuery",
        "kind": "LinkedField",
        "name": "jira",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "directory",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e5a43a10d2f87a1a1d7b96c486017578",
    "id": null,
    "metadata": {},
    "name": "TypeBasedDirectoryPageQuery",
    "operationKind": "query",
    "text": "query TypeBasedDirectoryPageQuery(\n  $cloudId: ID!\n  $id: ID!\n  $searchText: String\n  $selectedTypes: [String!]\n  $selectedCategory: String\n  $page: Int\n  $sortField: String\n  $sortDirection: SortDirection\n) {\n  jira {\n    directory(cloudId: $cloudId, id: $id, filter: {criteria: [{id: \"JiraDirectorySearchTextFilterCriteria\", type: KEYWORD, value: $searchText}, {id: \"JiraGenericDirectoryProjectTypesFilterCriteria\", type: MULTISELECT, values: $selectedTypes}, {id: \"JiraGenericDirectoryProjectCategoriesFilterCriteria\", type: SELECT, value: $selectedCategory}], page: $page, sortField: $sortField, sortDirection: $sortDirection}, supported: [\"JiraGenericDirectory\", \"JiraIssueDirectory\"]) {\n      __typename\n      ... on JiraGenericDirectory {\n        ...JiraGenericDirectory_directory\n        __module_operation_TypeBasedDirectoryPageQuery: js(module: \"JiraGenericDirectory_directory$normalization.graphql\", id: \"TypeBasedDirectoryPageQuery.jira.directory\")\n        __module_component_TypeBasedDirectoryPageQuery: js(module: \"JiraGenericDirectory\", id: \"TypeBasedDirectoryPageQuery.jira.directory\")\n      }\n      ... on JiraIssueDirectory {\n        ...JiraIssueDirectory_directory\n        __module_operation_TypeBasedDirectoryPageQuery: js(module: \"JiraIssueDirectory_directory$normalization.graphql\", id: \"TypeBasedDirectoryPageQuery.jira.directory\")\n        __module_component_TypeBasedDirectoryPageQuery: js(module: \"JiraIssueDirectory\", id: \"TypeBasedDirectoryPageQuery.jira.directory\")\n      }\n    }\n  }\n}\n\nfragment JiraDirectoryResultPagination_content on HasTotalCount {\n  __isHasTotalCount: __typename\n  totalCount\n}\n\nfragment JiraDirectorySearchTextFilterCriteria_content on JiraDirectorySearchTextFilterCriteria {\n  type\n  searchText\n}\n\nfragment JiraGenericDirectoryCreateItem_directory on JiraGenericDirectoryCreateItem {\n  canCreate\n}\n\nfragment JiraGenericDirectoryProjectCategoriesFilterCriteria_content on JiraGenericDirectoryProjectCategoriesFilterCriteria {\n  selectedItems {\n    id\n    categoryId\n    name\n  }\n}\n\nfragment JiraGenericDirectoryProjectTypesFilterCriteria_content on JiraGenericDirectoryProjectTypesFilterCriteria {\n  selectedItems {\n    id\n    type\n    displayName\n  }\n}\n\nfragment JiraGenericDirectoryResults_content on JiraGenericDirectoryResult {\n  headers {\n    edges {\n      node {\n        __typename\n        title\n        isSortable\n        sortDirection\n        sortKey\n      }\n    }\n  }\n  rows {\n    edges {\n      node {\n        __typename\n        columns {\n          edges {\n            node {\n              __typename\n              renderer(supported: [\"JiraProjectFavouriteCell\", \"JiraProjectActionsCell\", \"JiraGenericField\"]) {\n                __typename\n                ... on JiraProjectFavouriteCell {\n                  ...JiraProjectFavouriteCell_content\n                  __module_operation_JiraGenericDirectoryResults_content: js(module: \"JiraProjectFavouriteCell_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraGenericDirectoryResults_content: js(module: \"JiraProjectFavouriteCell\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraProjectActionsCell {\n                  ...JiraProjectActionsCell_content\n                  __module_operation_JiraGenericDirectoryResults_content: js(module: \"JiraProjectActionsCell_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraGenericDirectoryResults_content: js(module: \"JiraProjectActionsCell\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraGenericField {\n                  ...JiraGenericField_content\n                  __module_operation_JiraGenericDirectoryResults_content: js(module: \"JiraGenericField_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraGenericDirectoryResults_content: js(module: \"JiraGenericField\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    ...JiraDirectoryResultPagination_content\n  }\n}\n\nfragment JiraGenericDirectory_directory on JiraGenericDirectory {\n  title\n  description\n  createDirectoryItem(supported: [\"JiraGenericDirectoryCreateItem\"]) {\n    __typename\n    ... on JiraGenericDirectoryCreateItem {\n      ...JiraGenericDirectoryCreateItem_directory\n      __module_operation_JiraGenericDirectory_directory_createDirectoryItem: js(module: \"JiraGenericDirectoryCreateItem_directory$normalization.graphql\", id: \"JiraGenericDirectory_directory.createDirectoryItem\")\n      __module_component_JiraGenericDirectory_directory_createDirectoryItem: js(module: \"JiraGenericDirectoryCreateItem\", id: \"JiraGenericDirectory_directory.createDirectoryItem\")\n    }\n  }\n  filterCriteria(supported: [\"JiraDirectorySearchTextFilterCriteria\", \"JiraGenericDirectoryProjectTypesFilterCriteria\", \"JiraGenericDirectoryProjectCategoriesFilterCriteria\"]) {\n    __typename\n    ... on JiraDirectorySearchTextFilterCriteria {\n      ...JiraDirectorySearchTextFilterCriteria_content\n      __module_operation_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql\", id: \"JiraGenericDirectory_directory.filterCriteria\")\n      __module_component_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraDirectorySearchTextFilterCriteria\", id: \"JiraGenericDirectory_directory.filterCriteria\")\n    }\n    ... on JiraGenericDirectoryProjectTypesFilterCriteria {\n      ...JiraGenericDirectoryProjectTypesFilterCriteria_content\n      __module_operation_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectTypesFilterCriteria_content$normalization.graphql\", id: \"JiraGenericDirectory_directory.filterCriteria\")\n      __module_component_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectTypesFilterCriteria\", id: \"JiraGenericDirectory_directory.filterCriteria\")\n    }\n    ... on JiraGenericDirectoryProjectCategoriesFilterCriteria {\n      ...JiraGenericDirectoryProjectCategoriesFilterCriteria_content\n      __module_operation_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql\", id: \"JiraGenericDirectory_directory.filterCriteria\")\n      __module_component_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectCategoriesFilterCriteria\", id: \"JiraGenericDirectory_directory.filterCriteria\")\n    }\n  }\n  result {\n    __typename\n    ... on JiraGenericDirectoryResult {\n      ...JiraGenericDirectoryResults_content\n      __module_operation_JiraGenericDirectory_directory_result: js(module: \"JiraGenericDirectoryResults_content$normalization.graphql\", id: \"JiraGenericDirectory_directory.result\")\n      __module_component_JiraGenericDirectory_directory_result: js(module: \"JiraGenericDirectoryResult\", id: \"JiraGenericDirectory_directory.result\")\n    }\n  }\n}\n\nfragment JiraGenericField_content on JiraGenericField {\n  icon {\n    image {\n      medium\n    }\n    altText\n  }\n  label {\n    stringValue\n    linkUrl\n    textTransform\n  }\n  color\n}\n\nfragment JiraIssueDirectory_directory on JiraIssueDirectory {\n  title\n  description\n  createDirectoryItem(supported: [\"JiraGenericDirectoryCreateItem\"]) {\n    __typename\n    ... on JiraGenericDirectoryCreateItem {\n      ...JiraGenericDirectoryCreateItem_directory\n      __module_operation_JiraIssueDirectory_directory_createDirectoryItem: js(module: \"JiraGenericDirectoryCreateItem_directory$normalization.graphql\", id: \"JiraIssueDirectory_directory.createDirectoryItem\")\n      __module_component_JiraIssueDirectory_directory_createDirectoryItem: js(module: \"JiraGenericDirectoryCreateItem\", id: \"JiraIssueDirectory_directory.createDirectoryItem\")\n    }\n  }\n  filterCriteria(supported: [\"JiraDirectorySearchTextFilterCriteria\", \"JiraGenericDirectoryProjectTypesFilterCriteria\", \"JiraGenericDirectoryProjectCategoriesFilterCriteria\"]) {\n    __typename\n    ... on JiraDirectorySearchTextFilterCriteria {\n      ...JiraDirectorySearchTextFilterCriteria_content\n      __module_operation_JiraIssueDirectory_directory_filterCriteria: js(module: \"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql\", id: \"JiraIssueDirectory_directory.filterCriteria\")\n      __module_component_JiraIssueDirectory_directory_filterCriteria: js(module: \"JiraDirectorySearchTextFilterCriteria\", id: \"JiraIssueDirectory_directory.filterCriteria\")\n    }\n    ... on JiraGenericDirectoryProjectTypesFilterCriteria {\n      ...JiraGenericDirectoryProjectTypesFilterCriteria_content\n      __module_operation_JiraIssueDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectTypesFilterCriteria_content$normalization.graphql\", id: \"JiraIssueDirectory_directory.filterCriteria\")\n      __module_component_JiraIssueDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectTypesFilterCriteria\", id: \"JiraIssueDirectory_directory.filterCriteria\")\n    }\n    ... on JiraGenericDirectoryProjectCategoriesFilterCriteria {\n      ...JiraGenericDirectoryProjectCategoriesFilterCriteria_content\n      __module_operation_JiraIssueDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql\", id: \"JiraIssueDirectory_directory.filterCriteria\")\n      __module_component_JiraIssueDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectCategoriesFilterCriteria\", id: \"JiraIssueDirectory_directory.filterCriteria\")\n    }\n  }\n  result {\n    __typename\n    ... on JiraGenericDirectoryResult {\n      ...JiraGenericDirectoryResults_content\n      __module_operation_JiraIssueDirectory_directory_result: js(module: \"JiraGenericDirectoryResults_content$normalization.graphql\", id: \"JiraIssueDirectory_directory.result\")\n      __module_component_JiraIssueDirectory_directory_result: js(module: \"JiraGenericDirectoryResult\", id: \"JiraIssueDirectory_directory.result\")\n    }\n  }\n}\n\nfragment JiraProjectActionsCell_content on JiraProjectActionsCell {\n  project {\n    isPrivate\n    id\n  }\n}\n\nfragment JiraProjectFavouriteCell_content on JiraProjectFavouriteCell {\n  project {\n    favourite\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d59eefb6e09c2af05136a00d54207134";

export default node;
