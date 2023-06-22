/**
 * @generated SignedSource<<bb4f1ed74e0c55a254eb7a352635ae7f>>
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
      "concreteType": "JiraDirectoryResultHeaderConnection",
      "kind": "LinkedField",
      "name": "headers",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "JiraDirectoryResultHeaderEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "sortKey",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraDirectoryResultValuesConnection",
      "kind": "LinkedField",
      "name": "rows",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "JiraDirectoryResultValuesEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "JiraDirectoryResultCellConnection",
                  "kind": "LinkedField",
                  "name": "columns",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "JiraDirectoryResultCellEdge",
                      "kind": "LinkedField",
                      "name": "edges",
                      "plural": true,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": null,
                          "kind": "LinkedField",
                          "name": "node",
                          "plural": false,
                          "selections": [
                            (v0/*: any*/),
                            {
                              "alias": null,
                              "args": [
                                {
                                  "kind": "Literal",
                                  "name": "supported",
                                  "value": "1NuNET"
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
                              "storageKey": "renderer(supported:\"1NuNET\")"
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCount",
              "storageKey": null
            }
          ],
          "type": "HasTotalCount",
          "abstractKey": "__isHasTotalCount"
        }
      ],
      "storageKey": null
    }
  ]
};
})();

(node as any).hash = "13e2c5e906da8e74f6fbb52163b2665b";

export default node;
