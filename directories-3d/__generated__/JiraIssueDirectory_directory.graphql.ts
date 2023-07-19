/**
 * @generated SignedSource<<605f7a8f54108a23be3c4e50f9daef20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency JiraIssueDirectory_directory.filterCriteria.edges.node.renderer {"branches":{"JiraDirectoryJqlBuilderAdvancedCriteria":{"component":"JiraDirectoryJqlBuilderAdvancedCriteria","fragment":"JiraDirectoryJqlBuilderAdvancedCriteria_content$normalization.graphql"}},"plural":true}
// @dataDrivenDependency JiraIssueDirectory_directory.pageActions.edges.node.renderer {"branches":{"JiraCreateEntityAction":{"component":"JiraGenericDirectoryCreateItem","fragment":"JiraGenericDirectoryCreateItem_directory$normalization.graphql"}},"plural":true}
// @dataDrivenDependency JiraIssueDirectory_directory.result {"branches":{"JiraGenericDirectoryResult":{"component":"JiraGenericDirectoryResult","fragment":"JiraGenericDirectoryResults_content$normalization.graphql"}},"plural":false}

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraIssueDirectory_directory$data = {
  readonly description: string | null;
  readonly filterCriteria: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly renderer: {
          readonly __fragmentPropName?: string | null;
          readonly __module_component?: string | null;
          readonly " $fragmentSpreads": FragmentRefs<"JiraDirectoryJqlBuilderAdvancedCriteria_content">;
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
  readonly " $fragmentType": "JiraIssueDirectory_directory";
};
export type JiraIssueDirectory_directory$key = {
  readonly " $data"?: JiraIssueDirectory_directory$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraIssueDirectory_directory">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraIssueDirectory_directory",
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
                          "documentName": "JiraIssueDirectory_directory_createDirectoryItem",
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
                      "value": "4j769g"
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
  ],
  "type": "JiraIssueDirectory",
  "abstractKey": null
};

(node as any).hash = "a97a4c833a5bd970c3e8b36fc2f608cc";

export default node;
