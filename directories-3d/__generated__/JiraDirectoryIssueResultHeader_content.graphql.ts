/**
 * @generated SignedSource<<8eb5490e260e41ef37d1782bb43f9078>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraDirectoryIssueResultHeader_content$data = {
  readonly isSortable: boolean | null;
  readonly sortKey: string | null;
  readonly title: string | null;
  readonly " $fragmentType": "JiraDirectoryIssueResultHeader_content";
};
export type JiraDirectoryIssueResultHeader_content$key = {
  readonly " $data"?: JiraDirectoryIssueResultHeader_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraDirectoryIssueResultHeader_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraDirectoryIssueResultHeader_content",
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
      "name": "sortKey",
      "storageKey": null
    }
  ],
  "type": "JiraDirectoryIssueResultHeader",
  "abstractKey": null
};

(node as any).hash = "65d6b4899e1a1d47589c7c22a2e07e29";

export default node;
