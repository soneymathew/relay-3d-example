/**
 * @generated SignedSource<<4523e7e2742dd6ee1cced99ffbd27b06>>
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
  "name": "JiraGenericDirectory_directory$normalization",
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
              "documentName": "JiraGenericDirectory_directory_createDirectoryItem",
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
          "value": "u9OZc"
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
              "documentName": "JiraGenericDirectory_directory_filterCriteria",
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
              "documentName": "JiraGenericDirectory_directory_filterCriteria",
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
              "documentName": "JiraGenericDirectory_directory_filterCriteria",
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
        (v0/*: any*/),
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "JiraGenericDirectory_directory_result",
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

(node as any).hash = "0715f2a92ecb2475014e6088dfccc11f";

export default node;
