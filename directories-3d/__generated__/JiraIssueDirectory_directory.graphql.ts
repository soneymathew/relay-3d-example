/**
 * @generated SignedSource<<3d9c4a6f2eed60b984ed7f75fb1b5d0e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency JiraIssueDirectory_directory.createDirectoryItem {"branches":{"JiraGenericDirectoryCreateItem":{"component":"JiraGenericDirectoryCreateItem","fragment":"JiraGenericDirectoryCreateItem_directory$normalization.graphql"}},"plural":false}
// @dataDrivenDependency JiraIssueDirectory_directory.filterCriteria {"branches":{"JiraDirectorySearchTextFilterCriteria":{"component":"JiraDirectorySearchTextFilterCriteria","fragment":"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectCategoriesFilterCriteria":{"component":"JiraGenericDirectoryProjectCategoriesFilterCriteria","fragment":"JiraGenericDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql"},"JiraGenericDirectoryProjectTypesFilterCriteria":{"component":"JiraGenericDirectoryProjectTypesFilterCriteria","fragment":"JiraGenericDirectoryProjectTypesFilterCriteria_content$normalization.graphql"}},"plural":true}
// @dataDrivenDependency JiraIssueDirectory_directory.result {"branches":{"JiraGenericDirectoryResult":{"component":"JiraGenericDirectoryResult","fragment":"JiraGenericDirectoryResults_content$normalization.graphql"}},"plural":false}

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraIssueDirectory_directory$data = {
  readonly createDirectoryItem: {
    readonly __fragmentPropName?: string | null;
    readonly __module_component?: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectoryCreateItem_directory">;
  } | null;
  readonly description: string | null;
  readonly filterCriteria: ReadonlyArray<{
    readonly __fragmentPropName?: string | null;
    readonly __module_component?: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"JiraDirectorySearchTextFilterCriteria_content" | "JiraGenericDirectoryProjectCategoriesFilterCriteria_content" | "JiraGenericDirectoryProjectTypesFilterCriteria_content">;
  }>;
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
      "args": [
        {
          "kind": "Literal",
          "name": "supported",
          "value": "2ZnHzk"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "createDirectoryItem",
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
          "type": "JiraGenericDirectoryCreateItem",
          "abstractKey": null
        }
      ],
      "storageKey": "createDirectoryItem(supported:\"2ZnHzk\")"
    },
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
      "name": "filterCriteria",
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "JiraIssueDirectory_directory_filterCriteria",
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
              "documentName": "JiraIssueDirectory_directory_filterCriteria",
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
              "documentName": "JiraIssueDirectory_directory_filterCriteria",
              "fragmentName": "JiraGenericDirectoryProjectCategoriesFilterCriteria_content",
              "fragmentPropName": "content",
              "kind": "ModuleImport"
            }
          ],
          "type": "JiraGenericDirectoryProjectCategoriesFilterCriteria",
          "abstractKey": null
        }
      ],
      "storageKey": "filterCriteria(supported:\"u9OZc\")"
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

(node as any).hash = "ef2e2cf8d6d60d8b984142fb4f2dd560";

export default node;
