/**
 * @generated SignedSource<<333895374db8b9281cb303a6a8774d3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { NormalizationSplitOperation } from 'relay-runtime';


const node: NormalizationSplitOperation = (function(){
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

(node as any).hash = "a0f34771113b4cf216b66d076e632096";

export default node;
