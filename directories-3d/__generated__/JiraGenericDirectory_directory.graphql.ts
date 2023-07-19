/**
 * @generated SignedSource<<4a2981c01c8065cef6ff40f72d2dcad4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency JiraGenericDirectory_directory.filterCriteria.edges.node.renderer {"branches":{"JiraDirectorySearchTextFilterCriteria":{"component":"JiraDirectorySearchTextFilterCriteria","fragment":"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectCategoriesFilterCriteria":{"component":"JiraGenericDirectoryProjectCategoriesFilterCriteria","fragment":"JiraGenericDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectTypesFilterCriteria":{"component":"JiraGenericDirectoryProjectTypesFilterCriteria","fragment":"JiraGenericDirectoryProjectTypesFilterCriteria_content$normalization.graphql"}},"plural":true}
// @dataDrivenDependency JiraGenericDirectory_directory.pageActions.edges.node.renderer {"branches":{"JiraCreateEntityAction":{"component":"JiraGenericDirectoryCreateItem","fragment":"JiraGenericDirectoryCreateItem_directory$normalization.graphql"}},"plural":true}
// @dataDrivenDependency JiraGenericDirectory_directory.result {"branches":{"JiraGenericDirectoryResult":{"component":"JiraGenericDirectoryResult","fragment":"JiraGenericDirectoryResults_content$normalization.graphql"}},"plural":false}

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraGenericDirectory_directory$data = {
  readonly description: string | null;
  readonly filterCriteria: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly renderer: {
          readonly __fragmentPropName?: string | null;
          readonly __module_component?: string | null;
          readonly " $fragmentSpreads": FragmentRefs<"JiraDirectorySearchTextFilterCriteria_content" | "JiraGenericDirectoryProjectCategoriesFilterCriteria_content" | "JiraGenericDirectoryProjectTypesFilterCriteria_content">;
        } | null;
      } | null;
    } | null> | null;
  } | null;
  readonly pageActions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly renderer: {
          readonly __fragmentPropName?: string | null;
          readonly __module_component?: string | null;
          readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectoryCreateItem_directory">;
        } | null;
      } | null;
    } | null> | null;
  } | null;
  readonly result: {
    readonly __fragmentPropName?: string | null;
    readonly __module_component?: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectoryResults_content">;
  } | null;
  readonly title: string;
  readonly " $fragmentType": "JiraGenericDirectory_directory";
};
export type JiraGenericDirectory_directory$key = {
  readonly " $data"?: JiraGenericDirectory_directory$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectory_directory">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericDirectory_directory",
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
  ],
  "type": "JiraGenericDirectory",
  "abstractKey": null
};

(node as any).hash = "2c6a925c7c0566091ea1a1e61125f3dc";

export default node;
