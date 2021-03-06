// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nsg?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-nsg' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '83de965c-1a2e-4f20-b183-f891a6292312',
  'x-ms-correlation-request-id': '83de965c-1a2e-4f20-b183-f891a6292312',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125324Z:83de965c-1a2e-4f20-b183-f891a6292312',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 12:53:23 GMT',
  connection: 'close',
  'content-length': '106' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nsg?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-nsg' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '83de965c-1a2e-4f20-b183-f891a6292312',
  'x-ms-correlation-request-id': '83de965c-1a2e-4f20-b183-f891a6292312',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125324Z:83de965c-1a2e-4f20-b183-f891a6292312',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 12:53:23 GMT',
  connection: 'close',
  'content-length': '106' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nsg?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg\",\"name\":\"xplat-test-nsg\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'ed902168-bd46-4bb7-99b2-965192374f44',
  'x-ms-correlation-request-id': 'ed902168-bd46-4bb7-99b2-965192374f44',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125327Z:ed902168-bd46-4bb7-99b2-965192374f44',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 12:53:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nsg?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg\",\"name\":\"xplat-test-nsg\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'ed902168-bd46-4bb7-99b2-965192374f44',
  'x-ms-correlation-request-id': 'ed902168-bd46-4bb7-99b2-965192374f44',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125327Z:ed902168-bd46-4bb7-99b2-965192374f44',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 12:53:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkSecurityGroups/test-nsg' under resource group 'xplat-test-nsg' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4a2b4a12-08a0-4260-bb05-5f313d67c584',
  'x-ms-correlation-request-id': '4a2b4a12-08a0-4260-bb05-5f313d67c584',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125328Z:4a2b4a12-08a0-4260-bb05-5f313d67c584',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 12:53:28 GMT',
  connection: 'close',
  'content-length': '166' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkSecurityGroups/test-nsg' under resource group 'xplat-test-nsg' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4a2b4a12-08a0-4260-bb05-5f313d67c584',
  'x-ms-correlation-request-id': '4a2b4a12-08a0-4260-bb05-5f313d67c584',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125328Z:4a2b4a12-08a0-4260-bb05-5f313d67c584',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 12:53:28 GMT',
  connection: 'close',
  'content-length': '166' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"name\": \"test-nsg\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg\",\r\n  \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"27ffbcd1-1f30-4b61-a43a-8ec49ff18998\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5142',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '368d791e-c7c9-4e6e-8f98-826fb92b5db6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/368d791e-c7c9-4e6e-8f98-826fb92b5db6?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '20bb847f-5430-46d8-ad13-58e635acbf94',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125334Z:20bb847f-5430-46d8-ad13-58e635acbf94',
  date: 'Tue, 17 May 2016 12:53:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"name\": \"test-nsg\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg\",\r\n  \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"27ffbcd1-1f30-4b61-a43a-8ec49ff18998\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"67d9441b-93c6-42e9-9a82-01d3bad5ac31\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5142',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '368d791e-c7c9-4e6e-8f98-826fb92b5db6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/368d791e-c7c9-4e6e-8f98-826fb92b5db6?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '20bb847f-5430-46d8-ad13-58e635acbf94',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125334Z:20bb847f-5430-46d8-ad13-58e635acbf94',
  date: 'Tue, 17 May 2016 12:53:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/368d791e-c7c9-4e6e-8f98-826fb92b5db6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ac3d702-0a7b-4fb8-bd36-939b624b8cff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '95b6bcac-c6fe-4f53-8300-bf6f33fb67e2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125405Z:95b6bcac-c6fe-4f53-8300-bf6f33fb67e2',
  date: 'Tue, 17 May 2016 12:54:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/368d791e-c7c9-4e6e-8f98-826fb92b5db6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ac3d702-0a7b-4fb8-bd36-939b624b8cff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '95b6bcac-c6fe-4f53-8300-bf6f33fb67e2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125405Z:95b6bcac-c6fe-4f53-8300-bf6f33fb67e2',
  date: 'Tue, 17 May 2016 12:54:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-nsg\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg\",\r\n  \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"27ffbcd1-1f30-4b61-a43a-8ec49ff18998\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5149',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"94540e2e-f99e-4605-8793-7716e3907569"',
  'x-ms-request-id': 'c6f69c43-342f-403e-9356-82b8e871e5c5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'ea9faacb-259d-4c04-9fef-014a80f5b45f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125406Z:ea9faacb-259d-4c04-9fef-014a80f5b45f',
  date: 'Tue, 17 May 2016 12:54:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-nsg\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg\",\r\n  \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"27ffbcd1-1f30-4b61-a43a-8ec49ff18998\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"94540e2e-f99e-4605-8793-7716e3907569\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5149',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"94540e2e-f99e-4605-8793-7716e3907569"',
  'x-ms-request-id': 'c6f69c43-342f-403e-9356-82b8e871e5c5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'ea9faacb-259d-4c04-9fef-014a80f5b45f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T125406Z:ea9faacb-259d-4c04-9fef-014a80f5b45f',
  date: 'Tue, 17 May 2016 12:54:06 GMT',
  connection: 'close' });
 return result; }]];