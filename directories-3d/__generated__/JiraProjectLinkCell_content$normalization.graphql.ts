/**
 * @generated SignedSource<<cabeebca2dcfeefc4381cb6765744d60>>
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
  "name": "JiraProjectLinkCell_content$normalization",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraProject",
      "kind": "LinkedField",
      "name": "project",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ]
};

(node as any).hash = "47e4f4b5917c3c6dab3484001d4b1746";

export default node;
