/**
 * @generated SignedSource<<dc8b72ee3092329535bf82f2fb01af99>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectNameCell_content$data = {
  readonly project: {
    readonly key: string | null;
    readonly name: string | null;
  } | null;
  readonly " $fragmentType": "JiraProjectNameCell_content";
};
export type JiraProjectNameCell_content$key = {
  readonly " $data"?: JiraProjectNameCell_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectNameCell_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectNameCell_content",
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
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "key",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectNameCell",
  "abstractKey": null
};

(node as any).hash = "790cd5ee07d9c682fc7b60b01b00c0e5";

export default node;
