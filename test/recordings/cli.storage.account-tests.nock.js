// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/storage/xcli1',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': 'e9306178e086273eaa855a28396ee8ee',
  date: 'Thu, 31 Oct 2013 18:04:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/operations/e9306178e086273eaa855a28396ee8ee')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>e9306178-e086-273e-aa85-5a28396ee8ee</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': '1048aedc0a6a285ca3e5b65d2b916a2e',
  date: 'Thu, 31 Oct 2013 18:05:09 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/affinitygroups', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/affinitygroup/xcli1',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': 'ecf12d220c852c818f423f4f0e5cc9f1',
  date: 'Thu, 31 Oct 2013 18:05:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/storage/xcli2',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': 'f08e14613f9322fabd762f347c0d5c9d',
  date: 'Thu, 31 Oct 2013 18:05:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/operations/f08e14613f9322fabd762f347c0d5c9d')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>f08e1461-3f93-22fa-bd76-2f347c0d5c9d</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': '24f3404118e02241aa08e21e30a29162',
  date: 'Thu, 31 Oct 2013 18:05:47 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices')
  .reply(200, "<StorageServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/aogail2</Url><ServiceName>aogail2</ServiceName><StorageServiceProperties><Description/><Location>South Central US</Location><Label>YW9nYWlsMg==</Label><Status>Created</Status><Endpoints><Endpoint>http://aogail2.blob.core.windows.net/</Endpoint><Endpoint>http://aogail2.queue.core.windows.net/</Endpoint><Endpoint>http://aogail2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>South Central US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>North Central US</GeoSecondaryRegion><StatusOfSecondary/><CreationTime>2012-05-01T21:56:19Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/azurejavasdk</Url><ServiceName>azurejavasdk</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>YXp1cmVqYXZhc2Rr</Label><Status>Created</Status><Endpoints><Endpoint>http://azurejavasdk.blob.core.windows.net/</Endpoint><Endpoint>http://azurejavasdk.queue.core.windows.net/</Endpoint><Endpoint>http://azurejavasdk.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary/><CreationTime>2012-09-10T23:35:55Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/azurejavasdkwin2k12</Url><ServiceName>azurejavasdkwin2k12</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>azuresdkci</AffinityGroup><Label>YXp1cmVqYXZhc2Rrd2luMmsxMg==</Label><Status>Created</Status><Endpoints><Endpoint>http://azurejavasdkwin2k12.blob.core.windows.net/</Endpoint><Endpoint>http://azurejavasdkwin2k12.queue.core.windows.net/</Endpoint><Endpoint>http://azurejavasdkwin2k12.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>East US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2013-01-22T18:18:06Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/azurejavasdkwin2k12m</Url><ServiceName>azurejavasdkwin2k12m</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>YXp1cmVqYXZhc2Rrd2luMmsxMm0=</Label><Status>Created</Status><Endpoints><Endpoint>http://azurejavasdkwin2k12m.blob.core.windows.net/</Endpoint><Endpoint>http://azurejavasdkwin2k12m.queue.core.windows.net/</Endpoint><Endpoint>http://azurejavasdkwin2k12m.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary/><CreationTime>2013-01-22T19:05:38Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/azuresdkci</Url><ServiceName>azuresdkci</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>North Central US</Location><Label>YXp1cmVzZGtjaQ==</Label><Status>Created</Status><Endpoints><Endpoint>http://azuresdkci.blob.core.windows.net/</Endpoint><Endpoint>http://azuresdkci.queue.core.windows.net/</Endpoint><Endpoint>http://azuresdkci.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>North Central US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>South Central US</GeoSecondaryRegion><StatusOfSecondary/><CreationTime>2013-05-08T18:30:00Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/azurestoragemediaservice</Url><ServiceName>azurestoragemediaservice</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>YXp1cmVzdG9yYWdlbWVkaWFzZXJ2aWNl</Label><Status>Created</Status><Endpoints><Endpoint>http://azurestoragemediaservice.blob.core.windows.net/</Endpoint><Endpoint>http://azurestoragemediaservice.queue.core.windows.net/</Endpoint><Endpoint>http://azurestoragemediaservice.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary/><CreationTime>2013-02-27T20:18:04Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/cstorage1</Url><ServiceName>cstorage1</ServiceName><StorageServiceProperties><Description/><Location>East US</Location><Label>Y3N0b3JhZ2Ux</Label><Status>Created</Status><Endpoints><Endpoint>http://cstorage1.blob.core.windows.net/</Endpoint><Endpoint>http://cstorage1.queue.core.windows.net/</Endpoint><Endpoint>http://cstorage1.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>East US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>West US</GeoSecondaryRegion><StatusOfSecondary/><CreationTime>2013-10-28T17:56:24Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/gongchen1</Url><ServiceName>gongchen1</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>Z29uZ2NoZW4x</Label><Status>Created</Status><Endpoints><Endpoint>http://gongchen1.blob.core.windows.net/</Endpoint><Endpoint>http://gongchen1.queue.core.windows.net/</Endpoint><Endpoint>http://gongchen1.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary/><CreationTime>2012-06-18T18:16:19Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/gongchen2</Url><ServiceName>gongchen2</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>Z29uZ2NoZW4y</Label><Status>Created</Status><Endpoints><Endpoint>http://gongchen2.blob.core.windows.net/</Endpoint><Endpoint>http://gongchen2.queue.core.windows.net/</Endpoint><Endpoint>http://gongchen2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary/><CreationTime>2012-08-06T18:30:50Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/javasdkci</Url><ServiceName>javasdkci</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>javasdkciag</AffinityGroup><Label>amF2YXNka2Np</Label><Status>Created</Status><Endpoints><Endpoint>http://javasdkci.blob.core.windows.net/</Endpoint><Endpoint>http://javasdkci.queue.core.windows.net/</Endpoint><Endpoint>http://javasdkci.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2013-03-12T00:25:38Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/mediasvcazurejavasdkci</Url><ServiceName>mediasvcazurejavasdkci</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>bWVkaWFzdmNhenVyZWphdmFzZGtjaQ==</Label><Status>Created</Status><Endpoints><Endpoint>http://mediasvcazurejavasdkci.blob.core.windows.net/</Endpoint><Endpoint>http://mediasvcazurejavasdkci.queue.core.windows.net/</Endpoint><Endpoint>http://mediasvcazurejavasdkci.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary/><CreationTime>2012-10-02T19:16:57Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/portalvhds2wdcfvkv5phc9</Url><ServiceName>portalvhds2wdcfvkv5phc9</ServiceName><StorageServiceProperties><Description>Implicitly created storage service</Description><Location>West US</Location><Label>cG9ydGFsdmhkczJ3ZGNmdmt2NXBoYzk=</Label><Status>Created</Status><Endpoints><Endpoint>http://portalvhds2wdcfvkv5phc9.blob.core.windows.net/</Endpoint><Endpoint>http://portalvhds2wdcfvkv5phc9.queue.core.windows.net/</Endpoint><Endpoint>http://portalvhds2wdcfvkv5phc9.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>East US</GeoSecondaryRegion><StatusOfSecondary/><CreationTime>2012-06-25T17:50:15Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/portalvhds3285b8sydlcm1</Url><ServiceName>portalvhds3285b8sydlcm1</ServiceName><StorageServiceProperties><Description>Implicitly created storage service</Description><Location>East US</Location><Label>cG9ydGFsdmhkczMyODViOHN5ZGxjbTE=</Label><Status>Created</Status><Endpoints><Endpoint>http://portalvhds3285b8sydlcm1.blob.core.windows.net/</Endpoint><Endpoint>http://portalvhds3285b8sydlcm1.queue.core.windows.net/</Endpoint><Endpoint>http://portalvhds3285b8sydlcm1.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>East US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>West US</GeoSecondaryRegion><StatusOfSecondary/><CreationTime>2012-10-15T12:23:53Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/teststorageko2s3beu</Url><ServiceName>teststorageko2s3beu</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHN0b3JhZ2VrbzJzM2JldQ==</Label><Status>Created</Status><Endpoints><Endpoint>http://teststorageko2s3beu.blob.core.windows.net/</Endpoint><Endpoint>http://teststorageko2s3beu.queue.core.windows.net/</Endpoint><Endpoint>http://teststorageko2s3beu.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2013-10-14T18:53:50Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/testvmnew</Url><ServiceName>testvmnew</ServiceName><StorageServiceProperties><Description/><Location>West US</Location><Label>dGVzdHZtbmV3</Label><Status>Created</Status><Endpoints><Endpoint>http://testvmnew.blob.core.windows.net/</Endpoint><Endpoint>http://testvmnew.queue.core.windows.net/</Endpoint><Endpoint>http://testvmnew.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2013-10-30T17:46:44Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli1</Url><ServiceName>xcli1</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><Location>West Europe</Location><Label>eGNsaTE=</Label><Status>Created</Status><Endpoints><Endpoint>http://xcli1.blob.core.windows.net/</Endpoint><Endpoint>http://xcli1.queue.core.windows.net/</Endpoint><Endpoint>http://xcli1.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West Europe</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2013-10-31T18:04:36Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2</Url><ServiceName>xcli2</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>xcli1</AffinityGroup><Label>eGNsaTI=</Label><Status>Created</Status><Endpoints><Endpoint>http://xcli2.blob.core.windows.net/</Endpoint><Endpoint>http://xcli2.queue.core.windows.net/</Endpoint><Endpoint>http://xcli2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West Europe</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2013-10-31T18:05:15Z</CreationTime></StorageServiceProperties><ExtendedProperties/></StorageService></StorageServices>", { 'cache-control': 'no-cache',
  'content-length': '14278',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': '883149926ae62640849fd50aa253ab7d',
  date: 'Thu, 31 Oct 2013 18:05:51 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': 'c0afb9c7bab02b2dac530de8e31a471c',
  date: 'Thu, 31 Oct 2013 18:05:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2</Url><ServiceName>xcli2</ServiceName><StorageServiceProperties><Description/><AffinityGroup>xcli1</AffinityGroup><Label>dGVzdA==</Label><Status>Created</Status><Endpoints><Endpoint>http://xcli2.blob.core.windows.net/</Endpoint><Endpoint>http://xcli2.queue.core.windows.net/</Endpoint><Endpoint>http://xcli2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>false</GeoReplicationEnabled><GeoPrimaryRegion>West Europe</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2013-10-31T18:05:15Z</CreationTime></StorageServiceProperties><ExtendedProperties/><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '923',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': 'a2d0899e907d28c696ed38f9caf864de',
  date: 'Thu, 31 Oct 2013 18:05:55 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2/keys')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2</Url><StorageServiceKeys><Primary>WxnjJQe6TpgnDoLjdFBLgkKjzBJrBJKzQubkr2I9TVUw5DBkQxpG7M9MhLp7+fu5ZJK7ywbSRHyJmyz83fZYpQ==</Primary><Secondary>H71rfB7jZqnuExqnF9aFzIAwHFblHEWry2aMTTKjTH8qRU4Sd+AWAnp9GJ8wEOFjPCX4xTC2DkyqzMVYNn98Xw==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '508',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': '71c08f9d903d276997a8365403401b9c',
  date: 'Thu, 31 Oct 2013 18:05:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2/keys?action=regenerate', '*')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2</Url><StorageServiceKeys><Primary>PO5B+0a+PQ0DrvwSRq5icr8vNY/DareTg1zp103bou8JiGAy1b4ebLorj/ry02miTVjhzGMxNtIJe+vcizMUvQ==</Primary><Secondary>H71rfB7jZqnuExqnF9aFzIAwHFblHEWry2aMTTKjTH8qRU4Sd+AWAnp9GJ8wEOFjPCX4xTC2DkyqzMVYNn98Xw==</Secondary></StorageServiceKeys></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '508',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': '687fe1b9f3e22e2492fa3612c706d34d',
  date: 'Thu, 31 Oct 2013 18:06:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli2')
  .reply(200, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': '92e3921cc0b624689134dc294c06a60f',
  date: 'Thu, 31 Oct 2013 18:06:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/xcli1')
  .reply(200, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.19 (rd_rdfe_stable.131030-2145) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-ms-request-id': 'e8822ac4cd252ab0b7c032a92204d3c1',
  date: 'Thu, 31 Oct 2013 18:06:11 GMT' });
 return result; }]];