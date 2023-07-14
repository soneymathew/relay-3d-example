/**
 * @generated SignedSource<<022b2aac03145ee2e0bb9cc23e225b57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency JiraGenericDirectoryResults_content.headers.edges.node.renderer {"branches":{"JiraDirectoryDefaultResultHeader":{"component":"JiraDirectoryDefaultResultHeader","fragment":"JiraDirectoryDefaultResultHeader_content$normalization.graphql"},"JiraDirectoryIssueResultHeader":{"component":"JiraDirectoryIssueResultHeader","fragment":"JiraDirectoryIssueResultHeader_content$normalization.graphql"}},"plural":true}
// @dataDrivenDependency JiraGenericDirectoryResults_content.rows.edges.node.columns.edges.node.renderer {"branches":{"JiraGenericActionsField":{"component":"JiraGenericActionsField","fragment":"JiraGenericActionsField_content$normalization.graphql"},"JiraGenericFavouriteField":{"component":"JiraGenericFavouriteField","fragment":"JiraGenericFavouriteField_content$normalization.graphql"},"JiraGenericField":{"component":"JiraGenericField","fragment":"JiraGenericField_content$normalization.graphql"},"JiraGenericFieldCollection":{"component":"JiraGenericFieldCollection","fragment":"JiraGenericFieldCollection_content$normalization.graphql"}},"plural":true}

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraGenericDirectoryResults_content$data = {
  readonly headers: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly renderer: {
          readonly __fragmentPropName?: string | null;
          readonly __module_component?: string | null;
          readonly " $fragmentSpreads": FragmentRefs<"JiraDirectoryDefaultResultHeader_content" | "JiraDirectoryIssueResultHeader_content">;
        } | null;
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
                readonly " $fragmentSpreads": FragmentRefs<"JiraGenericActionsField_content" | "JiraGenericFavouriteField_content" | "JiraGenericFieldCollection_content" | "JiraGenericField_content">;
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
                                  "value": "2JbIzI"
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

(node as any).hash = "b5fe7b7086e34a9237fb119467060320";

export default node;
