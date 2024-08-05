// Boolean Conditions
let runsScored1 = 75;
let hasScoredMoreThanFifty = runsScored1 > 50;
console.log('Has scored more than 50 runs:', hasScoredMoreThanFifty); // Output: true

// Comparison Conditions
let player1Score = 85;
let player2Score = 90;
let isPlayer1Better = player1Score > player2Score;
console.log('Player 1 scored more than Player 2:', isPlayer1Better); // Output: false

// Logical Conditions
let isCaptain = false;
let runsScored2 = 65;
let isEligibleForManOfTheMatch = isCaptain || (runsScored2 > 50);
console.log('Is eligible for Man of the Match:', isEligibleForManOfTheMatch); // Output: true

// Ternary Operator
let runsScored3 = 90;
let bonus = runsScored3 > 50 ? 'Bonus awarded' : 'No bonus';
console.log(bonus); // Output: Bonus awarded

// Nested Conditions
let age = 25;
let runsScored4 = 60;

if (age < 30) {
    if (runsScored4 > 50) {
        console.log('Player qualifies for the team.');
    } else {
        console.log('Player does not qualify due to insufficient runs.');
    }
} else {
    console.log('Player does not qualify due to age.');
}
// Output: Player qualifies for the team.

// Switch Statement
let rating = 'Excellent';

switch (rating) {
    case 'Excellent':
        console.log('Award: Man of the Match');
        break;
    case 'Good':
        console.log('Award: Best Player of the Match');
        break;
    case 'Average':
        console.log('Award: Participation Award');
        break;
    default:
        console.log('No award');
}
// Output: Award: Man of the Match
