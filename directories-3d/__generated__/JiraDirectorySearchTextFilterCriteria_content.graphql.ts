/**
 * @generated SignedSource<<d24aeda1eaeb40cbaf0d2e5cb2bf36cf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraDirectorySearchTextFilterCriteria_content$data = {
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
    }
  ],
  "type": "JiraDirectorySearchTextFilterCriteria",
  "abstractKey": null
};

(node as any).hash = "2e8affedd8f3b02c65c7d579843585b4";

export default node;
