const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// function printGoals(...players) {
//   console.log(`${players.length} goals were scored.`);
// }

// team1 < team2 && console.log("Team 1 is more likely to win.");
// team1 > team2 && console.log("Team 2 is more likely to win.");

//Coding Challenge # 2:
//MY SOLUTION
// 1.  Loop over the game.scored array and print each player name to the console along with goal Number.
for (const [i, element] of game.scored.entries()) {
  console.log(`${element} scored goal number: ${i + 1}.`);
}
// 2.  Use a Loop to calculate the average odd and log it to the console.
let tally = [...Object.values(game.odds)];
function avg(x) {
  return Math.round(
    x.reduce((a, b) => {
      return a + b;
    }, 0) / x.length
  );
}
console.log(`The average odd is ${avg(tally)}.`);

//3.  Print the 3 odds to the console.
//Team 1:
for (const x in game.odds) {
  if (game[x]) {
    console.log(`Odd of victory for ${game[x]}: ${game.odds[x]}.`);
  } else {
    console.log(`Odd of draw: ${game.odds[x]}`);
  }
}

//4. Create an Object; 'scorers' containing names of players as properties and number of goals as the value.
const scorers = {};
for (const x of Object.values(game.scored)) {
  x in scorers ? scorers[x]++ : (scorers[x] = 1);
}

//INSTRUCTOR SOLUTION:
// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
//const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
