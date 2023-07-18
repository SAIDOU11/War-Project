let deckId;
const cardContainer = document.getElementById("cards");
const newDectBtn = document.getElementById("new-deck");
const drawCards = document.getElementById("draw-cards");
let cardComputer;
let myCard;

function handleClick() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      deckId = data.deck_id;
      console.log(deckId);
    });
}

newDectBtn.addEventListener("click", handleClick);

drawCards.addEventListener("click", () => {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      cardComputer = data.cards[0].image;
      myCard = data.cards[1].image;
      cardContainer.children[0].innerHTML = `<img src=${cardComputer} class="card" />`;
      cardContainer.children[1].innerHTML = ` <img src=${myCard} class="card" />`;
    });
});

function cardValue(card1, card2) {
  const value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];

  for (let i = 0; i < value.length; i++) {
    console.log(Number(value[i]));
  }

  for (let card of value) {
    console.log(parseInt(card));
  }

  card1 = Number(value[card1]);
  card2 = Number(value[card2]);

  if (card1 > card2) {
    console.log(card1);
    console.log("The computer wins!");
  } else if (card2 > card1) {
    console.log("You won!");
  } else {
    console.log("It's a tie!");
  }
}

cardValue(9, 3);
