/**
 * @generated SignedSource<<39656d7ddf45dbd1599847761e81b334>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type JiraIconStyle = "CIRCLE" | "SQUARE" | "%future added value";
export type JiraLabelDecoration = "NORMAL" | "STRIKE_THRU" | "%future added value";
export type JiraTextTransform = "UPPER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JiraGenericField_content$data = {
  readonly color: string | null;
  readonly icon: {
    readonly altText: string | null;
    readonly image: {
      readonly medium: string | null;
    } | null;
    readonly style: JiraIconStyle | null;
  } | null;
  readonly label: {
    readonly altText: string | null;
    readonly decoration: JiraLabelDecoration | null;
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

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "altText",
  "storageKey": null
};
return {
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "style",
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
          "name": "decoration",
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
        },
        (v0/*: any*/)
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
})();

(node as any).hash = "f03960a24f15a97ca46124ae8361b8d3";

export default node;
