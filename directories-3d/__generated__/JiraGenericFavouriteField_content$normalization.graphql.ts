/**
 * @generated SignedSource<<98df46ae650f5a510e46cd0e5b19c168>>
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
  "name": "JiraGenericFavouriteField_content$normalization",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraGenericFavoriteInfo",
      "kind": "LinkedField",
      "name": "favoriteInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isFavorite",
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

(node as any).hash = "873b284f73700a40a84debdfdbf17007";

export default node;
