// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: [],
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPCreate/providers/microsoft.network/trafficmanagerprofiles?api-version=2015-04-28-preview')
  .reply(200, "{\"values\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpcreate\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTrafficMP\",\"name\":\"xplatTestTrafficMP\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpdns\",\"fqdn\":\"xplattmpdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}]}", { 'cache-control': 'private',
  'content-length': '567',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'd2f0f213-8ec8-4dac-99c8-984bbe2cb2d9',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10797',
  'x-ms-correlation-request-id': '5825edd7-e655-4818-bf99-ab6dc1f6c4e3',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083049Z:5825edd7-e655-4818-bf99-ab6dc1f6c4e3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:30:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPCreate/providers/microsoft.network/trafficmanagerprofiles?api-version=2015-04-28-preview')
  .reply(200, "{\"values\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpcreate\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTrafficMP\",\"name\":\"xplatTestTrafficMP\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"xplattmpdns\",\"fqdn\":\"xplattmpdns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}]}", { 'cache-control': 'private',
  'content-length': '567',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'd2f0f213-8ec8-4dac-99c8-984bbe2cb2d9',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10797',
  'x-ms-correlation-request-id': '5825edd7-e655-4818-bf99-ab6dc1f6c4e3',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T083049Z:5825edd7-e655-4818-bf99-ab6dc1f6c4e3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 08:30:48 GMT',
  connection: 'close' });
 return result; }]];