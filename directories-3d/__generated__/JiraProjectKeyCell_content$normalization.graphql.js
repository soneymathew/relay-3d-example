/**
 * @generated SignedSource<<caf342b9637acc0d955690e017e908b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';



var node = {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "JiraProjectKeyCell_content$normalization",
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
          "name": "key",
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

node.hash = "45ffea7b14d3dc001015975ce3bb64d8";

module.exports = node;
