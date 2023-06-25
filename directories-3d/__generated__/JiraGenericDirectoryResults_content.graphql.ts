/**
 * @generated SignedSource<<b27601abd54e19cda6db80127cfb9d9a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer {"branches":{"JiraGenericField":{"component":"JiraGenericField","fragment":"JiraGenericField_content$normalization.graphql"},"JiraProjectActionsCell":{"component":"JiraProjectActionsCell","fragment":"JiraProjectActionsCell_content$normalization.graphql"},"JiraProjectFavouriteCell":{"component":"JiraProjectFavouriteCell","fragment":"JiraProjectFavouriteCell_content$normalization.graphql"}},"plural":true}

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SortDirection = "ASC" | "DESC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JiraGenericDirectoryResults_content$data = {
  readonly headers: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly isSortable: boolean | null;
        readonly sortDirection: SortDirection | null;
        readonly sortKey: string | null;
        readonly title: string | null;
      } | null;
    } | null> | null;
  } | null;
  readonly rows: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly columns: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly renderer: {
                readonly __fragmentPropName?: string | null;
                readonly __module_component?: string | null;
                readonly " $fragmentSpreads": FragmentRefs<"JiraGenericField_content" | "JiraProjectActionsCell_content" | "JiraProjectFavouriteCell_content">;
              } | null;
            } | null;
          } | null> | null;
        } | null;
      } | null;
    } | null> | null;
    readonly " $fragmentSpreads": FragmentRefs<"JiraDirectoryResultPagination_content">;
  } | null;
  readonly " $fragmentType": "JiraGenericDirectoryResults_content";
};
export type JiraGenericDirectoryResults_content$key = {
  readonly " $data"?: JiraGenericDirectoryResults_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectoryResults_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraGenericDirectoryResults_content",
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
                            {
                              "alias": null,
                              "args": [
                                {
                                  "kind": "Literal",
                                  "name": "supported",
                                  "value": "4nFVvF"
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
                                      "documentName": "JiraGenericDirectoryResults_content",
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
                                      "documentName": "JiraGenericDirectoryResults_content",
                                      "fragmentName": "JiraProjectActionsCell_content",
                                      "fragmentPropName": "content",
                                      "kind": "ModuleImport"
                                    }
                                  ],
                                  "type": "JiraProjectActionsCell",
                                  "abstractKey": null
                                },
                                {
                                  "kind": "InlineFragment",
                                  "selections": [
                                    {
                                      "args": null,
                                      "documentName": "JiraGenericDirectoryResults_content",
                                      "fragmentName": "JiraGenericField_content",
                                      "fragmentPropName": "content",
                                      "kind": "ModuleImport"
                                    }
                                  ],
                                  "type": "JiraGenericField",
                                  "abstractKey": null
                                }
                              ],
                              "storageKey": "renderer(supported:\"4nFVvF\")"
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "JiraDirectoryResultPagination_content"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraGenericDirectoryResult",
  "abstractKey": null
};

(node as any).hash = "e2bf785e61f2ccb692f9fab1f78f8db9";

export default node;
