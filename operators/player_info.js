// Example list of games with details
const games = [
    {
        name: 'Epic Adventure',
        score: 87,
        achievements: 25,
        records: {
            highScore: 5000,
            fastestCompletion: '2h 15m'
        }
    },
    {
        name: 'Puzzle Master',
        score: 92,
        achievements: 18,
        records: {
            highScore: 6500,
            fastestCompletion: '1h 30m'
        }
    },
    {
        name: 'Racing Rivals',
        score: 75,
        achievements: 30,
        records: {
            highScore: 3000,
            fastestCompletion: '1h 45m'
        }
    }
];

// Calculate the average score of all games
let totalScore = 0;
games.forEach(game => {
    totalScore += game.score;
});
let averageScore = totalScore / games.length;
console.log(`Average Score: ${averageScore}`);

// Check if any game has a score greater than 80
let highScoringGames = games.filter(game => game.score > 80);
console.log(`Games with score greater than 80: ${highScoringGames.map(game => game.name).join(', ')}`);

// Check if any game has both achievements greater than 20 and a high score greater than 6000
let specialGames = games.filter(game => game.achievements > 20 && game.records.highScore > 600);
console.log(`Games with achievements > 20 and high score > 600: ${specialGames.map(game => game.name).join(', ')}`);

// Example of bitwise AND and OR operations with game achievements
let achievements1 = games[0].achievements; // 25 (in binary: 11001)
let achievements2 = games[1].achievements; // 18 (in binary: 10010)

let andResult = achievements1 & achievements2; // Bitwise AND
let orResult = achievements1 | achievements2; // Bitwise OR

console.log(`Bitwise AND result: ${andResult}`);
console.log(`Bitwise OR result: ${orResult}`);

// Increment the score of the first game
games[0].score += 10; // Adding 10 to the current score
console.log(`Updated Score for ${games[0].name}: ${games[0].score}`);

// Assign new achievements using the shorthand operator
let newAchievements = 5;
games[1].achievements += newAchievements;
console.log(`Updated Achievements for ${games[1].name}: ${games[1].achievements}`);

// Determine if the player’s score in 'Puzzle Master' is above average
let playerGame = games.find(game => game.name === 'Puzzle Master');
let isAboveAverage = playerGame.score > averageScore ? 'above' : 'below';
console.log(`Player's score in 'Puzzle Master' is ${isAboveAverage} average.`);
