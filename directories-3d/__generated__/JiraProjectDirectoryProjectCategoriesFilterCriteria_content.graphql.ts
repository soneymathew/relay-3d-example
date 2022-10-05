/**
 * @generated SignedSource<<bb7f629a40ca2cc3d1fc0c72d8f0ff6e>>
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

(node as any).hash = "fd858e2d579aa7f7187a7052474fee6f";

export default node;
