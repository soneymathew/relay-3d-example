/**
 * @generated SignedSource<<b38951143f9c1478699a86e216cf2cd2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectCategoryCell_content$data = {
  readonly project: {
    readonly category: {
      readonly name: string;
    } | null;
  } | null;
  readonly " $fragmentType": "JiraProjectCategoryCell_content";
};
export type JiraProjectCategoryCell_content$key = {
  readonly " $data"?: JiraProjectCategoryCell_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectCategoryCell_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectCategoryCell_content",
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
          "concreteType": "JiraProjectCategory",
          "kind": "LinkedField",
          "name": "category",
          "plural": false,
          "selections": [
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
      "storageKey": null
    }
  ],
  "type": "JiraProjectCategoryCell",
  "abstractKey": null
};

(node as any).hash = "8abc34e0efbb49543ab9160167e884fe";

export default node;
