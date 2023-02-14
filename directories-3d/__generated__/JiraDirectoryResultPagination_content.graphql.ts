/**
 * @generated SignedSource<<c12c99c7cdd0b978d9d0dcd82fc975e7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraDirectoryResultPagination_content$data = {
  readonly totalCount: number | null;
  readonly " $fragmentType": "JiraDirectoryResultPagination_content";
};
export type JiraDirectoryResultPagination_content$key = {
  readonly " $data"?: JiraDirectoryResultPagination_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraDirectoryResultPagination_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraDirectoryResultPagination_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "type": "HasTotalCount",
  "abstractKey": "__isHasTotalCount"
};

(node as any).hash = "6809598c9edd9111e0e57aa1f271c0eb";

export default node;
