/**
 * @generated SignedSource<<d3944d979d1fdfed841eb56743e573c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency JiraProjectDirectoryResults_content.rows.edges.node.columns.edges.node.renderer {"branches":{"JiraProjectActionsCell":{"component":"JiraProjectActionsCell","fragment":"JiraProjectActionsCell_content$normalization.graphql"},"JiraProjectCategoryCell":{"component":"JiraProjectCategoryCell","fragment":"JiraProjectCategoryCell_content$normalization.graphql"},"JiraProjectFavouriteCell":{"component":"JiraProjectFavouriteCell","fragment":"JiraProjectFavouriteCell_content$normalization.graphql"},"JiraProjectKeyCell":{"component":"JiraProjectKeyCell","fragment":"JiraProjectKeyCell_content$normalization.graphql"},"JiraProjectLastIssueUpdateCell":{"component":"JiraProjectLastIssueUpdateCell","fragment":"JiraProjectLastIssueUpdateCell_content$normalization.graphql"},"JiraProjectLeadCell":{"component":"JiraProjectLeadCell","fragment":"JiraProjectLeadCell_content$normalization.graphql"},"JiraProjectLinkCell":{"component":"JiraProjectLinkCell","fragment":"JiraProjectLinkCell_content$normalization.graphql"},"JiraProjectNameCell":{"component":"JiraProjectNameCell","fragment":"JiraProjectNameCell_content$normalization.graphql"},"JiraProjectTypeCell":{"component":"JiraProjectTypeCell","fragment":"JiraProjectTypeCell_content$normalization.graphql"}},"plural":true}

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SortDirection = "ASC" | "DESC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JiraProjectDirectoryResults_content$data = {
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
                readonly " $fragmentSpreads": FragmentRefs<"JiraProjectActionsCell_content" | "JiraProjectCategoryCell_content" | "JiraProjectFavouriteCell_content" | "JiraProjectKeyCell_content" | "JiraProjectLastIssueUpdateCell_content" | "JiraProjectLeadCell_content" | "JiraProjectLinkCell_content" | "JiraProjectNameCell_content" | "JiraProjectTypeCell_content">;
              } | null;
            } | null;
          } | null> | null;
        } | null;
      } | null;
    } | null> | null;
    readonly totalCount: number | null;
  } | null;
  readonly " $fragmentType": "JiraProjectDirectoryResults_content";
};
export type JiraProjectDirectoryResults_content$key = {
  readonly " $data"?: JiraProjectDirectoryResults_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectDirectoryResults_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectDirectoryResults_content",
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
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectDirectoryResult",
  "abstractKey": null
};

(node as any).hash = "44439f892b3104ee86a12972a3807080";

export default node;
