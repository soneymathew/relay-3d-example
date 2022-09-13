/**
 * @generated SignedSource<<897f82a5e8eef7a01cc1ff236691c26b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectTypeCell_content",
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
          "name": "simplified",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "JiraProjectTypeDetails",
          "kind": "LinkedField",
          "name": "projectType",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "teamManagedDisplayName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "companyManagedDisplayName",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectTypeCell",
  "abstractKey": null
};

node.hash = "a0f34771113b4cf216b66d076e632096";

module.exports = node;
