/**
 * @generated SignedSource<<e4bd5801737c035dc7d168573ab12b19>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency JiraProjectDirectoryResults_content.rows.columns.renderer {"branches":{"JiraProjectActionsCell":{"component":"JiraProjectActionsCell","fragment":"JiraProjectActionsCell_content$normalization.graphql"},"JiraProjectCategoryCell":{"component":"JiraProjectCategoryCell","fragment":"JiraProjectCategoryCell_content$normalization.graphql"},"JiraProjectFavouriteCell":{"component":"JiraProjectFavouriteCell","fragment":"JiraProjectFavouriteCell_content$normalization.graphql"},"JiraProjectKeyCell":{"component":"JiraProjectKeyCell","fragment":"JiraProjectKeyCell_content$normalization.graphql"},"JiraProjectLastIssueUpdateCell":{"component":"JiraProjectLastIssueUpdateCell","fragment":"JiraProjectLastIssueUpdateCell_content$normalization.graphql"},"JiraProjectLeadCell":{"component":"JiraProjectLeadCell","fragment":"JiraProjectLeadCell_content$normalization.graphql"},"JiraProjectLinkCell":{"component":"JiraProjectLinkCell","fragment":"JiraProjectLinkCell_content$normalization.graphql"},"JiraProjectNameCell":{"component":"JiraProjectNameCell","fragment":"JiraProjectNameCell_content$normalization.graphql"},"JiraProjectTypeCell":{"component":"JiraProjectTypeCell","fragment":"JiraProjectTypeCell_content$normalization.graphql"}},"plural":true}

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SortDirection = "ASC" | "DESC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JiraProjectDirectoryResults_content$data = {
  readonly headers: ReadonlyArray<{
    readonly isSortable: boolean | null;
    readonly sortDirection: SortDirection | null;
    readonly title: string | null;
  } | null> | null;
  readonly rows: ReadonlyArray<{
    readonly columns: ReadonlyArray<{
      readonly renderer: {
        readonly __fragmentPropName?: string | null;
        readonly __module_component?: string | null;
        readonly " $fragmentSpreads": FragmentRefs<"JiraProjectActionsCell_content" | "JiraProjectCategoryCell_content" | "JiraProjectFavouriteCell_content" | "JiraProjectKeyCell_content" | "JiraProjectLastIssueUpdateCell_content" | "JiraProjectLeadCell_content" | "JiraProjectLinkCell_content" | "JiraProjectNameCell_content" | "JiraProjectTypeCell_content">;
      } | null;
    } | null> | null;
  } | null> | null;
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "headers",
      "plural": true,
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
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "columns",
          "plural": true,
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
  "type": "JiraProjectDirectoryResult",
  "abstractKey": null
};

(node as any).hash = "5beb13be055c81aed366b0efc44eb3a3";

export default node;
