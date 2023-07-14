/**
 * @generated SignedSource<<4e9754182d76fcabc0c48752f8c68527>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { NormalizationSplitOperation } from 'relay-runtime';


const node: NormalizationSplitOperation = {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "JiraGenericActionsField_content$normalization",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraAction",
      "kind": "LinkedField",
      "name": "actions",
      "plural": true,
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
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ]
};

(node as any).hash = "89790fd9fc74c9d3929b77f616802f8d";

export default node;
