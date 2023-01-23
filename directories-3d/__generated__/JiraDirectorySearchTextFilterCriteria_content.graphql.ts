/**
 * @generated SignedSource<<1b65471e958e990dfbf90f4cff1434eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraDirectorySearchTextFilterCriteria_content$data = {
  readonly searchText: string | null;
  readonly type: string | null;
  readonly " $fragmentType": "JiraDirectorySearchTextFilterCriteria_content";
};
export type JiraDirectorySearchTextFilterCriteria_content$key = {
  readonly " $data"?: JiraDirectorySearchTextFilterCriteria_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraDirectorySearchTextFilterCriteria_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraDirectorySearchTextFilterCriteria_content",
  "selections": [
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
      "name": "searchText",
      "storageKey": null
    }
  ],
  "type": "JiraDirectorySearchTextFilterCriteria",
  "abstractKey": null
};

(node as any).hash = "602bd15fc0045b04060219580d0f82e0";

export default node;
