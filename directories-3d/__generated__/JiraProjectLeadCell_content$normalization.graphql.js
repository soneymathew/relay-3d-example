/**
 * @generated SignedSource<<4d8cac693a547cd975121ff8bc6660af>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';



var node = {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "JiraProjectLeadCell_content$normalization",
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ]
};

node.hash = "0a76d401464871fb1bed8902ecb02bee";

module.exports = node;
