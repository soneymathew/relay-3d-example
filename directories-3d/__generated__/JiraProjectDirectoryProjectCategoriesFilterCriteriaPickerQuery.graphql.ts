/**
 * @generated SignedSource<<0ba357e7e50148d18ab4066f60cf9d9c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery$variables = {
  searchText?: string | null;
};
export type JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery$data = {
  readonly jira: {
    readonly projectCategories: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly categoryId: string;
          readonly id: string;
          readonly name: string;
        } | null;
      } | null> | null;
      readonly totalCount: number | null;
    } | null;
  } | null;
};
export type JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery = {
  response: JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery$data;
  variables: JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "searchText"
  }
],
v1 = [
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
        "args": [
          {
            "kind": "Literal",
            "name": "cloudId",
            "value": ""
          },
          {
            "kind": "Literal",
            "name": "first",
            "value": 10
          },
          {
            "kind": "Variable",
            "name": "searchText",
            "variableName": "searchText"
          }
        ],
        "concreteType": "JiraProjectCategoryConnection",
        "kind": "LinkedField",
        "name": "projectCategories",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "JiraProjectCategoryEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JiraProjectCategory",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "categoryId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ce862d1326c4d5c3cdcfca93c6aa51c7",
    "id": null,
    "metadata": {},
    "name": "JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery",
    "operationKind": "query",
    "text": "query JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery(\n  $searchText: String\n) {\n  jira {\n    projectCategories(cloudId: \"\", first: 10, searchText: $searchText) {\n      edges {\n        node {\n          id\n          categoryId\n          name\n        }\n      }\n      totalCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c6cd7757d82e43b35e3bf001ed535428";

export default node;
