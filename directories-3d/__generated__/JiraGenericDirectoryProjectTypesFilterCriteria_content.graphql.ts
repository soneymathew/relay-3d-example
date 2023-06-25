/**
 * @generated SignedSource<<3072482f7ee187436f60f7e72f0e3848>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type JiraProjectType = "BUSINESS" | "PRODUCT_DISCOVERY" | "SERVICE_DESK" | "SOFTWARE" | "UNKNOWN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JiraGenericDirectoryProjectTypesFilterCriteria_content$data = {
  readonly selectedItems: ReadonlyArray<{
    readonly displayName: string;
    readonly id: string;
    readonly type: JiraProjectType;
  } | null> | null;
  readonly " $fragmentType": "JiraGenericDirectoryProjectTypesFilterCriteria_content";
};
export type JiraGenericDirectoryProjectTypesFilterCriteria_content$key = {
  readonly " $data"?: JiraGenericDirectoryProjectTypesFilterCriteria_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectoryProjectTypesFilterCriteria_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericDirectoryProjectTypesFilterCriteria_content",
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
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "displayName",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraGenericDirectoryProjectTypesFilterCriteria",
  "abstractKey": null
};

(node as any).hash = "e7777657379f6191c14af39583b00c71";

export default node;
