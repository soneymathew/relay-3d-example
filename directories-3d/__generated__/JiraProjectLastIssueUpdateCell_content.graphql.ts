/**
 * @generated SignedSource<<0ef0174bdebc9e792b5c1b4876097a71>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectLastIssueUpdateCell_content$data = {
  readonly project: {
    readonly lastIssueUpdateDate: string | null;
  } | null;
  readonly " $fragmentType": "JiraProjectLastIssueUpdateCell_content";
};
export type JiraProjectLastIssueUpdateCell_content$key = {
  readonly " $data"?: JiraProjectLastIssueUpdateCell_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectLastIssueUpdateCell_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectLastIssueUpdateCell_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraProject",
      "kind": "LinkedField",
      "name": "project",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lastIssueUpdateDate",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectLastIssueUpdateCell",
  "abstractKey": null
};

(node as any).hash = "d699f6736cfc4f68e8b42101c1462dbd";

export default node;
