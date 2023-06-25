/**
 * @generated SignedSource<<2859c31ea39f8b209c56620b320aa2fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraGenericDirectoryProjectCategoriesFilterCriteria_content$data = {
  readonly selectedItems: ReadonlyArray<{
    readonly categoryId: string;
    readonly id: string;
    readonly name: string;
  } | null> | null;
  readonly " $fragmentType": "JiraGenericDirectoryProjectCategoriesFilterCriteria_content";
};
export type JiraGenericDirectoryProjectCategoriesFilterCriteria_content$key = {
  readonly " $data"?: JiraGenericDirectoryProjectCategoriesFilterCriteria_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectoryProjectCategoriesFilterCriteria_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericDirectoryProjectCategoriesFilterCriteria_content",
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
  "type": "JiraGenericDirectoryProjectCategoriesFilterCriteria",
  "abstractKey": null
};

(node as any).hash = "254c7a14f3b6bd14aaaf1d3efa2027a0";

export default node;
