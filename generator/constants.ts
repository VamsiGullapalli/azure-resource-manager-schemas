import os from 'os';
import path from 'path';

const generatorRoot = path.resolve(__dirname, '../');

const specsRepoPath = path.join(os.tmpdir(), 'schm_azspc');
const specsRepoUri = 'https://github.com/azure/azure-rest-api-specs';
const specsRepoCommitHash = 'origin/master';

const autoRestVerboseOutput = false;

const schemasBaseUri = 'https://schema.management.azure.com/schemas';
const schemasBasePath = path.join(generatorRoot, 'schemas');
const generatedSchemasUri = `${schemasBaseUri}/2019-04-01/autogeneratedResources.json`;
const generatedSchemasPath = path.join(schemasBasePath, '2019-04-01/autogeneratedResources.json');
const generatedSchemasTemplatePath = path.join(__dirname, 'resources/autogeneratedResources_template.json');

// Run "npm run list-basepaths" to discover all the valid readme files to add to this list
const whitelist  = [
    'sqlvirtualmachine/resource-manager',
    'machinelearningcompute/resource-manager',
    'iotspaces/resource-manager',
    'botservice/resource-manager',
    'databox/resource-manager',
    'windowsiot/resource-manager',
    'databricks/resource-manager',
    'storagesync/resource-manager',
    'devspaces/resource-manager',
    'policyinsights/resource-manager',
    'servicefabricmesh/resource-manager',
    'labservices/resource-manager',
    'EnterpriseKnowledgeGraph/resource-manager',
    'edgegateway/resource-manager',
    'portal/resource-manager',
    'cosmos-db/resource-manager',
    'servicefabric/resource-manager',
];

// paths in this list won't even appear in list-basepaths
const blacklist = [
    'azsadmin/resource-manager/azurebridge',
    'azsadmin/resource-manager/backup',
    'azsadmin/resource-manager/commerce',
    'azsadmin/resource-manager/compute',
    'azsadmin/resource-manager/fabric',
    'azsadmin/resource-manager/gallery',
    'azsadmin/resource-manager/infrastructureinsights',
    'azsadmin/resource-manager/keyvault',
    'azsadmin/resource-manager/network',
    'azsadmin/resource-manager/storage',
    'azsadmin/resource-manager/subscriptions',
    'azsadmin/resource-manager/update',
    'azsadmin/resource-manager/user-subscriptions',
];

export {
    specsRepoPath,
    specsRepoUri,
    specsRepoCommitHash,

    autoRestVerboseOutput,

    schemasBaseUri,
    schemasBasePath,
    generatedSchemasUri,
    generatedSchemasPath,
    generatedSchemasTemplatePath,

    whitelist,
    blacklist,
}