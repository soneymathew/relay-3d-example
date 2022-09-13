/**
 * @generated SignedSource<<7dd4c1c812623c196e6efaefbc635296>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';



var node = {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "JiraProjectLinkCell_content$normalization",
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

node.hash = "47e4f4b5917c3c6dab3484001d4b1746";

module.exports = node;
