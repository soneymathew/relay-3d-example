/**
 * @generated SignedSource<<32d71c2595d7a3ad4522870bd2268d15>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectLastIssueUpdateCell_content",
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
  ],
  "type": "JiraProjectLastIssueUpdateCell",
  "abstractKey": null
};

node.hash = "d699f6736cfc4f68e8b42101c1462dbd";

module.exports = node;
