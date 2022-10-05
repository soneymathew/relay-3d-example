/**
 * @generated SignedSource<<c30c570bede65975fd9fdf8692759361>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectLeadCell_content$data = {
  readonly project: {
    readonly lead: {
      readonly displayName: string | null;
    } | null;
  } | null;
  readonly " $fragmentType": "JiraProjectLeadCell_content";
};
export type JiraProjectLeadCell_content$key = {
  readonly " $data"?: JiraProjectLeadCell_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectLeadCell_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectLeadCell_content",
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
          "concreteType": "ProjectLead",
          "kind": "LinkedField",
          "name": "lead",
          "plural": false,
          "selections": [
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
      "storageKey": null
    }
  ],
  "type": "JiraProjectLeadCell",
  "abstractKey": null
};

(node as any).hash = "0a76d401464871fb1bed8902ecb02bee";

export default node;
