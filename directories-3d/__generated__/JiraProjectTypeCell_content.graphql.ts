/**
 * @generated SignedSource<<a0bfed488e9c8085f7f67d61cd904bfb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectTypeCell_content$data = {
  readonly project: {
    readonly projectType: {
      readonly companyManagedDisplayName: string;
      readonly teamManagedDisplayName: string;
    } | null;
    readonly simplified: boolean | null;
  } | null;
  readonly " $fragmentType": "JiraProjectTypeCell_content";
};
export type JiraProjectTypeCell_content$key = {
  readonly " $data"?: JiraProjectTypeCell_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectTypeCell_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectTypeCell_content",
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
          "name": "simplified",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "JiraProjectTypeDetails",
          "kind": "LinkedField",
          "name": "projectType",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "teamManagedDisplayName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "companyManagedDisplayName",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectTypeCell",
  "abstractKey": null
};

(node as any).hash = "a0f34771113b4cf216b66d076e632096";

export default node;
