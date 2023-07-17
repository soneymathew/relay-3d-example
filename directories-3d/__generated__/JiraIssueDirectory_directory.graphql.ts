/**
 * @generated SignedSource<<f6a779663cb1ce6ece816ef2011a8548>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency JiraIssueDirectory_directory.filterCriteria {"branches":{"JiraDirectoryJqlBuilderAdvancedCriteria":{"component":"JiraDirectoryJqlBuilderAdvancedCriteria","fragment":"JiraDirectoryJqlBuilderAdvancedCriteria_content$normalization.graphql"}},"plural":true}
// @dataDrivenDependency JiraIssueDirectory_directory.pageActions {"branches":{"JiraGenericDirectoryCreateItem":{"component":"JiraGenericDirectoryCreateItem","fragment":"JiraGenericDirectoryCreateItem_directory$normalization.graphql"}},"plural":false}
// @dataDrivenDependency JiraIssueDirectory_directory.result {"branches":{"JiraGenericDirectoryResult":{"component":"JiraGenericDirectoryResult","fragment":"JiraGenericDirectoryResults_content$normalization.graphql"}},"plural":false}

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraIssueDirectory_directory$data = {
  readonly description: string | null;
  readonly filterCriteria: ReadonlyArray<{
    readonly __fragmentPropName?: string | null;
    readonly __module_component?: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"JiraDirectoryJqlBuilderAdvancedCriteria_content">;
  }>;
  readonly pageActions: {
    readonly __fragmentPropName?: string | null;
    readonly __module_component?: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"JiraGenericDirectoryCreateItem_directory">;
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
      "args": [
        {
          "kind": "Literal",
          "name": "supported",
          "value": "2ZnHzk"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "pageActions",
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
      "storageKey": "pageActions(supported:\"2ZnHzk\")"
    },
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
      "name": "filterCriteria",
      "plural": true,
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
      "storageKey": "filterCriteria(supported:\"4j769g\")"
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

(node as any).hash = "90e349f1ea40c967909e635f3749f5a6";

export default node;
