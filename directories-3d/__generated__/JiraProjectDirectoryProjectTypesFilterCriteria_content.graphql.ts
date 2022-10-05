/**
 * @generated SignedSource<<fe1f90ff2cdfe10e64e87a2c46f46128>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectDirectoryProjectTypesFilterCriteria_content$data = {
  readonly selectedItems: ReadonlyArray<{
    readonly displayName: string;
    readonly id: string;
  } | null> | null;
  readonly " $fragmentType": "JiraProjectDirectoryProjectTypesFilterCriteria_content";
};
export type JiraProjectDirectoryProjectTypesFilterCriteria_content$key = {
  readonly " $data"?: JiraProjectDirectoryProjectTypesFilterCriteria_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectDirectoryProjectTypesFilterCriteria_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectDirectoryProjectTypesFilterCriteria_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraProjectTypeDetails",
      "kind": "LinkedField",
      "name": "selectedItems",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "displayName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectDirectoryProjectTypesFilterCriteria",
  "abstractKey": null
};

(node as any).hash = "491637a0cd94053c51a45b49b6448caf";

export default node;
