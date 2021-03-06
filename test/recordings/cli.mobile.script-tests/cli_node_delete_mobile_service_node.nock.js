// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestnode757mobileservice')
  .reply(200, "<Application xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestnode757mobileservice</Name><Label>clitestnode757</Label><Description>clitestnode757</Description><Uri>https://management.core.windows.net/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestnode757mobileservice</Uri><State>Healthy</State><InternalResources><InternalResource><LogicalName>ZumoMobileService</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.MobileServices.MobileService</Type><Name>clitestnode757</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/clitestnode757</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlDatabase_4228487cad404dcfb919db3ad123e0d8</LogicalName><State>Provisioned</State><Type>Microsoft.WindowsAzure.SQLAzure.DataBase</Type><Name>clitestnode757_db</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/g8sahnqlei/databases/clitestnode757_db</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlServer_2e031754a4b7453e9e00407cf165f2ab</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.SQLAzure.Server</Type><Name>g8sahnqlei</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/g8sahnqlei</SelfLinkUri><FailureCode/></InternalResource></InternalResources><ExternalResources/></Application>", { 'cache-control': 'no-cache',
  'content-length': '1588',
  'content-type': 'application/xml; charset=utf-8',
  etag: '4eb487def22049639a4df12d05d30b26:0001',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '924c28743c0e8e51b51ad3528aa27a5b',
  date: 'Wed, 08 Apr 2015 01:30:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode757?deletedata=true&deleteServiceBusNamespace=true')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '255d2b8236b0823f9bd97f63dda81cb3',
  date: 'Wed, 08 Apr 2015 01:30:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/g8sahnqlei')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '3ae275488e0d88168ebeefcd7c918dfc',
  date: 'Wed, 08 Apr 2015 01:30:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestnode757mobileservice')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'd554f7c55a988457b4834d89e238fd8e',
  date: 'Wed, 08 Apr 2015 01:30:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/d554f7c55a988457b4834d89e238fd8e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d554f7c5-5a98-8457-b483-4d89e238fd8e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '8a5a053524cf8deb8fd84f73151dd287',
  date: 'Wed, 08 Apr 2015 01:30:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/d554f7c55a988457b4834d89e238fd8e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d554f7c5-5a98-8457-b483-4d89e238fd8e</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'fd62536d7de485d8af458f4a90596084',
  date: 'Wed, 08 Apr 2015 01:30:13 GMT' });
 return result; }]];