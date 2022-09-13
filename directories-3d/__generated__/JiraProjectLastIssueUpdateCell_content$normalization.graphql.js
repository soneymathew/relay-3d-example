/**
 * @generated SignedSource<<6f22fb8960b32378d0b553d8c67d8751>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';



var node = {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "JiraProjectLastIssueUpdateCell_content$normalization",
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

node.hash = "d699f6736cfc4f68e8b42101c1462dbd";

module.exports = node;
