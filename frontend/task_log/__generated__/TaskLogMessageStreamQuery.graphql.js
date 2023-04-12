/**
 * @generated SignedSource<<7e6e9e9a03551a5171b852cfc49b3675>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "taskId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "taskId",
        "variableName": "taskId"
      }
    ],
    "concreteType": "TaskLogMessageType",
    "kind": "LinkedField",
    "name": "taskLogMessages",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "role",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "content",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ThoughtsType",
                "kind": "LinkedField",
                "name": "thoughts",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "text",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "reasoning",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "plan",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "criticism",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "speak",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CommandType",
                "kind": "LinkedField",
                "name": "command",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "args",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "AssistantContentType",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v4/*: any*/),
            "type": "FeedbackRequestContentType",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "feedback",
                "storageKey": null
              }
            ],
            "type": "FeedbackContentType",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v4/*: any*/),
            "type": "SystemContentType",
            "abstractKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AgentType",
        "kind": "LinkedField",
        "name": "agent",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskLogMessageStreamQuery",
    "selections": (v5/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TaskLogMessageStreamQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "ab342ef620bdd1fae3f0a060c37ce00f",
    "id": null,
    "metadata": {},
    "name": "TaskLogMessageStreamQuery",
    "operationKind": "query",
    "text": "query TaskLogMessageStreamQuery(\n  $taskId: ID!\n) {\n  taskLogMessages(taskId: $taskId) {\n    id\n    role\n    createdAt\n    content {\n      __typename\n      ... on AssistantContentType {\n        type\n        thoughts {\n          text\n          reasoning\n          plan\n          criticism\n          speak\n        }\n        command {\n          name\n          args\n        }\n      }\n      ... on FeedbackRequestContentType {\n        type\n        message\n      }\n      ... on FeedbackContentType {\n        type\n        feedback\n      }\n      ... on SystemContentType {\n        type\n        message\n      }\n    }\n    agent {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

node.hash = "d8b186c217c767802fad7649d5988a78";

module.exports = node;