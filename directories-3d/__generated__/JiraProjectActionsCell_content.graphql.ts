/**
 * @generated SignedSource<<f27370c799c4dc5ba528345ad2f40f2e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectActionsCell_content$data = {
  readonly project: {
    readonly isPrivate: boolean | null;
  } | null;
  readonly " $fragmentType": "JiraProjectActionsCell_content";
};
export type JiraProjectActionsCell_content$key = {
  readonly " $data"?: JiraProjectActionsCell_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectActionsCell_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectActionsCell_content",
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
          "name": "isPrivate",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectActionsCell",
  "abstractKey": null
};

(node as any).hash = "a0e37c18036d030c99d897356d7dff5e";

export default node;
