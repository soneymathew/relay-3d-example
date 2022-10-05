/**
 * @generated SignedSource<<f10ee8847673dc2cb3c48d6a5880483f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectKeyCell_content$data = {
  readonly project: {
    readonly key: string | null;
  } | null;
  readonly " $fragmentType": "JiraProjectKeyCell_content";
};
export type JiraProjectKeyCell_content$key = {
  readonly " $data"?: JiraProjectKeyCell_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectKeyCell_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectKeyCell_content",
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
          "name": "key",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectKeyCell",
  "abstractKey": null
};

(node as any).hash = "45ffea7b14d3dc001015975ce3bb64d8";

export default node;
