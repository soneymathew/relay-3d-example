/**
 * @generated SignedSource<<7102a59f14c6939ddc99f19afec36904>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type JiraProjectType = "BUSINESS" | "PRODUCT_DISCOVERY" | "SERVICE_DESK" | "SOFTWARE" | "UNKNOWN" | "%future added value";
export type JiraProjectDirectoryProjectTypesFilterCriteriaPickerQuery$variables = {
  cloudId: string;
  searchText?: string | null;
};
export type JiraProjectDirectoryProjectTypesFilterCriteriaPickerQuery$data = {
  readonly jira: {
    readonly projectTypes: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly displayName: string;
          readonly id: string;
          readonly type: JiraProjectType;
        } | null;
      } | null> | null;
      readonly totalCount: number | null;
    } | null;
  } | null;
};
export type JiraProjectDirectoryProjectTypesFilterCriteriaPickerQuery = {
  response: JiraProjectDirectoryProjectTypesFilterCriteriaPickerQuery$data;
  variables: JiraProjectDirectoryProjectTypesFilterCriteriaPickerQuery$variables;
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
            "kind": "Variable",
            "name": "searchText",
            "variableName": "searchText"
          }
        ],
        "concreteType": "JiraProjectTypeDetailsConnection",
        "kind": "LinkedField",
        "name": "projectTypes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "JiraProjectTypeDetailsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JiraProjectTypeDetails",
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
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "displayName",
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
    "name": "JiraProjectDirectoryProjectTypesFilterCriteriaPickerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JiraProjectDirectoryProjectTypesFilterCriteriaPickerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9c2547087f9f0d262343f1f5f5753413",
    "id": null,
    "metadata": {},
    "name": "JiraProjectDirectoryProjectTypesFilterCriteriaPickerQuery",
    "operationKind": "query",
    "text": "query JiraProjectDirectoryProjectTypesFilterCriteriaPickerQuery(\n  $cloudId: ID!\n  $searchText: String\n) {\n  jira {\n    projectTypes(cloudId: $cloudId, searchText: $searchText) {\n      edges {\n        node {\n          id\n          type\n          displayName\n        }\n      }\n      totalCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fefd8d91f1646c846c659215e6fa7b97";

export default node;
