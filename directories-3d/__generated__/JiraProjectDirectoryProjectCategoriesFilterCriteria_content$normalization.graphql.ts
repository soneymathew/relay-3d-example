/**
 * @generated SignedSource<<8033762b600bc5b08c90cf4c2035cc17>>
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
  "name": "JiraProjectDirectoryProjectCategoriesFilterCriteria_content$normalization",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraProjectCategory",
      "kind": "LinkedField",
      "name": "selectedItems",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
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

(node as any).hash = "fd858e2d579aa7f7187a7052474fee6f";

export default node;
