// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Authorization/providerOperations/InvalidOperation?api-version=2015-07-01-preview&$expand=resourceTypes')
  .reply(404, "{\"error\":{\"code\":\"ProviderNotFound\",\"message\":\"Provider InvalidOperation not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '86',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a05a19f1-a943-417d-a5fe-3fa7bbbba862',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14996',
  'x-ms-correlation-request-id': 'dcd40f6e-4499-4a2d-83b2-d4b691239217',
  'x-ms-routing-request-id': 'WESTUS:20150821T215040Z:dcd40f6e-4499-4a2d-83b2-d4b691239217',
  date: 'Fri, 21 Aug 2015 21:50:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Authorization/providerOperations/InvalidOperation?api-version=2015-07-01-preview&$expand=resourceTypes')
  .reply(404, "{\"error\":{\"code\":\"ProviderNotFound\",\"message\":\"Provider InvalidOperation not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '86',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a05a19f1-a943-417d-a5fe-3fa7bbbba862',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14996',
  'x-ms-correlation-request-id': 'dcd40f6e-4499-4a2d-83b2-d4b691239217',
  'x-ms-routing-request-id': 'WESTUS:20150821T215040Z:dcd40f6e-4499-4a2d-83b2-d4b691239217',
  date: 'Fri, 21 Aug 2015 21:50:39 GMT',
  connection: 'close' });
 return result; }]];