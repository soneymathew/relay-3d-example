/**
 * @generated SignedSource<<11aaa98d1c0b4a78ae48840c1f062986>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraGenericFavouriteField_content$data = {
  readonly favoriteInfo: {
    readonly isFavorite: boolean | null;
  } | null;
  readonly " $fragmentType": "JiraGenericFavouriteField_content";
};
export type JiraGenericFavouriteField_content$key = {
  readonly " $data"?: JiraGenericFavouriteField_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericFavouriteField_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericFavouriteField_content",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraGenericFavouriteField",
  "abstractKey": null
};

(node as any).hash = "873b284f73700a40a84debdfdbf17007";

export default node;
