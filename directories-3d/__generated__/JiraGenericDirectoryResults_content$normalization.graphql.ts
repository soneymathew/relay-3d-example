/**
 * @generated SignedSource<<c8ca89502d3c6dccd24318b407cd94dd>>
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
  "name": "JiraGenericDirectoryResults_content$normalization",
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
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "supported",
                      "value": "1rhgR5"
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
                          "documentName": "JiraGenericDirectoryResults_content_headers",
                          "fragmentName": "JiraDirectoryDefaultResultHeader_content",
                          "fragmentPropName": "content",
                          "kind": "ModuleImport"
                        }
                      ],
                      "type": "JiraDirectoryDefaultResultHeader",
                      "abstractKey": null
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "args": null,
                          "documentName": "JiraGenericDirectoryResults_content_headers",
                          "fragmentName": "JiraDirectoryIssueResultHeader_content",
                          "fragmentPropName": "content",
                          "kind": "ModuleImport"
                        }
                      ],
                      "type": "JiraDirectoryIssueResultHeader",
                      "abstractKey": null
                    }
                  ],
                  "storageKey": "renderer(supported:\"1rhgR5\")"
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
                                  "value": "2JbIzI"
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
                                      "documentName": "JiraGenericDirectoryResults_content_columns",
                                      "fragmentName": "JiraGenericFavouriteField_content",
                                      "fragmentPropName": "content",
                                      "kind": "ModuleImport"
                                    }
                                  ],
                                  "type": "JiraGenericFavouriteField",
                                  "abstractKey": null
                                },
                                {
                                  "kind": "InlineFragment",
                                  "selections": [
                                    {
                                      "args": null,
                                      "documentName": "JiraGenericDirectoryResults_content_columns",
                                      "fragmentName": "JiraGenericActionsField_content",
                                      "fragmentPropName": "content",
                                      "kind": "ModuleImport"
                                    }
                                  ],
                                  "type": "JiraGenericActionsField",
                                  "abstractKey": null
                                },
                                {
                                  "kind": "InlineFragment",
                                  "selections": [
                                    {
                                      "args": null,
                                      "documentName": "JiraGenericDirectoryResults_content_columns",
                                      "fragmentName": "JiraGenericField_content",
                                      "fragmentPropName": "content",
                                      "kind": "ModuleImport"
                                    }
                                  ],
                                  "type": "JiraGenericField",
                                  "abstractKey": null
                                },
                                {
                                  "kind": "InlineFragment",
                                  "selections": [
                                    {
                                      "args": null,
                                      "documentName": "JiraGenericDirectoryResults_content_columns",
                                      "fragmentName": "JiraGenericFieldCollection_content",
                                      "fragmentPropName": "content",
                                      "kind": "ModuleImport"
                                    }
                                  ],
                                  "type": "JiraGenericFieldCollection",
                                  "abstractKey": null
                                }
                              ],
                              "storageKey": "renderer(supported:\"2JbIzI\")"
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

(node as any).hash = "b5fe7b7086e34a9237fb119467060320";

export default node;
