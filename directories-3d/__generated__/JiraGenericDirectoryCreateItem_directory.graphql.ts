/**
 * @generated SignedSource<<dc94ab4bc22f63779b8763667fd3bdd7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraGenericDirectoryCreateItem_directory$data = {
  readonly canCreate: boolean;
  readonly " $fragmentType": "JiraGenericDirectoryCreateItem_directory";
};
export type JiraGenericDirectoryCreateItem_directory$key = {
  readonly " $data"?: JiraGenericDirectoryCreateItem_directory$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectoryCreateItem_directory">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericDirectoryCreateItem_directory",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "canCreate",
      "storageKey": null
    }
  ],
  "type": "JiraGenericDirectoryCreateItem",
  "abstractKey": null
};

(node as any).hash = "482a77411e8894f2ece61f2f39be5cf0";

export default node;
