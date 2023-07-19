/**
 * @generated SignedSource<<399bfdd8b1cd93506c144568c7f75244>>
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
  "name": "JiraIssueDirectory_directory$normalization",
  "selections": [
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
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "JiraActionRendererConnection",
      "kind": "LinkedField",
      "name": "pageActions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "JiraActionRendererEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "JiraActionRenderer",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "supported",
                      "value": "4FchBD"
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
                          "documentName": "JiraIssueDirectory_directory_createDirectoryItem",
                          "fragmentName": "JiraGenericDirectoryCreateItem_directory",
                          "fragmentPropName": "directory",
                          "kind": "ModuleImport"
                        }
                      ],
                      "type": "JiraCreateEntityAction",
                      "abstractKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "id",
                      "storageKey": null
                    }
                  ],
                  "storageKey": "renderer(supported:\"4FchBD\")"
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
      "concreteType": "JiraDirectoryFilterCriteriaRendererConnection",
      "kind": "LinkedField",
      "name": "filterCriteria",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "JiraDirectoryFilterCriteriaRendererEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "JiraDirectoryFilterCriteriaRenderer",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "supported",
                      "value": "4j769g"
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
                          "documentName": "JiraIssueDirectory_directory_filterCriteria",
                          "fragmentName": "JiraDirectoryJqlBuilderAdvancedCriteria_content",
                          "fragmentPropName": "content",
                          "kind": "ModuleImport"
                        }
                      ],
                      "type": "JiraDirectoryJqlBuilderAdvancedCriteria",
                      "abstractKey": null
                    }
                  ],
                  "storageKey": "renderer(supported:\"4j769g\")"
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "result",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "JiraIssueDirectory_directory_result",
              "fragmentName": "JiraGenericDirectoryResults_content",
              "fragmentPropName": "content",
              "kind": "ModuleImport"
            }
          ],
          "type": "JiraGenericDirectoryResult",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ]
};
})();

(node as any).hash = "a97a4c833a5bd970c3e8b36fc2f608cc";

export default node;
