/**
 * @generated SignedSource<<ced98737601b9e7bbc4346399f60dbb4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency JiraProjectDirectory_directory.createDirectoryItem {"branches":{"JiraProjectDirectoryCreateItem":{"component":"JiraProjectDirectoryCreateItem","fragment":"JiraProjectDirectoryCreateItem_directory$normalization.graphql"}},"plural":false}
// @dataDrivenDependency JiraProjectDirectory_directory.filterCriteria {"branches":{"JiraDirectorySearchTextFilterCriteria":{"component":"JiraDirectorySearchTextFilterCriteria","fragment":"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql"},"JiraProjectDirectoryProjectCategoriesFilterCriteria":{"component":"JiraProjectDirectoryProjectCategoriesFilterCriteria","fragment":"JiraProjectDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql"},"JiraProjectDirectoryProjectTypesFilterCriteria":{"component":"JiraProjectDirectoryProjectTypesFilterCriteria","fragment":"JiraProjectDirectoryProjectTypesFilterCriteria_content$normalization.graphql"}},"plural":true}
// @dataDrivenDependency JiraProjectDirectory_directory.result {"branches":{"JiraProjectDirectoryResult":{"component":"JiraProjectDirectoryResult","fragment":"JiraProjectDirectoryResults_content$normalization.graphql"}},"plural":false}

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraProjectDirectory_directory$data = {
  readonly createDirectoryItem: {
    readonly __fragmentPropName?: string | null;
    readonly __module_component?: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"JiraProjectDirectoryCreateItem_directory">;
  } | null;
  readonly description: string | null;
  readonly filterCriteria: ReadonlyArray<{
    readonly __fragmentPropName?: string | null;
    readonly __module_component?: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"JiraDirectorySearchTextFilterCriteria_content" | "JiraProjectDirectoryProjectCategoriesFilterCriteria_content" | "JiraProjectDirectoryProjectTypesFilterCriteria_content">;
  }>;
  readonly result: {
    readonly __fragmentPropName?: string | null;
    readonly __module_component?: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"JiraProjectDirectoryResults_content">;
  } | null;
  readonly title: string;
  readonly " $fragmentType": "JiraProjectDirectory_directory";
};
export type JiraProjectDirectory_directory$key = {
  readonly " $data"?: JiraProjectDirectory_directory$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraProjectDirectory_directory">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraProjectDirectory_directory",
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
          "value": [
            "JiraProjectDirectoryCreateItem"
          ]
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
              "documentName": "JiraProjectDirectory_directory_createDirectoryItem",
              "fragmentName": "JiraProjectDirectoryCreateItem_directory",
              "fragmentPropName": "directory",
              "kind": "ModuleImport"
            }
          ],
          "type": "JiraProjectDirectoryCreateItem",
          "abstractKey": null
        }
      ],
      "storageKey": "createDirectoryItem(supported:[\"JiraProjectDirectoryCreateItem\"])"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "supported",
          "value": [
            "JiraDirectorySearchTextFilterCriteria",
            "JiraProjectDirectoryProjectTypesFilterCriteria",
            "JiraProjectDirectoryProjectCategoriesFilterCriteria"
          ]
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
              "documentName": "JiraProjectDirectory_directory_filterCriteria",
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
              "documentName": "JiraProjectDirectory_directory_filterCriteria",
              "fragmentName": "JiraProjectDirectoryProjectTypesFilterCriteria_content",
              "fragmentPropName": "content",
              "kind": "ModuleImport"
            }
          ],
          "type": "JiraProjectDirectoryProjectTypesFilterCriteria",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "JiraProjectDirectory_directory_filterCriteria",
              "fragmentName": "JiraProjectDirectoryProjectCategoriesFilterCriteria_content",
              "fragmentPropName": "content",
              "kind": "ModuleImport"
            }
          ],
          "type": "JiraProjectDirectoryProjectCategoriesFilterCriteria",
          "abstractKey": null
        }
      ],
      "storageKey": "filterCriteria(supported:[\"JiraDirectorySearchTextFilterCriteria\",\"JiraProjectDirectoryProjectTypesFilterCriteria\",\"JiraProjectDirectoryProjectCategoriesFilterCriteria\"])"
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
              "documentName": "JiraProjectDirectory_directory_result",
              "fragmentName": "JiraProjectDirectoryResults_content",
              "fragmentPropName": "content",
              "kind": "ModuleImport"
            }
          ],
          "type": "JiraProjectDirectoryResult",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "JiraProjectDirectory",
  "abstractKey": null
};

(node as any).hash = "91fea1bf6787555c928af93be8cdb022";

export default node;
