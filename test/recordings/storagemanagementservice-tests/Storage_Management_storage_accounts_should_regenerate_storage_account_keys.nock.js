// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup9856/providers/Microsoft.Storage/storageAccounts/testacc79/listKeys?api-version=2015-05-01-preview')
  .reply(200, "{\"key1\":\"loGefxP+JLAvFdiO4cdhgj77pV9Ig5vWU/++DPQSwH8iZQS2AOkikG7OSKp9Jit6vZ5wqMPoKLCTHGFvwu2CAg==\",\"key2\":\"4bLlPaS4PhOJu7/QmZ/a8BxjOn2YWX40mboGx08clCOZHh/Li6niD5CHBjQF2rxRlr/vIRYwWvvS0dDthtEFWg==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '66740486-eb90-4d8b-8ddf-6eec47a53999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '66740486-eb90-4d8b-8ddf-6eec47a53999',
  'x-ms-routing-request-id': 'WESTUS:20151027T002440Z:66740486-eb90-4d8b-8ddf-6eec47a53999',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:24:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup9856/providers/Microsoft.Storage/storageAccounts/testacc79/listKeys?api-version=2015-05-01-preview')
  .reply(200, "{\"key1\":\"loGefxP+JLAvFdiO4cdhgj77pV9Ig5vWU/++DPQSwH8iZQS2AOkikG7OSKp9Jit6vZ5wqMPoKLCTHGFvwu2CAg==\",\"key2\":\"4bLlPaS4PhOJu7/QmZ/a8BxjOn2YWX40mboGx08clCOZHh/Li6niD5CHBjQF2rxRlr/vIRYwWvvS0dDthtEFWg==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '66740486-eb90-4d8b-8ddf-6eec47a53999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '66740486-eb90-4d8b-8ddf-6eec47a53999',
  'x-ms-routing-request-id': 'WESTUS:20151027T002440Z:66740486-eb90-4d8b-8ddf-6eec47a53999',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:24:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup9856/providers/Microsoft.Storage/storageAccounts/testacc79/regenerateKey?api-version=2015-05-01-preview', '*')
  .reply(200, "{\"key1\":\"5o0EKW+jJbSS7e8mAC2n4XvASvSgIn+djptbtIiJFoQpt351BlVpWgDSYC/+KXjkLn/o49v/cj2jPiTi8KydtA==\",\"key2\":\"4bLlPaS4PhOJu7/QmZ/a8BxjOn2YWX40mboGx08clCOZHh/Li6niD5CHBjQF2rxRlr/vIRYwWvvS0dDthtEFWg==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8798009c-5e08-427a-8348-f772e596168e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8798009c-5e08-427a-8348-f772e596168e',
  'x-ms-routing-request-id': 'WESTUS:20151027T002440Z:8798009c-5e08-427a-8348-f772e596168e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:24:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup9856/providers/Microsoft.Storage/storageAccounts/testacc79/regenerateKey?api-version=2015-05-01-preview', '*')
  .reply(200, "{\"key1\":\"5o0EKW+jJbSS7e8mAC2n4XvASvSgIn+djptbtIiJFoQpt351BlVpWgDSYC/+KXjkLn/o49v/cj2jPiTi8KydtA==\",\"key2\":\"4bLlPaS4PhOJu7/QmZ/a8BxjOn2YWX40mboGx08clCOZHh/Li6niD5CHBjQF2rxRlr/vIRYwWvvS0dDthtEFWg==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8798009c-5e08-427a-8348-f772e596168e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8798009c-5e08-427a-8348-f772e596168e',
  'x-ms-routing-request-id': 'WESTUS:20151027T002440Z:8798009c-5e08-427a-8348-f772e596168e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:24:40 GMT',
  connection: 'close' });
 return result; }]];