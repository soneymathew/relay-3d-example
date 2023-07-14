/**
 * @generated SignedSource<<4b375c17523da37ed5b28930e8127b67>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { NormalizationSplitOperation } from 'relay-runtime';


const node: NormalizationSplitOperation = {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "JiraGenericFieldCollection_content$normalization",
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
  ]
};

(node as any).hash = "86c68805b47e3807e9c7876aa46c4be3";

export default node;
