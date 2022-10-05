/**
 * @generated SignedSource<<f36c7dc5812e0c3ba29722fdd65cc589>>
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
  "name": "__typename",
  "storageKey": null
};
return {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "JiraProjectDirectoryResults_content$normalization",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "headers",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isSortable",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "sortDirection",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "rows",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "columns",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "supported",
                  "value": [
                    "JiraProjectFavouriteCell",
                    "JiraProjectNameCell",
                    "JiraProjectKeyCell",
                    "JiraProjectTypeCell",
                    "JiraProjectLeadCell",
                    "JiraProjectLastIssueUpdateCell",
                    "JiraProjectCategoryCell",
                    "JiraProjectLinkCell",
                    "JiraProjectActionsCell"
                  ]
                }
              ],
              "concreteType": null,
              "kind": "LinkedField",
              "name": "renderer",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "args": null,
                      "documentName": "JiraProjectDirectoryResults_content",
                      "fragmentName": "JiraProjectFavouriteCell_content",
                      "fragmentPropName": "content",
                      "kind": "ModuleImport"
                    }
                  ],
                  "type": "JiraProjectFavouriteCell",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "args": null,
                      "documentName": "JiraProjectDirectoryResults_content",
                      "fragmentName": "JiraProjectNameCell_content",
                      "fragmentPropName": "content",
                      "kind": "ModuleImport"
                    }
                  ],
                  "type": "JiraProjectNameCell",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "args": null,
                      "documentName": "JiraProjectDirectoryResults_content",
                      "fragmentName": "JiraProjectKeyCell_content",
                      "fragmentPropName": "content",
                      "kind": "ModuleImport"
                    }
                  ],
                  "type": "JiraProjectKeyCell",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "args": null,
                      "documentName": "JiraProjectDirectoryResults_content",
                      "fragmentName": "JiraProjectTypeCell_content",
                      "fragmentPropName": "content",
                      "kind": "ModuleImport"
                    }
                  ],
                  "type": "JiraProjectTypeCell",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "args": null,
                      "documentName": "JiraProjectDirectoryResults_content",
                      "fragmentName": "JiraProjectLeadCell_content",
                      "fragmentPropName": "content",
                      "kind": "ModuleImport"
                    }
                  ],
                  "type": "JiraProjectLeadCell",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "args": null,
                      "documentName": "JiraProjectDirectoryResults_content",
                      "fragmentName": "JiraProjectLastIssueUpdateCell_content",
                      "fragmentPropName": "content",
                      "kind": "ModuleImport"
                    }
                  ],
                  "type": "JiraProjectLastIssueUpdateCell",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "args": null,
                      "documentName": "JiraProjectDirectoryResults_content",
                      "fragmentName": "JiraProjectCategoryCell_content",
                      "fragmentPropName": "content",
                      "kind": "ModuleImport"
                    }
                  ],
                  "type": "JiraProjectCategoryCell",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "args": null,
                      "documentName": "JiraProjectDirectoryResults_content",
                      "fragmentName": "JiraProjectLinkCell_content",
                      "fragmentPropName": "content",
                      "kind": "ModuleImport"
                    }
                  ],
                  "type": "JiraProjectLinkCell",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "args": null,
                      "documentName": "JiraProjectDirectoryResults_content",
                      "fragmentName": "JiraProjectActionsCell_content",
                      "fragmentPropName": "content",
                      "kind": "ModuleImport"
                    }
                  ],
                  "type": "JiraProjectActionsCell",
                  "abstractKey": null
                }
              ],
              "storageKey": "renderer(supported:[\"JiraProjectFavouriteCell\",\"JiraProjectNameCell\",\"JiraProjectKeyCell\",\"JiraProjectTypeCell\",\"JiraProjectLeadCell\",\"JiraProjectLastIssueUpdateCell\",\"JiraProjectCategoryCell\",\"JiraProjectLinkCell\",\"JiraProjectActionsCell\"])"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ]
};
})();

(node as any).hash = "5beb13be055c81aed366b0efc44eb3a3";

export default node;
