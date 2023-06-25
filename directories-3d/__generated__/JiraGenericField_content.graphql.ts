/**
 * @generated SignedSource<<e814e45584512d266853440767428510>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type JiraTextTransform = "UPPER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JiraGenericField_content$data = {
  readonly color: string | null;
  readonly icon: {
    readonly altText: string | null;
    readonly image: {
      readonly medium: string | null;
    } | null;
  } | null;
  readonly label: {
    readonly linkUrl: any | null;
    readonly stringValue: string | null;
    readonly textTransform: JiraTextTransform | null;
  } | null;
  readonly " $fragmentType": "JiraGenericField_content";
};
export type JiraGenericField_content$key = {
  readonly " $data"?: JiraGenericField_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericField_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericField_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraIcon",
      "kind": "LinkedField",
      "name": "icon",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "JiraIconImage",
          "kind": "LinkedField",
          "name": "image",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "medium",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "altText",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraLabel",
      "kind": "LinkedField",
      "name": "label",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "stringValue",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "linkUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "textTransform",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "color",
      "storageKey": null
    }
  ],
  "type": "JiraGenericField",
  "abstractKey": null
};

(node as any).hash = "9cb2c4c9aadd494997f1515a41e33ecc";

export default node;
