/**
 * @generated SignedSource<<e0e64b0e30be3fdccf6c21910e8ee74b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @dataDrivenDependency JiraProjectDirectory_directory.createDirectoryItem {"branches":{"JiraProjectDirectoryCreateItem":{"component":"JiraProjectDirectoryCreateItem","fragment":"JiraProjectDirectoryCreateItem_directory$normalization.graphql"}},"plural":false}
// @dataDrivenDependency JiraProjectDirectory_directory.filterCriteria {"branches":{"JiraDirectorySearchTextFilterCriteria":{"component":"JiraDirectorySearchTextFilterCriteria","fragment":"JiraDirectorySearchTextFilterCriteria_content$normalization.graphql"},"JiraProjectDirectoryProjectCategoriesFilterCriteria":{"component":"JiraProjectDirectoryProjectCategoriesFilterCriteria","fragment":"JiraProjectDirectoryProjectCategoriesFilterCriteria_content$normalization.graphql"},"JiraProjectDirectoryProjectTypesFilterCriteria":{"component":"JiraProjectDirectoryProjectTypesFilterCriteria","fragment":"JiraProjectDirectoryProjectTypesFilterCriteria_content$normalization.graphql"}},"plural":true}
// @dataDrivenDependency JiraProjectDirectory_directory.result {"branches":{"JiraProjectDirectoryResult":{"component":"JiraProjectDirectoryResult","fragment":"JiraProjectDirectoryResults_content$normalization.graphql"}},"plural":false}

var node = {
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
              "documentName": "JiraProjectDirectory_directory",
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
              "documentName": "JiraProjectDirectory_directory",
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
              "documentName": "JiraProjectDirectory_directory",
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

node.hash = "c547b6bb0b377ab28981a68aee81956e";

module.exports = node;
