/**
 * @generated SignedSource<<eb6d2618bb0e2a5a9edb34a3b8369f9a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectNameCell_content$data = {
  readonly project: {
    readonly name: string | null;
  } | null;
  readonly " $fragmentType": "JiraProjectNameCell_content";
};
export type JiraProjectNameCell_content$key = {
  readonly " $data"?: JiraProjectNameCell_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectNameCell_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectNameCell_content",
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
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectNameCell",
  "abstractKey": null
};

(node as any).hash = "1e7fea69ba4f605ac7545dc27604e894";

export default node;
