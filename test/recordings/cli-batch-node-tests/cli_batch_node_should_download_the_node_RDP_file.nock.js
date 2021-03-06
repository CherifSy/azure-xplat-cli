// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-1650185656_1-20160422t053728z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-22T05:54:18.9370641Z\",\"lastBootTime\":\"2016-04-22T05:54:18.8040259Z\",\"allocationTime\":\"2016-04-22T05:37:28.0108159Z\",\"ipAddress\":\"10.80.34.68\",\"affinityId\":\"TVM:tvm-1650185656_1-20160422t053728z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5d8be82e-f4c7-448d-8e21-353062f5bbfb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '75a212bb-f572-4f59-a152-89c662806bdd',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 06:11:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-1650185656_1-20160422t053728z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-22T05:54:18.9370641Z\",\"lastBootTime\":\"2016-04-22T05:54:18.8040259Z\",\"allocationTime\":\"2016-04-22T05:37:28.0108159Z\",\"ipAddress\":\"10.80.34.68\",\"affinityId\":\"TVM:tvm-1650185656_1-20160422t053728z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5d8be82e-f4c7-448d-8e21-353062f5bbfb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '75a212bb-f572-4f59-a152-89c662806bdd',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 06:11:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z/rdp?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "full address:s:13.91.56.192\r\nLoadBalanceInfo:s:Cookie: mstshash=TVM#TVM_IN_0", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '21112e3a-aaf7-415f-a12d-c31937e8bce2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '61c53a16-d90f-4194-99ff-8be471d4715e',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 06:11:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z/rdp?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "full address:s:13.91.56.192\r\nLoadBalanceInfo:s:Cookie: mstshash=TVM#TVM_IN_0", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '21112e3a-aaf7-415f-a12d-c31937e8bce2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '61c53a16-d90f-4194-99ff-8be471d4715e',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 06:11:56 GMT',
  connection: 'close' });
 return result; }]];