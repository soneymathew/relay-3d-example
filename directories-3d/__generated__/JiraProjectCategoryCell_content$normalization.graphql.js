/**
 * @generated SignedSource<<985228a21f28716b2a4b53c7c5b7d16e>>
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
  "name": "JiraProjectCategoryCell_content$normalization",
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
          "concreteType": "JiraProjectCategory",
          "kind": "LinkedField",
          "name": "category",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
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

node.hash = "8abc34e0efbb49543ab9160167e884fe";

module.exports = node;
