/**
 * @generated SignedSource<<30019f194714cce60932bc8290dc6666>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { NormalizationSplitOperation } from 'relay-runtime';


const node: NormalizationSplitOperation = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "kind": "SplitOperation",
  "metadata": {},
  "name": "JiraIssueDirectory_directory$normalization",
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
        (v0/*: any*/),
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
        (v0/*: any*/),
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
        (v0/*: any*/),
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
  ]
};
})();

(node as any).hash = "90e349f1ea40c967909e635f3749f5a6";

export default node;
