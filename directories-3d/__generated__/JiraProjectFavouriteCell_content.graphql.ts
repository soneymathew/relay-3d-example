/**
 * @generated SignedSource<<f0076a659db500c4460dd5accef8ab53>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectFavouriteCell_content$data = {
  readonly project: {
    readonly favourite: boolean | null;
  } | null;
  readonly " $fragmentType": "JiraProjectFavouriteCell_content";
};
export type JiraProjectFavouriteCell_content$key = {
  readonly " $data"?: JiraProjectFavouriteCell_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectFavouriteCell_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectFavouriteCell_content",
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
          "name": "favourite",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectFavouriteCell",
  "abstractKey": null
};

(node as any).hash = "c6c9ea0c0e51999a7a93498f0219e91f";

export default node;
