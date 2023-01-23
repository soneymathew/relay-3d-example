/**
 * @generated SignedSource<<6e769041caecd7764f75d1324794b0a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectDirectoryProjectCategoriesFilterCriteria_content$data = {
  readonly selectedItems: ReadonlyArray<{
    readonly categoryId: string;
    readonly id: string;
    readonly name: string;
  } | null> | null;
  readonly " $fragmentType": "JiraProjectDirectoryProjectCategoriesFilterCriteria_content";
};
export type JiraProjectDirectoryProjectCategoriesFilterCriteria_content$key = {
  readonly " $data"?: JiraProjectDirectoryProjectCategoriesFilterCriteria_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectDirectoryProjectCategoriesFilterCriteria_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectDirectoryProjectCategoriesFilterCriteria_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraProjectCategory",
      "kind": "LinkedField",
      "name": "selectedItems",
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
          "name": "categoryId",
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
  "type": "JiraProjectDirectoryProjectCategoriesFilterCriteria",
  "abstractKey": null
};

(node as any).hash = "5a754fc4dbab9ff9b2bd2f2539bc7241";

export default node;
