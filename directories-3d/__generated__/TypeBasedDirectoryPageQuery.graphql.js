/**
 * @generated SignedSource<<0862f562a10d6229b9dfb3486baf1509>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @dataDrivenDependency TypeBasedDirectoryPageQuery.jira.directory {"branches":{"JiraProjectDirectory":{"component":"JiraProjectDirectory","fragment":"JiraProjectDirectory_directory$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraProjectDirectory_directory.createDirectoryItem {"branches":{"JiraProjectDirectoryCreateItem":{"component":"JiraProjectDirectoryCreateItem","fragment":"JiraProjectDirectoryCreateItem_directory$normalization.graphql"}},"plural":false}
// @indirectDataDrivenDependency JiraProjectDirectory_directory.filterCriteria {"branches":{"JiraDirectorySearchTextFilterCriteria":{"component":"JiraDirectorySearchTextFilterCriteria","fragment":"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql"},"JiraProjectDirectoryProjectCategoriesFilterCriteria":{"component":"JiraProjectDirectoryProjectCategoriesFilterCriteria","fragment":"JiraProjectDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql"},"JiraProjectDirectoryProjectTypesFilterCriteria":{"component":"JiraProjectDirectoryProjectTypesFilterCriteria","fragment":"JiraProjectDirectoryProjectTypesFilterCriteria_content$normalization.graphql"}},"plural":true}
// @indirectDataDrivenDependency JiraProjectDirectory_directory.result {"branches":{"JiraProjectDirectoryResult":{"component":"JiraProjectDirectoryResult","fragment":"JiraProjectDirectoryResults_content$normalization.graphql"}},"plural":false}

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "cloudId",
    "value": "todo"
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
v2 = {
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
    "argumentDefinitions": (v0/*: any*/),
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
    "cacheID": "96086c89bc62ba8d8e559f834ed8c272",
    "id": null,
    "metadata": {},
    "name": "TypeBasedDirectoryPageQuery",
    "operationKind": "query",
    "text": "query TypeBasedDirectoryPageQuery(\n  $id: ID!\n) {\n  jira {\n    directory(cloudId: \"todo\", id: $id, supported: [\"JiraProjectDirectory\"]) {\n      __typename\n      ... on JiraProjectDirectory {\n        ...JiraProjectDirectory_directory\n        __module_operation_TypeBasedDirectoryPageQuery: js(module: \"JiraProjectDirectory_directory$normalization.graphql\", id: \"TypeBasedDirectoryPageQuery.jira.directory\")\n        __module_component_TypeBasedDirectoryPageQuery: js(module: \"JiraProjectDirectory\", id: \"TypeBasedDirectoryPageQuery.jira.directory\")\n      }\n    }\n  }\n}\n\nfragment JiraDirectorySearchTextFilterCriteria_content on JiraDirectorySearchTextFilterCriteria {\n  type\n}\n\nfragment JiraProjectActionsCell_content on JiraProjectActionsCell {\n  project {\n    isPrivate\n  }\n}\n\nfragment JiraProjectCategoryCell_content on JiraProjectCategoryCell {\n  project {\n    todo\n  }\n}\n\nfragment JiraProjectDirectoryCreateItem_directory on JiraProjectDirectoryCreateItem {\n  canCreate\n}\n\nfragment JiraProjectDirectoryProjectCategoriesFilterCriteria_content on JiraProjectDirectoryProjectCategoriesFilterCriteria {\n  selectedItems {\n    name\n  }\n}\n\nfragment JiraProjectDirectoryProjectTypesFilterCriteria_content on JiraProjectDirectoryProjectTypesFilterCriteria {\n  selectedItems {\n    formattedKey\n    id\n  }\n}\n\nfragment JiraProjectDirectoryResults_content on JiraProjectDirectoryResult {\n  headers {\n    __typename\n    title\n    isSortable\n    sortDirection\n  }\n  rows {\n    __typename\n    columns {\n      __typename\n      renderer(supported: [\"JiraProjectFavouriteCell\", \"JiraProjectNameCell\", \"JiraProjectKeyCell\", \"JiraProjectTypeCell\", \"JiraProjectLeadCell\", \"JiraProjectLastIssueUpdateCell\", \"JiraProjectCategoryCell\", \"JiraProjectLinkCell\", \"JiraProjectActionsCell\"]) {\n        __typename\n        ... on JiraProjectFavouriteCell {\n          ...JiraProjectFavouriteCell_content\n          __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectFavouriteCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n          __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectFavouriteCell\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n        }\n        ... on JiraProjectNameCell {\n          ...JiraProjectNameCell_content\n          __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectNameCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n          __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectNameCell\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n        }\n        ... on JiraProjectKeyCell {\n          ...JiraProjectKeyCell_content\n          __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectKeyCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n          __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectKeyCell\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n        }\n        ... on JiraProjectTypeCell {\n          ...JiraProjectTypeCell_content\n          __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectTypeCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n          __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectTypeCell\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n        }\n        ... on JiraProjectLeadCell {\n          ...JiraProjectLeadCell_content\n          __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLeadCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n          __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLeadCell\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n        }\n        ... on JiraProjectLastIssueUpdateCell {\n          ...JiraProjectLastIssueUpdateCell_content\n          __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLastIssueUpdateCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n          __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLastIssueUpdateCell\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n        }\n        ... on JiraProjectCategoryCell {\n          ...JiraProjectCategoryCell_content\n          __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectCategoryCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n          __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectCategoryCell\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n        }\n        ... on JiraProjectLinkCell {\n          ...JiraProjectLinkCell_content\n          __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLinkCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n          __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectLinkCell\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n        }\n        ... on JiraProjectActionsCell {\n          ...JiraProjectActionsCell_content\n          __module_operation_JiraProjectDirectoryResults_content: js(module: \"JiraProjectActionsCell_content$normalization.graphql\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n          __module_component_JiraProjectDirectoryResults_content: js(module: \"JiraProjectActionsCell\", id: \"JiraProjectDirectoryResults_content.rows.columns.renderer\")\n        }\n      }\n    }\n  }\n}\n\nfragment JiraProjectDirectory_directory on JiraProjectDirectory {\n  title\n  createDirectoryItem(supported: [\"JiraProjectDirectoryCreateItem\"]) {\n    __typename\n    ... on JiraProjectDirectoryCreateItem {\n      ...JiraProjectDirectoryCreateItem_directory\n      __module_operation_JiraProjectDirectory_directory_createDirectoryItem: js(module: \"JiraProjectDirectoryCreateItem_directory$normalization.graphql\", id: \"JiraProjectDirectory_directory.createDirectoryItem\")\n      __module_component_JiraProjectDirectory_directory_createDirectoryItem: js(module: \"JiraProjectDirectoryCreateItem\", id: \"JiraProjectDirectory_directory.createDirectoryItem\")\n    }\n  }\n  filterCriteria(supported: [\"JiraDirectorySearchTextFilterCriteria\", \"JiraProjectDirectoryProjectTypesFilterCriteria\", \"JiraProjectDirectoryProjectCategoriesFilterCriteria\"]) {\n    __typename\n    ... on JiraDirectorySearchTextFilterCriteria {\n      ...JiraDirectorySearchTextFilterCriteria_content\n      __module_operation_JiraProjectDirectory_directory: js(module: \"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n      __module_component_JiraProjectDirectory_directory: js(module: \"JiraDirectorySearchTextFilterCriteria\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n    }\n    ... on JiraProjectDirectoryProjectTypesFilterCriteria {\n      ...JiraProjectDirectoryProjectTypesFilterCriteria_content\n      __module_operation_JiraProjectDirectory_directory: js(module: \"JiraProjectDirectoryProjectTypesFilterCriteria_content$normalization.graphql\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n      __module_component_JiraProjectDirectory_directory: js(module: \"JiraProjectDirectoryProjectTypesFilterCriteria\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n    }\n    ... on JiraProjectDirectoryProjectCategoriesFilterCriteria {\n      ...JiraProjectDirectoryProjectCategoriesFilterCriteria_content\n      __module_operation_JiraProjectDirectory_directory: js(module: \"JiraProjectDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n      __module_component_JiraProjectDirectory_directory: js(module: \"JiraProjectDirectoryProjectCategoriesFilterCriteria\", id: \"JiraProjectDirectory_directory.filterCriteria\")\n    }\n  }\n  result {\n    __typename\n    ... on JiraProjectDirectoryResult {\n      ...JiraProjectDirectoryResults_content\n      __module_operation_JiraProjectDirectory_directory_result: js(module: \"JiraProjectDirectoryResults_content$normalization.graphql\", id: \"JiraProjectDirectory_directory.result\")\n      __module_component_JiraProjectDirectory_directory_result: js(module: \"JiraProjectDirectoryResult\", id: \"JiraProjectDirectory_directory.result\")\n    }\n  }\n}\n\nfragment JiraProjectFavouriteCell_content on JiraProjectFavouriteCell {\n  project {\n    favourite\n  }\n}\n\nfragment JiraProjectKeyCell_content on JiraProjectKeyCell {\n  project {\n    key\n  }\n}\n\nfragment JiraProjectLastIssueUpdateCell_content on JiraProjectLastIssueUpdateCell {\n  project {\n    todo\n  }\n}\n\nfragment JiraProjectLeadCell_content on JiraProjectLeadCell {\n  project {\n    lead {\n      displayName\n    }\n  }\n}\n\nfragment JiraProjectLinkCell_content on JiraProjectLinkCell {\n  project {\n    todo\n  }\n}\n\nfragment JiraProjectNameCell_content on JiraProjectNameCell {\n  project {\n    name\n    key\n  }\n}\n\nfragment JiraProjectTypeCell_content on JiraProjectTypeCell {\n  project {\n    projectTypeKey\n  }\n}\n"
  }
};
})();

node.hash = "eeeb0fd40e54d4a95326b2b4137f3eaf";

module.exports = node;
