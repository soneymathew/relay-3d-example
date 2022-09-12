/**
 * @generated SignedSource<<f510400a22cfd55bbfc66aa4869fb5d5>>
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
        }
      ],
      "storageKey": null
    }
  ]
};

node.hash = "d699f6736cfc4f68e8b42101c1462dbd";

module.exports = node;
