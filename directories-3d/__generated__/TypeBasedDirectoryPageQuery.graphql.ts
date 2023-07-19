/**
 * @generated SignedSource<<8361fc6780b7f83a1b098384130f0e36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency TypeBasedDirectoryPageQuery.jira.directory {"branches":{"JiraGenericDirectory":{"component":"JiraGenericDirectory","fragment":"JiraGenericDirectory_directory$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraGenericDirectory_directory.filterCriteria.edges.node.renderer {"branches":{"JiraDirectorySearchTextFilterCriteria":{"component":"JiraDirectorySearchTextFilterCriteria","fragment":"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectCategoriesFilterCriteria":{"component":"JiraGenericDirectoryProjectCategoriesFilterCriteria","fragment":"JiraGenericDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectTypesFilterCriteria":{"component":"JiraGenericDirectoryProjectTypesFilterCriteria","fragment":"JiraGenericDirectoryProjectTypesFilterCriteria_content$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraGenericDirectory_directory.pageActions.edges.node.renderer {"branches":{"JiraCreateEntityAction":{"component":"JiraGenericDirectoryCreateItem","fragment":"JiraGenericDirectoryCreateItem_directory$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraGenericDirectory_directory.result {"branches":{"JiraGenericDirectoryResult":{"component":"JiraGenericDirectoryResult","fragment":"JiraGenericDirectoryResults_content$normalization.graphql"}},"plural":false}

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
      readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectory_directory">;
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
    "value": "8uSBL"
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
    "cacheID": "f93cc2986cbdf1571bc29d57ab4de3bc",
    "id": null,
    "metadata": {},
    "name": "TypeBasedDirectoryPageQuery",
    "operationKind": "query",
    "text": "query TypeBasedDirectoryPageQuery(\n  $cloudId: ID!\n  $id: ID!\n  $searchText: String\n  $selectedTypes: [String!]\n  $selectedCategory: String\n  $page: Int\n  $sortField: String\n  $sortDirection: SortDirection\n) {\n  jira {\n    directory(cloudId: $cloudId, id: $id, filter: {criteria: [{id: \"JiraDirectorySearchTextFilterCriteria\", type: KEYWORD, value: $searchText}, {id: \"JiraGenericDirectoryProjectTypesFilterCriteria\", type: MULTISELECT, values: $selectedTypes}, {id: \"JiraGenericDirectoryProjectCategoriesFilterCriteria\", type: SELECT, value: $selectedCategory}], page: $page, sortField: $sortField, sortDirection: $sortDirection}, supported: [\"JiraGenericDirectory\"]) {\n      __typename\n      ... on JiraGenericDirectory {\n        ...JiraGenericDirectory_directory\n        __module_operation_TypeBasedDirectoryPageQuery: js(module: \"JiraGenericDirectory_directory$normalization.graphql\", id: \"TypeBasedDirectoryPageQuery.jira.directory\")\n        __module_component_TypeBasedDirectoryPageQuery: js(module: \"JiraGenericDirectory\", id: \"TypeBasedDirectoryPageQuery.jira.directory\")\n      }\n    }\n  }\n}\n\nfragment JiraDirectoryDefaultResultHeader_content on JiraDirectoryDefaultResultHeader {\n  title\n  isSortable\n  sortDirection\n  sortKey\n}\n\nfragment JiraDirectoryIssueResultHeader_content on JiraDirectoryIssueResultHeader {\n  title\n  isSortable\n  sortKey\n}\n\nfragment JiraDirectoryResultPagination_content on HasTotalCount {\n  __isHasTotalCount: __typename\n  totalCount\n}\n\nfragment JiraDirectorySearchTextFilterCriteria_content on JiraDirectorySearchTextFilterCriteria {\n  type\n  searchText\n}\n\nfragment JiraGenericActionsField_content on JiraGenericActionsField {\n  actions {\n    edges {\n      node {\n        renderer {\n          __typename\n          __isJiraAction: __typename\n          id\n          name\n          canPerform\n        }\n      }\n    }\n  }\n}\n\nfragment JiraGenericDirectoryCreateItem_directory on JiraCreateEntityAction {\n  canPerform\n}\n\nfragment JiraGenericDirectoryProjectCategoriesFilterCriteria_content on JiraGenericDirectoryProjectCategoriesFilterCriteria {\n  selectedItems {\n    id\n    categoryId\n    name\n  }\n}\n\nfragment JiraGenericDirectoryProjectTypesFilterCriteria_content on JiraGenericDirectoryProjectTypesFilterCriteria {\n  selectedItems {\n    id\n    type\n    displayName\n  }\n}\n\nfragment JiraGenericDirectoryResults_content on JiraGenericDirectoryResult {\n  headers {\n    edges {\n      node {\n        __typename\n        renderer(supported: [\"JiraDirectoryDefaultResultHeader\", \"JiraDirectoryIssueResultHeader\"]) {\n          __typename\n          ... on JiraDirectoryDefaultResultHeader {\n            ...JiraDirectoryDefaultResultHeader_content\n            __module_operation_JiraGenericDirectoryResults_content_headers: js(module: \"JiraDirectoryDefaultResultHeader_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.headers.edges.node.renderer\")\n            __module_component_JiraGenericDirectoryResults_content_headers: js(module: \"JiraDirectoryDefaultResultHeader\", id: \"JiraGenericDirectoryResults_content.headers.edges.node.renderer\")\n          }\n          ... on JiraDirectoryIssueResultHeader {\n            ...JiraDirectoryIssueResultHeader_content\n            __module_operation_JiraGenericDirectoryResults_content_headers: js(module: \"JiraDirectoryIssueResultHeader_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.headers.edges.node.renderer\")\n            __module_component_JiraGenericDirectoryResults_content_headers: js(module: \"JiraDirectoryIssueResultHeader\", id: \"JiraGenericDirectoryResults_content.headers.edges.node.renderer\")\n          }\n        }\n      }\n    }\n  }\n  rows {\n    edges {\n      node {\n        __typename\n        columns {\n          edges {\n            node {\n              __typename\n              renderer(supported: [\"JiraGenericFavouriteField\", \"JiraGenericActionsField\", \"JiraGenericField\", \"JiraGenericFieldCollection\"]) {\n                __typename\n                ... on JiraGenericFavouriteField {\n                  ...JiraGenericFavouriteField_content\n                  __module_operation_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericFavouriteField_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericFavouriteField\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraGenericActionsField {\n                  ...JiraGenericActionsField_content\n                  __module_operation_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericActionsField_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericActionsField\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraGenericField {\n                  ...JiraGenericField_content\n                  __module_operation_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericField_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericField\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraGenericFieldCollection {\n                  ...JiraGenericFieldCollection_content\n                  __module_operation_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericFieldCollection_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericFieldCollection\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    ...JiraDirectoryResultPagination_content\n  }\n}\n\nfragment JiraGenericDirectory_directory on JiraGenericDirectory {\n  title\n  description\n  pageActions {\n    edges {\n      node {\n        renderer(supported: [\"JiraCreateEntityAction\"]) {\n          __typename\n          ... on JiraCreateEntityAction {\n            ...JiraGenericDirectoryCreateItem_directory\n            __module_operation_JiraGenericDirectory_directory_createDirectoryItem: js(module: \"JiraGenericDirectoryCreateItem_directory$normalization.graphql\", id: \"JiraGenericDirectory_directory.pageActions.edges.node.renderer\")\n            __module_component_JiraGenericDirectory_directory_createDirectoryItem: js(module: \"JiraGenericDirectoryCreateItem\", id: \"JiraGenericDirectory_directory.pageActions.edges.node.renderer\")\n          }\n          id\n        }\n      }\n    }\n  }\n  filterCriteria {\n    edges {\n      node {\n        renderer(supported: [\"JiraDirectorySearchTextFilterCriteria\", \"JiraGenericDirectoryProjectTypesFilterCriteria\", \"JiraGenericDirectoryProjectCategoriesFilterCriteria\"]) {\n          __typename\n          ... on JiraDirectorySearchTextFilterCriteria {\n            ...JiraDirectorySearchTextFilterCriteria_content\n            __module_operation_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql\", id: \"JiraGenericDirectory_directory.filterCriteria.edges.node.renderer\")\n            __module_component_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraDirectorySearchTextFilterCriteria\", id: \"JiraGenericDirectory_directory.filterCriteria.edges.node.renderer\")\n          }\n          ... on JiraGenericDirectoryProjectTypesFilterCriteria {\n            ...JiraGenericDirectoryProjectTypesFilterCriteria_content\n            __module_operation_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectTypesFilterCriteria_content$normalization.graphql\", id: \"JiraGenericDirectory_directory.filterCriteria.edges.node.renderer\")\n            __module_component_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectTypesFilterCriteria\", id: \"JiraGenericDirectory_directory.filterCriteria.edges.node.renderer\")\n          }\n          ... on JiraGenericDirectoryProjectCategoriesFilterCriteria {\n            ...JiraGenericDirectoryProjectCategoriesFilterCriteria_content\n            __module_operation_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql\", id: \"JiraGenericDirectory_directory.filterCriteria.edges.node.renderer\")\n            __module_component_JiraGenericDirectory_directory_filterCriteria: js(module: \"JiraGenericDirectoryProjectCategoriesFilterCriteria\", id: \"JiraGenericDirectory_directory.filterCriteria.edges.node.renderer\")\n          }\n        }\n      }\n    }\n  }\n  result {\n    __typename\n    ... on JiraGenericDirectoryResult {\n      ...JiraGenericDirectoryResults_content\n      __module_operation_JiraGenericDirectory_directory_result: js(module: \"JiraGenericDirectoryResults_content$normalization.graphql\", id: \"JiraGenericDirectory_directory.result\")\n      __module_component_JiraGenericDirectory_directory_result: js(module: \"JiraGenericDirectoryResult\", id: \"JiraGenericDirectory_directory.result\")\n    }\n  }\n}\n\nfragment JiraGenericFavouriteField_content on JiraGenericFavouriteField {\n  favoriteInfo {\n    isFavorite\n    id\n  }\n}\n\nfragment JiraGenericFieldCollection_content on JiraGenericFieldCollection {\n  delimiter\n  fields(cloudId: \"\", first: 1) {\n    edges {\n      node {\n        ...JiraGenericField_content\n        __module_operation_JiraGenericFieldCollection_content: js(module: \"JiraGenericField_content$normalization.graphql\", id: \"JiraGenericFieldCollection_content.fields.edges.node\")\n        __module_component_JiraGenericFieldCollection_content: js(module: \"JiraGenericField\", id: \"JiraGenericFieldCollection_content.fields.edges.node\")\n      }\n    }\n    totalCount\n  }\n}\n\nfragment JiraGenericField_content on JiraGenericField {\n  icon {\n    image {\n      medium\n    }\n    altText\n    style\n  }\n  label {\n    stringValue\n    linkUrl\n    textTransform\n    altText\n  }\n  color\n}\n"
  }
};
})();

(node as any).hash = "a1ab000e91984f60bb4670422250d182";

export default node;
