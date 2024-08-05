// Example data for developer settings
const developerSettings = {
    gameClients: [
        { name: 'Epic Adventure', clientId: 'ea123', buildCount: 5, version: '1.2.3', status: 'active' },
        { name: 'Puzzle Master', clientId: 'pm456', buildCount: 3, version: '2.1.0', status: 'inactive' }
    ],
    gameServers: [
        { serverId: 'server1', location: 'US-East', status: 'online' },
        { serverId: 'server2', location: 'EU-West', status: 'offline' }
    ],
    services: [
        { serviceName: 'User Authentication', status: 'operational' },
        { serviceName: 'Leaderboard Service', status: 'maintenance' }
    ],
    apiKeys: [
        { keyId: 'api123', usageLimit: 1000, expires: '2024-12-31' },
        { keyId: 'api456', usageLimit: 500, expires: '2024-06-30' }
    ],
    oauthApps: [
        { appId: 'oauth1', appName: 'Social Login', permissions: ['read', 'write'] },
        { appId: 'oauth2', appName: 'Data Access', permissions: ['read'] }
    ]
};


// Check the status of each game client
developerSettings.gameClients.forEach(client => {
    if (client.status === 'active') {
        console.log(`${client.name} is active.`);
    } else if (client.status === 'inactive') {
        console.log(`${client.name} is inactive.`);
    } else {
        console.log(`${client.name} has an unknown status.`);
    }
});

// Check the status of each game server using switch
developerSettings.gameServers.forEach(server => {
    switch (server.status) {
        case 'online':
            console.log(`Server ${server.serverId} is online.`);
            break;
        case 'offline':
            console.log(`Server ${server.serverId} is offline.`);
            break;
        default:
            console.log(`Server ${server.serverId} status is unknown.`);
            break;
    }
});

// List all game clients using a for loop
console.log('Game Clients:');
for (let i = 0; i < developerSettings.gameClients.length; i++) {
    const client = developerSettings.gameClients[i];
    console.log(`Name: ${client.name}, Client ID: ${client.clientId}, Status: ${client.status}`);
}


// Display all services using a while loop
console.log('Services:');
let index = 0;
while (index < developerSettings.services.length) {
    const service = developerSettings.services[index];
    console.log(`Service: ${service.serviceName}, Status: ${service.status}`);
    index++;
}

// Display API Keys using a do...while loop
console.log('API Keys:');
let apiIndex = 0;
do {
    const apiKey = developerSettings.apiKeys[apiIndex];
    console.log(`Key ID: ${apiKey.keyId}, Usage Limit: ${apiKey.usageLimit}, Expires: ${apiKey.expires}`);
    apiIndex++;
} while (apiIndex < developerSettings.apiKeys.length);


// List all properties of the OAuth apps using for...in
console.log('OAuth Apps:');
for (const appIndex in developerSettings.oauthApps) {
    const app = developerSettings.oauthApps[appIndex];
    console.log(`App ID: ${app.appId}, App Name: ${app.appName}, Permissions: ${app.permissions.join(', ')}`);
}

// Display the names of all game clients using for...of
console.log('Game Client Names:');
for (const client of developerSettings.gameClients) {
    console.log(`Name: ${client.name}`);
}


