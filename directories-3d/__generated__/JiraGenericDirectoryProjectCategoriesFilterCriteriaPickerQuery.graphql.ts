/**
 * @generated SignedSource<<d1d0de799faa50110521757cf3d599f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery$variables = {
  cloudId: string;
  searchText?: string | null;
};
export type JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery$data = {
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
export type JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery = {
  response: JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery$data;
  variables: JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery$variables;
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
            "kind": "Variable",
            "name": "cloudId",
            "variableName": "cloudId"
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
    "name": "JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3dc8b17bd1bd04954b59c8fe8373140a",
    "id": null,
    "metadata": {},
    "name": "JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery",
    "operationKind": "query",
    "text": "query JiraGenericDirectoryProjectCategoriesFilterCriteriaPickerQuery(\n  $cloudId: ID!\n  $searchText: String\n) {\n  jira {\n    projectCategories(cloudId: $cloudId, first: 10, searchText: $searchText) {\n      edges {\n        node {\n          id\n          categoryId\n          name\n        }\n      }\n      totalCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e28b8d85210966d817c2273dc27cf455";

export default node;
