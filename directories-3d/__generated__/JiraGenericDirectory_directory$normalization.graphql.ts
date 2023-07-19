/**
 * @generated SignedSource<<1d1e16406a5867954fab77c830f2b9a0>>
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
  "name": "JiraGenericDirectory_directory$normalization",
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
                          "documentName": "JiraGenericDirectory_directory_createDirectoryItem",
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
                      "value": "u9OZc"
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
                          "documentName": "JiraGenericDirectory_directory_filterCriteria",
                          "fragmentName": "JiraDirectorySearchTextFilterCriteria_content",
                          "fragmentPropName": "content",
                          "kind": "ModuleImport"
                        }
                      ],
                      "type": "JiraDirectorySearchTextFilterCriteria",
                      "abstractKey": null
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "args": null,
                          "documentName": "JiraGenericDirectory_directory_filterCriteria",
                          "fragmentName": "JiraGenericDirectoryProjectTypesFilterCriteria_content",
                          "fragmentPropName": "content",
                          "kind": "ModuleImport"
                        }
                      ],
                      "type": "JiraGenericDirectoryProjectTypesFilterCriteria",
                      "abstractKey": null
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "args": null,
                          "documentName": "JiraGenericDirectory_directory_filterCriteria",
                          "fragmentName": "JiraGenericDirectoryProjectCategoriesFilterCriteria_content",
                          "fragmentPropName": "content",
                          "kind": "ModuleImport"
                        }
                      ],
                      "type": "JiraGenericDirectoryProjectCategoriesFilterCriteria",
                      "abstractKey": null
                    }
                  ],
                  "storageKey": "renderer(supported:\"u9OZc\")"
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
              "documentName": "JiraGenericDirectory_directory_result",
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

(node as any).hash = "2c6a925c7c0566091ea1a1e61125f3dc";

export default node;
