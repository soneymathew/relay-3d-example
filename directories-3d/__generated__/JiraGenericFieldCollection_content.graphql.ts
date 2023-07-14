/**
 * @generated SignedSource<<af05a2940a1cd0d52551aa4b33b73f05>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency JiraGenericFieldCollection_content.fields.edges.node {"branches":{"JiraGenericField":{"component":"JiraGenericField","fragment":"JiraGenericField_content$normalization.graphql"}},"plural":true}

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraGenericFieldCollection_content$data = {
  readonly delimiter: string | null;
  readonly fields: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __fragmentPropName: string | null;
        readonly __module_component: string | null;
        readonly " $fragmentSpreads": FragmentRefs<"JiraGenericField_content">;
      } | null;
    } | null> | null;
    readonly totalCount: number | null;
  } | null;
  readonly " $fragmentType": "JiraGenericFieldCollection_content";
};
export type JiraGenericFieldCollection_content$key = {
  readonly " $data"?: JiraGenericFieldCollection_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericFieldCollection_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericFieldCollection_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "delimiter",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "cloudId",
          "value": ""
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "JiraGenericFieldConnection",
      "kind": "LinkedField",
      "name": "fields",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "JiraGenericFieldEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "JiraGenericField",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "documentName": "JiraGenericFieldCollection_content",
                  "fragmentName": "JiraGenericField_content",
                  "fragmentPropName": "content",
                  "kind": "ModuleImport"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "fields(cloudId:\"\",first:1)"
    }
  ],
  "type": "JiraGenericFieldCollection",
  "abstractKey": null
};

(node as any).hash = "86c68805b47e3807e9c7876aa46c4be3";

export default node;
