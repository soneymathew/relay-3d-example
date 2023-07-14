/**
 * @generated SignedSource<<6edb52e9ddedae19f8b144a614fa0ecc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SortDirection = "ASC" | "DESC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JiraDirectoryDefaultResultHeader_content$data = {
  readonly isSortable: boolean | null;
  readonly sortDirection: SortDirection | null;
  readonly sortKey: string | null;
  readonly title: string | null;
  readonly " $fragmentType": "JiraDirectoryDefaultResultHeader_content";
};
export type JiraDirectoryDefaultResultHeader_content$key = {
  readonly " $data"?: JiraDirectoryDefaultResultHeader_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraDirectoryDefaultResultHeader_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraDirectoryDefaultResultHeader_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isSortable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sortDirection",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sortKey",
      "storageKey": null
    }
  ],
  "type": "JiraDirectoryDefaultResultHeader",
  "abstractKey": null
};

(node as any).hash = "bbe3108746eec634d3654cc5c7172729";

export default node;
