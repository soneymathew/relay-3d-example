/**
 * @generated SignedSource<<6dd9c445f47b23a9296d53ddcab7e0c8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency issuesPageQuery.jira.directory {"branches":{"JiraIssueDirectory":{"component":"JiraIssueDirectory","fragment":"JiraIssueDirectory_directory$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraIssueDirectory_directory.filterCriteria.edges.node.renderer {"branches":{"JiraDirectoryJqlBuilderAdvancedCriteria":{"component":"JiraDirectoryJqlBuilderAdvancedCriteria","fragment":"JiraDirectoryJqlBuilderAdvancedCriteria_content$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraIssueDirectory_directory.pageActions.edges.node.renderer {"branches":{"JiraCreateEntityAction":{"component":"JiraGenericDirectoryCreateItem","fragment":"JiraGenericDirectoryCreateItem_directory$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraIssueDirectory_directory.result {"branches":{"JiraGenericDirectoryResult":{"component":"JiraGenericDirectoryResult","fragment":"JiraGenericDirectoryResults_content$normalization.graphql"}},"plural":false}

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type issuesPageQuery$variables = {
  cloudId: string;
  id: string;
  jql?: string | null;
  page?: number | null;
};
export type issuesPageQuery$data = {
  readonly jira: {
    readonly directory: {
      readonly __fragmentPropName?: string | null;
      readonly __module_component?: string | null;
      readonly " $fragmentSpreads": FragmentRefs<"JiraIssueDirectory_directory">;
    };
  } | null;
};
export type issuesPageQuery = {
  response: issuesPageQuery$data;
  variables: issuesPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cloudId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "jql"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  }
],
v1 = [
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
                "value": "JiraDirectoryJqlBuilderAdvancedCriteria"
              },
              {
                "kind": "Literal",
                "name": "type",
                "value": "JQL_BUILDER_ADVANCED"
              },
              {
                "kind": "Variable",
                "name": "value",
                "variableName": "jql"
              }
            ],
            "kind": "ObjectValue",
            "name": "criteria.0"
          }
        ],
        "kind": "ListValue",
        "name": "criteria"
      },
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
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
    "value": "1E9YLl"
  }
],
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "args": null,
      "documentName": "issuesPageQuery",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "issuesPageQuery",
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
            "args": (v1/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "directory",
            "plural": false,
            "selections": [
              (v2/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "issuesPageQuery",
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
            "args": (v1/*: any*/),
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
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "45212d9c724f38bf524ce335f863b0a3",
    "id": null,
    "metadata": {},
    "name": "issuesPageQuery",
    "operationKind": "query",
    "text": "query issuesPageQuery(\n  $cloudId: ID!\n  $id: ID!\n  $jql: String\n  $page: Int\n) {\n  jira {\n    directory(cloudId: $cloudId, id: $id, filter: {criteria: [{id: \"JiraDirectoryJqlBuilderAdvancedCriteria\", type: JQL_BUILDER_ADVANCED, value: $jql}], page: $page}, supported: [\"JiraIssueDirectory\"]) {\n      __typename\n      ... on JiraIssueDirectory {\n        ...JiraIssueDirectory_directory\n        __module_operation_issuesPageQuery: js(module: \"JiraIssueDirectory_directory$normalization.graphql\", id: \"issuesPageQuery.jira.directory\")\n        __module_component_issuesPageQuery: js(module: \"JiraIssueDirectory\", id: \"issuesPageQuery.jira.directory\")\n      }\n    }\n  }\n}\n\nfragment JiraDirectoryDefaultResultHeader_content on JiraDirectoryDefaultResultHeader {\n  title\n  isSortable\n  sortDirection\n  sortKey\n}\n\nfragment JiraDirectoryIssueResultHeader_content on JiraDirectoryIssueResultHeader {\n  title\n  isSortable\n  sortKey\n}\n\nfragment JiraDirectoryJqlBuilderAdvancedCriteria_content on JiraDirectoryJqlBuilderAdvancedCriteria {\n  type\n  jql\n}\n\nfragment JiraDirectoryResultPagination_content on HasTotalCount {\n  __isHasTotalCount: __typename\n  totalCount\n}\n\nfragment JiraGenericActionsField_content on JiraGenericActionsField {\n  actions {\n    edges {\n      node {\n        renderer {\n          __typename\n          __isJiraAction: __typename\n          id\n          name\n          canPerform\n        }\n      }\n    }\n  }\n}\n\nfragment JiraGenericDirectoryCreateItem_directory on JiraCreateEntityAction {\n  canPerform\n}\n\nfragment JiraGenericDirectoryResults_content on JiraGenericDirectoryResult {\n  headers {\n    edges {\n      node {\n        __typename\n        renderer(supported: [\"JiraDirectoryDefaultResultHeader\", \"JiraDirectoryIssueResultHeader\"]) {\n          __typename\n          ... on JiraDirectoryDefaultResultHeader {\n            ...JiraDirectoryDefaultResultHeader_content\n            __module_operation_JiraGenericDirectoryResults_content_headers: js(module: \"JiraDirectoryDefaultResultHeader_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.headers.edges.node.renderer\")\n            __module_component_JiraGenericDirectoryResults_content_headers: js(module: \"JiraDirectoryDefaultResultHeader\", id: \"JiraGenericDirectoryResults_content.headers.edges.node.renderer\")\n          }\n          ... on JiraDirectoryIssueResultHeader {\n            ...JiraDirectoryIssueResultHeader_content\n            __module_operation_JiraGenericDirectoryResults_content_headers: js(module: \"JiraDirectoryIssueResultHeader_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.headers.edges.node.renderer\")\n            __module_component_JiraGenericDirectoryResults_content_headers: js(module: \"JiraDirectoryIssueResultHeader\", id: \"JiraGenericDirectoryResults_content.headers.edges.node.renderer\")\n          }\n        }\n      }\n    }\n  }\n  rows {\n    edges {\n      node {\n        __typename\n        columns {\n          edges {\n            node {\n              __typename\n              renderer(supported: [\"JiraGenericFavouriteField\", \"JiraGenericActionsField\", \"JiraGenericField\", \"JiraGenericFieldCollection\"]) {\n                __typename\n                ... on JiraGenericFavouriteField {\n                  ...JiraGenericFavouriteField_content\n                  __module_operation_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericFavouriteField_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericFavouriteField\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraGenericActionsField {\n                  ...JiraGenericActionsField_content\n                  __module_operation_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericActionsField_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericActionsField\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraGenericField {\n                  ...JiraGenericField_content\n                  __module_operation_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericField_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericField\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n                ... on JiraGenericFieldCollection {\n                  ...JiraGenericFieldCollection_content\n                  __module_operation_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericFieldCollection_content$normalization.graphql\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                  __module_component_JiraGenericDirectoryResults_content_columns: js(module: \"JiraGenericFieldCollection\", id: \"JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer\")\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    ...JiraDirectoryResultPagination_content\n  }\n}\n\nfragment JiraGenericFavouriteField_content on JiraGenericFavouriteField {\n  favoriteInfo {\n    isFavorite\n    id\n  }\n}\n\nfragment JiraGenericFieldCollection_content on JiraGenericFieldCollection {\n  delimiter\n  fields(cloudId: \"\", first: 1) {\n    edges {\n      node {\n        ...JiraGenericField_content\n        __module_operation_JiraGenericFieldCollection_content: js(module: \"JiraGenericField_content$normalization.graphql\", id: \"JiraGenericFieldCollection_content.fields.edges.node\")\n        __module_component_JiraGenericFieldCollection_content: js(module: \"JiraGenericField\", id: \"JiraGenericFieldCollection_content.fields.edges.node\")\n      }\n    }\n    totalCount\n  }\n}\n\nfragment JiraGenericField_content on JiraGenericField {\n  icon {\n    image {\n      medium\n    }\n    altText\n    style\n  }\n  label {\n    stringValue\n    decoration\n    linkUrl\n    textTransform\n    altText\n  }\n  color\n}\n\nfragment JiraIssueDirectory_directory on JiraIssueDirectory {\n  title\n  description\n  pageActions {\n    edges {\n      node {\n        renderer(supported: [\"JiraCreateEntityAction\"]) {\n          __typename\n          ... on JiraCreateEntityAction {\n            ...JiraGenericDirectoryCreateItem_directory\n            __module_operation_JiraIssueDirectory_directory_createDirectoryItem: js(module: \"JiraGenericDirectoryCreateItem_directory$normalization.graphql\", id: \"JiraIssueDirectory_directory.pageActions.edges.node.renderer\")\n            __module_component_JiraIssueDirectory_directory_createDirectoryItem: js(module: \"JiraGenericDirectoryCreateItem\", id: \"JiraIssueDirectory_directory.pageActions.edges.node.renderer\")\n          }\n          id\n        }\n      }\n    }\n  }\n  filterCriteria {\n    edges {\n      node {\n        renderer(supported: [\"JiraDirectoryJqlBuilderAdvancedCriteria\"]) {\n          __typename\n          ... on JiraDirectoryJqlBuilderAdvancedCriteria {\n            ...JiraDirectoryJqlBuilderAdvancedCriteria_content\n            __module_operation_JiraIssueDirectory_directory_filterCriteria: js(module: \"JiraDirectoryJqlBuilderAdvancedCriteria_content$normalization.graphql\", id: \"JiraIssueDirectory_directory.filterCriteria.edges.node.renderer\")\n            __module_component_JiraIssueDirectory_directory_filterCriteria: js(module: \"JiraDirectoryJqlBuilderAdvancedCriteria\", id: \"JiraIssueDirectory_directory.filterCriteria.edges.node.renderer\")\n          }\n        }\n      }\n    }\n  }\n  result {\n    __typename\n    ... on JiraGenericDirectoryResult {\n      ...JiraGenericDirectoryResults_content\n      __module_operation_JiraIssueDirectory_directory_result: js(module: \"JiraGenericDirectoryResults_content$normalization.graphql\", id: \"JiraIssueDirectory_directory.result\")\n      __module_component_JiraIssueDirectory_directory_result: js(module: \"JiraGenericDirectoryResult\", id: \"JiraIssueDirectory_directory.result\")\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a4943613d9d822ff4f97ce2873316aea";

export default node;
