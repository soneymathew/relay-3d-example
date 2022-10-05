/**
 * @generated SignedSource<<aa0d13004be9fb764560fef103180e5f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectLinkCell_content$data = {
  readonly project: {
    readonly url: string | null;
  } | null;
  readonly " $fragmentType": "JiraProjectLinkCell_content";
};
export type JiraProjectLinkCell_content$key = {
  readonly " $data"?: JiraProjectLinkCell_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectLinkCell_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectLinkCell_content",
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
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectLinkCell",
  "abstractKey": null
};

(node as any).hash = "47e4f4b5917c3c6dab3484001d4b1746";

export default node;
