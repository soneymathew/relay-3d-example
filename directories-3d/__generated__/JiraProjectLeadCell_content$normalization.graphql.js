/**
 * @generated SignedSource<<5c7096c54781eff5f6ce0459cf76ad00>>
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
        }
      ],
      "storageKey": null
    }
  ]
};

node.hash = "0a76d401464871fb1bed8902ecb02bee";

module.exports = node;
