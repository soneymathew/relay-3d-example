/**
 * @generated SignedSource<<c467a1aa415dca5fb8d0cfff5752ccd0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectDirectoryCreateItem_directory$data = {
  readonly canCreate: boolean;
  readonly " $fragmentType": "JiraProjectDirectoryCreateItem_directory";
};
export type JiraProjectDirectoryCreateItem_directory$key = {
  readonly " $data"?: JiraProjectDirectoryCreateItem_directory$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectDirectoryCreateItem_directory">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectDirectoryCreateItem_directory",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "canCreate",
      "storageKey": null
    }
  ],
  "type": "JiraProjectDirectoryCreateItem",
  "abstractKey": null
};

(node as any).hash = "da883472dcbf08f8942f6e5f8268ba4c";

export default node;
