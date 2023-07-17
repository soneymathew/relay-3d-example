/**
 * @generated SignedSource<<8942ffcee07d03e1ada46815e6da79f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraGenericActionsField_content$data = {
  readonly actions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly renderer: {
          readonly canPerform: boolean | null;
          readonly id: string;
          readonly name: string | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "JiraGenericActionsField_content";
};
export type JiraGenericActionsField_content$key = {
  readonly " $data"?: JiraGenericActionsField_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericActionsField_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericActionsField_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraActionRendererConnection",
      "kind": "LinkedField",
      "name": "actions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "JiraActionRendererEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "JiraActionRenderer",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "renderer",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "id",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "name",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "canPerform",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraGenericActionsField",
  "abstractKey": null
};

(node as any).hash = "7c765863b1cbf586a76b3466e31f5f7f";

export default node;
