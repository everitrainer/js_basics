// Example data
const users = [
    {
        userId: 1,
        username: 'GamerOne',
        games: [
            { gameId: 101, name: 'Epic Adventure', playtime: 120 },
            { gameId: 102, name: 'Puzzle Mania', playtime: 45 }
        ],
        friends: [2, 3],
        achievements: [
            { gameId: 101, achievement: 'First Blood' },
            { gameId: 102, achievement: 'Puzzle Master' }
        ]
    },
    {
        userId: 2,
        username: 'GamerTwo',
        games: [
            { gameId: 103, name: 'Space Invaders', playtime: 75 }
        ],
        friends: [1],
        achievements: [
            { gameId: 103, achievement: 'High Score' }
        ]
    },
    {
        userId: 3,
        username: 'GamerThree',
        games: [
            { gameId: 104, name: 'Combat Fury', playtime: 90 }
        ],
        friends: [1],
        achievements: [
            { gameId: 104, achievement: 'Victory' }
        ]
    }
];

// Object Creation and Manipulation
const newUser = {
    userId: 4,
    username: 'GamerFour',
    games: [
        { gameId: 105, name: 'Mystery Solver', playtime: 60 }
    ],
    friends: [1, 2],
    achievements: [
        { gameId: 105, achievement: 'Mystery Solver' }
    ]
};

newUser.games.push({ gameId: 106, name: 'Adventure Quest', playtime: 30 });
console.log('New User:', newUser);

users[0].games[0].playtime = 130;
console.log('Updated User:', users[0]);

// Array Methods
users[0].friends.push(4);
console.log('GamerOne Friends:', users[0].friends);

users[0].friends.pop();
console.log('GamerOne Friends after pop:', users[0].friends);

users[1].games.unshift({ gameId: 107, name: 'War Heroes', playtime: 40 });
console.log('GamerTwo Games:', users[1].games);

users[1].games.shift();
console.log('GamerTwo Games after shift:', users[1].games);

users[2].games.splice(0, 1);
console.log('GamerThree Games after splice:', users[2].games);

users[2].games.splice(0, 0, { gameId: 108, name: 'Strategy Master', playtime: 50 });
console.log('GamerThree Games after adding:', users[2].games);

const gamerOneAchievements = users[0].achievements.slice(0, 1);
console.log('GamerOne Achievements Slice:', gamerOneAchievements);

users.forEach(user => console.log(user.username));

const usernames = users.map(user => user.username);
console.log('Usernames:', usernames);

const activeUsers = users.filter(user => user.games.reduce((total, game) => total + game.playtime, 0) > 60);
console.log('Active Users:', activeUsers);

const totalPlaytime = users.reduce((total, user) => total + user.games.reduce((subTotal, game) => subTotal + game.playtime, 0), 0);
console.log('Total Playtime:', totalPlaytime);

// Destructuring
const { username, games, achievements } = users[0];
console.log('Destructured User:', { username, games, achievements });

const [firstGame, secondGame] = users[0].games;
console.log('Destructured Games:', { firstGame, secondGame });

const { username: userName, games: userGames } = users[1];
const [{ name: firstGameName }] = userGames;
console.log('Destructured Nested:', { userName, firstGameName });
