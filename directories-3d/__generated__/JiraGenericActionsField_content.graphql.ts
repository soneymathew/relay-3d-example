/**
 * @generated SignedSource<<45aaffd60844c380df5769a144fd60cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraGenericActionsField_content$data = {
  readonly actions: ReadonlyArray<{
    readonly id: string;
    readonly name: string | null;
  } | null> | null;
  readonly " $fragmentType": "JiraGenericActionsField_content";
};
export type JiraGenericActionsField_content$key = {
  readonly " $data"?: JiraGenericActionsField_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericActionsField_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericActionsField_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraAction",
      "kind": "LinkedField",
      "name": "actions",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraGenericActionsField",
  "abstractKey": null
};

(node as any).hash = "89790fd9fc74c9d3929b77f616802f8d";

export default node;
