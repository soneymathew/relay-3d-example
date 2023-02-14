/**
 * @generated SignedSource<<611c2a4ba70066931fb87e790139a0a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency TypeBasedDirectoryPageQuery.jira.directory {"branches":{"JiraProjectDirectory":{"component":"JiraProjectDirectory","fragment":"JiraProjectDirectory_directory$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraProjectDirectory_directory.createDirectoryItem {"branches":{"JiraProjectDirectoryCreateItem":{"component":"JiraProjectDirectoryCreateItem","fragment":"JiraProjectDirectoryCreateItem_directory$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraProjectDirectory_directory.filterCriteria {"branches":{"JiraDirectorySearchTextFilterCriteria":{"component":"JiraDirectorySearchTextFilterCriteria","fragment":"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql"},"JiraProjectDirectoryProjectCategoriesFilterCriteria":{"component":"JiraProjectDirectoryProjectCategoriesFilterCriteria","fragment":"JiraProjectDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql"},"JiraProjectDirectoryProjectTypesFilterCriteria":{"component":"JiraProjectDirectoryProjectTypesFilterCriteria","fragment":"JiraProjectDirectoryProjectTypesFilterCriteria_content$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraProjectDirectory_directory.result {"branches":{"JiraProjectDirectoryResult":{"component":"JiraProjectDirectoryResult","fragment":"JiraProjectDirectoryResults_content$normalization.graphql"}},"plural":false}

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
      readonly " $fragmentSpreads": FragmentRefs<"JiraProjectDirectory_directory">;
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
                "value": "JiraProjectDirectoryProjectTypesFilterCriteria"
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
                "value": "JiraProjectDirectoryProjectCategoriesFilterCriteria"
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
    "value": [
      "JiraProjectDirectory"
    ]
  }
],
v9 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "args": null,
      "documentName": "TypeBasedDirectoryPageQuery",
      "fragmentName": "JiraProjectDirectory_directory",
      "fragmentPropName": "directory",
      "kind": "ModuleImport"
    }
  ],
  "type": "JiraProjectDirectory",
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
              (v9/*: any*/)
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
              (v9/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a373813e0b29c1ffe59e492cd5f623d1",
    "id": null,
    "metadata": {},
    "name": "TypeBasedDirectoryPageQuery",
    "operationKind": "query",
    "text": "query TypeBasedDirectoryPageQuery(\n  $cloudId: ID!\n  $id: ID!\n  $searchText: String\n  $selectedTypes: [String!]\n  $selectedCategory: String\n  $page: Int\n  $sortField: String\n  $sortDirection: SortDirection\n) {\n  jira {\n    directory(cloudId: $cloudId, id: $id, filter: {criteria: [{id: \"JiraDirectorySearchTextFilterCriteria\", type: KEYWORD, value: $searchText}, {id: \"JiraProjectDirectoryProjectTypesFilterCriteria\", type: MULTISELECT, values: $selectedTypes}, {id: \"JiraProjectDirectoryProjectCategoriesFilterCriteria\", type: SELECT, value: $selectedCategory}], page: $page, sortField: $sortField, sortDirection: $sortDirection}, supported: [\"JiraProjectDirectory\"]) {\n      __typename\n      ... on JiraProjectDirectory {\n        ...JiraProjectDirectory_directory\n        __module_operation_TypeBasedDirectoryPageQuery: js(module: \"JiraProjectDirectory_directory$normalization.graphql\", id: \"TypeBasedDirectoryPageQuery.jira.directory\")\n        __module_component_TypeBasedDirectoryPageQuery: js(module: \"JiraProjectDirectory\", id: \"TypeBasedDirectoryPageQuery.jira.directory\")\n      }\n    }\n  }\n}\n\nfragment JiraDirectoryResultPagination_content on HasTotalCount {\n  __isHasTotalCount: __typename\n  totalCount\n}\n\nfragment JiraDirectorySearchTextFilterCriteria_content on JiraDirectorySearchTextFilterCriteria {\n  type\n  searchText\n}\n\nfragment JiraProjectActionsCell_content on JiraProjectActionsCell {\n  project {\n    isPrivate\n    id\n  }\n}\n\nfragment JiraProjectCategoryCell_content on JiraProjectCategoryCell {\n  project {\n    category {\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment JiraProjectDirectoryCreateItem_directory on JiraProjectDirectoryCreateItem {\n  canCreate\n}\n\nfragment JiraProjectDirectoryProjectCategoriesFilterCriteria_content on JiraProjectDirectoryProjectCategoriesFilterCriteria {\n  selectedItems {\n    id\n    categoryId\n    name\n  }\n}\n\nfragment JiraProjectDirectoryProjectTypesFilterCriteria_content on JiraProjectDirectoryProjectTypesFilterCriteria {\n  selectedItems {\n    id\n    type\n    displayName\n  }\n}\n\nfragment JiraProjectDirectoryResults_content on JiraProjectDirectoryResult {\n  headers {\n    edges {\n      node {\n        __typename\n        title\n        isSortable\n        sortDirection\n        sortKey\n      }\n    }\n  }\n  rows {\n    edges {\n      node {\n        __typename\n        columns {\n          edges {\n            node {\n              __typename\n              renderer(supported: [\"JiraProjectFavouriteCell\", \"JiraProjectNameCell\", \"JiraProjectKeyCell\", \"JiraProjectTypeCell\", \"JiraProjectLeadCell\", \"JiraProjectLastIssueUpdateCell\", \"JiraProjectCategoryCell\", \"JiraProjectLinkCell\", \"JiraProjectActionsCell\"]) {\n                __typename\n                ... on JiraProjectFavouriteCell {\n                  ...JiraProjectFavouriteCell_content\n                  __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectFavouriteCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectFavouriteCell\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraProjectNameCell {\n                  ...JiraProjectNameCell_content\n                  __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectNameCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectNameCell\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraProjectKeyCell {\n                  ...JiraProjectKeyCell_content\n                  __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectKeyCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectKeyCell\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraProjectTypeCell {\n                  ...JiraProjectTypeCell_content\n                  __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectTypeCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectTypeCell\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraProjectLeadCell {\n                  ...JiraProjectLeadCell_content\n                  __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLeadCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLeadCell\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraProjectLastIssueUpdateCell {\n                  ...JiraProjectLastIssueUpdateCell_content\n                  __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLastIssueUpdateCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLastIssueUpdateCell\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraProjectCategoryCell {\n                  ...JiraProjectCategoryCell_content\n                  __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectCategoryCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectCategoryCell\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraProjectLinkCell {\n                  ...JiraProjectLinkCell_content\n                  __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLinkCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLinkCell\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraProjectActionsCell {\n                  ...JiraProjectActionsCell_content\n                  __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectActionsCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectActionsCell\", id: \"JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    ...JiraDirectoryResultPagination_content\n  }\n}\n\nfragment JiraProjectDirectory_directory on JiraProjectDirectory {\n  title\n  description\n  createDirectoryItem(supported: [\"JiraProjectDirectoryCreateItem\"]) {\n    __typename\n    ... on JiraProjectDirectoryCreateItem {\n      ...JiraProjectDirectoryCreateItem_directory\n      __module_operation_JiraProjectDirectory_directory_createDirectoryItem: js(module: \"JiraProjectDirectoryCreateItem_directory$normalization.graphql\", id: \"JiraProjectDirectory_directory.createDirectoryItem\")\n      __module_component_JiraProjectDirectory_directory_createDirectoryItem: js(module: \"JiraProjectDirectoryCreateItem\", id: \"JiraProjectDirectory_directory.createDirectoryItem\")\n    }\n  }\n  filterCriteria(supported: [\"JiraDirectorySearchTextFilterCriteria\", \"JiraProjectDirectoryProjectTypesFilterCriteria\", \"JiraProjectDirectoryProjectCategoriesFilterCriteria\"]) {\n    __typename\n    ... on JiraDirectorySearchTextFilterCriteria {\n      ...JiraDirectorySearchTextFilterCriteria_content\n      __module_operation_JiraProjectDirectory_directory_filterCriteria: js(module: \"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n      __module_component_JiraProjectDirectory_directory_filterCriteria: js(module: \"JiraDirectorySearchTextFilterCriteria\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n    }\n    ... on JiraProjectDirectoryProjectTypesFilterCriteria {\n      ...JiraProjectDirectoryProjectTypesFilterCriteria_content\n      __module_operation_JiraProjectDirectory_directory_filterCriteria: js(module: \"JiraProjectDirectoryProjectTypesFilterCriteria_content$normalization.graphql\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n      __module_component_JiraProjectDirectory_directory_filterCriteria: js(module: \"JiraProjectDirectoryProjectTypesFilterCriteria\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n    }\n    ... on JiraProjectDirectoryProjectCategoriesFilterCriteria {\n      ...JiraProjectDirectoryProjectCategoriesFilterCriteria_content\n      __module_operation_JiraProjectDirectory_directory_filterCriteria: js(module: \"JiraProjectDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n      __module_component_JiraProjectDirectory_directory_filterCriteria: js(module: \"JiraProjectDirectoryProjectCategoriesFilterCriteria\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n    }\n  }\n  result {\n    __typename\n    ... on JiraProjectDirectoryResult {\n      ...JiraProjectDirectoryResults_content\n      __module_operation_JiraProjectDirectory_directory_result: js(module: \"JiraProjectDirectoryResults_content$normalization.graphql\", id: \"JiraProjectDirectory_directory.result\")\n      __module_component_JiraProjectDirectory_directory_result: js(module: \"JiraProjectDirectoryResult\", id: \"JiraProjectDirectory_directory.result\")\n    }\n  }\n}\n\nfragment JiraProjectFavouriteCell_content on JiraProjectFavouriteCell {\n  project {\n    favourite\n    id\n  }\n}\n\nfragment JiraProjectKeyCell_content on JiraProjectKeyCell {\n  project {\n    key\n    id\n  }\n}\n\nfragment JiraProjectLastIssueUpdateCell_content on JiraProjectLastIssueUpdateCell {\n  project {\n    lastIssueUpdateDate\n    id\n  }\n}\n\nfragment JiraProjectLeadCell_content on JiraProjectLeadCell {\n  project {\n    lead {\n      displayName\n    }\n    id\n  }\n}\n\nfragment JiraProjectLinkCell_content on JiraProjectLinkCell {\n  project {\n    url\n    id\n  }\n}\n\nfragment JiraProjectNameCell_content on JiraProjectNameCell {\n  project {\n    name\n    id\n  }\n}\n\nfragment JiraProjectTypeCell_content on JiraProjectTypeCell {\n  project {\n    simplified\n    projectType {\n      teamManagedDisplayName\n      companyManagedDisplayName\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f163527ce40b10bf1dd802f21e83a119";

export default node;
