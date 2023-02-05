/**
 * @generated SignedSource<<566f8f614c8d1565e26eb6d4732604b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery$variables = {
  cloudId: string;
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
    "cacheID": "2be0b11ef3fe5d504522926814cc2faf",
    "id": null,
    "metadata": {},
    "name": "JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery",
    "operationKind": "query",
    "text": "query JiraProjectDirectoryProjectCategoriesFilterCriteriaPickerQuery(\n  $cloudId: ID!\n  $searchText: String\n) {\n  jira {\n    projectCategories(cloudId: $cloudId, first: 10, searchText: $searchText) {\n      edges {\n        node {\n          id\n          categoryId\n          name\n        }\n      }\n      totalCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa9bcc2e3a9f487a1df60c11089da9fe";

export default node;
