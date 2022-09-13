/**
 * @generated SignedSource<<896c81f14529d4c43ce8dd336f0b71f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';



var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "JiraProjectTypeCell_content$normalization",
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
            },
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ]
};
})();

node.hash = "a0f34771113b4cf216b66d076e632096";

module.exports = node;
