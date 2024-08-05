// 1. Using var, let, and const:
// Use `const` for values that won't change
const GAME_NAME = 'Epic Adventure';  // Constant for game name
const MAX_PLAYERS = 1000;            // Constant for maximum players

// Use `let` for values that can change
let newUsers = 0;                    // Number of new users
let usersOnline = 0;                 // Number of users online

// Use `var` (though less common in modern code, it's still good to know)
var totalUsers = 5000;               // Total number of users

// 2. Primitive Data Types:
// String
let gameName = 'Epic Adventure';    // Name of the game

// Number
let newUsersToday = 123;            // Number of new users today
let avgSessionTime = 15.5;          // Average session time in minutes

// Boolean
let isMaintenanceMode = false;      // Whether the game is in maintenance mode

// Null
let crashReport = null;             // Placeholder for crash reports (not available yet)

// Undefined
let nextUpdateTime;                 // Time for the next update (not set yet)

// 3. Complex Data Types:
// Object
let gameMetrics = {
    newUsersToday: 123,
    usersOnline: 456,
    totalUsers: 5000,
    twitchUsers: 350,
    avgSessionTime: 15.5,
    crashesToday: 2
};

// Array
let topPlayers = ['Player1', 'Player2', 'Player3']; // List of top players

// Function
function updateMetrics(newUsers, usersOnline, totalUsers, twitchUsers, avgSessionTime, crashesToday) {
    gameMetrics.newUsersToday = newUsers;
    gameMetrics.usersOnline = usersOnline;
    gameMetrics.totalUsers = totalUsers;
    gameMetrics.twitchUsers = twitchUsers;
    gameMetrics.avgSessionTime = avgSessionTime;
    gameMetrics.crashesToday = crashesToday;
}

// // Constants
// const GAME_NAME = 'Epic Adventure';
// const MAX_PLAYERS = 1000;

// // Variables
// let newUsersToday = 123;
// let usersOnline = 456;
// let totalUsers = 5000;
// let twitchUsers = 350;
// let avgSessionTime = 15.5;
// let crashesToday = 2;

// // Object to store game metrics
// let gameMetrics = {
//     newUsersToday,
//     usersOnline,
//     totalUsers,
//     twitchUsers,
//     avgSessionTime,
//     crashesToday
// };

// // Function to update metrics
// function updateMetrics(newUsers, usersOnline, totalUsers, twitchUsers, avgSessionTime, crashesToday) {
//     gameMetrics.newUsersToday = newUsers;
//     gameMetrics.usersOnline = usersOnline;
//     gameMetrics.totalUsers = totalUsers;
//     gameMetrics.twitchUsers = twitchUsers;
//     gameMetrics.avgSessionTime = avgSessionTime;
//     gameMetrics.crashesToday = crashesToday;
// }

// Example usage
console.log(`Game: ${GAME_NAME}`);
console.log(`Max Players: ${MAX_PLAYERS}`);
console.log(`New Users Today: ${gameMetrics.newUsersToday}`);
console.log(`Users Online: ${gameMetrics.usersOnline}`);
console.log(`Total Users: ${gameMetrics.totalUsers}`);
console.log(`Twitch Users: ${gameMetrics.twitchUsers}`);
console.log(`Average Session Time: ${gameMetrics.avgSessionTime} minutes`);
console.log(`Crashes Today: ${gameMetrics.crashesToday}`);

// Updating metrics
updateMetrics(150, 500, 5100, 400, 16, 3);
console.log(gameMetrics);
