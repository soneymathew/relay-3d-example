/**
 * @generated SignedSource<<6847ddbda455f780dff258ffffb32835>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type JiraProjectType = "BUSINESS" | "PRODUCT_DISCOVERY" | "SERVICE_DESK" | "SOFTWARE" | "UNKNOWN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JiraProjectDirectoryProjectTypesFilterCriteria_content$data = {
  readonly selectedItems: ReadonlyArray<{
    readonly displayName: string;
    readonly id: string;
    readonly type: JiraProjectType;
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
  "type": "JiraProjectDirectoryProjectTypesFilterCriteria",
  "abstractKey": null
};

(node as any).hash = "de6864a677ec1d75d55464ada3aacab6";

export default node;
