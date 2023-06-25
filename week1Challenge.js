// Arrange a deck of cards in ascending order

let deck = [];
const ranks = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

let deckDiv = document.getElementById("deck");

//////////// Using a FOR LOOP ///////

// for (let i = 0; i < ranks.length; i++) {
//   let rankDiv = document.createElement("div");

//   deckDiv.appendChild(rankDiv);
//   for (let j = 0; j < suits.length; j++) {
//     let card = `${ranks[i]} of ${suits[j]}`;
//     deck.push(card);
//     rankDiv.innerHTML += `<p>${card}</p>`;
//   }
// }

// (Personal) Notes: The outer loop runs for each rank in the "ranks" array. The inner loops runs for each
// suit in the "suits" array. These lines  let card = `${ranks[i]} of ${suits[j]}` and deck.push(card);
// combines the current rank and suit to form a new "card" string "Ace of Spades", "3 of Hearts".
// Then adds this string to the 'deck' array. Once the inner loop executes all suits, the outer loop
// moves to the next rank and the process repeats.

// Without the added CSS

for (let i = 0; i < ranks.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    deck.push(`${ranks[i]} of ${suits[j]}`);
  }
}

for (let i = 0; i < deck.length; i++) {
  console.log(deck[i]);
}

////////// Using .map() ///////////

ranks.map((rank) => {
  let rankDiv = document.createElement("div");
  deckDiv.appendChild(rankDiv);

  suits.map((suit) => {
    let card = `${rank} of ${suit}`;
    deck.push(card);
    rankDiv.innerHTML += `<p>${card}</p>`;
  });
});

// (Personal) Note: Could also use the .forEach method. The difference being a .forEach is performing an operation
// that doesn't produce a new array, like .map()
