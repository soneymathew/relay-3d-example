/**
 * @generated SignedSource<<3d62f46fbd538262de1fed1519dce32d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JiraDirectoryJqlBuilderAdvancedCriteria_content$data = {
  readonly jql: string | null;
  readonly type: string | null;
  readonly " $fragmentType": "JiraDirectoryJqlBuilderAdvancedCriteria_content";
};
export type JiraDirectoryJqlBuilderAdvancedCriteria_content$key = {
  readonly " $data"?: JiraDirectoryJqlBuilderAdvancedCriteria_content$data;
  readonly " $fragmentSpreads": FragmentRefs<"JiraDirectoryJqlBuilderAdvancedCriteria_content">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JiraDirectoryJqlBuilderAdvancedCriteria_content",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "jql",
      "storageKey": null
    }
  ],
  "type": "JiraDirectoryJqlBuilderAdvancedCriteria",
  "abstractKey": null
};

(node as any).hash = "2fa2c7258512bb8f61d2bc428886e07b";

export default node;
