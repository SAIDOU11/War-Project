let deckId;
const cardContainer = document.getElementById("cards");
const newDectBtn = document.getElementById("new-deck");
const drawCardsBtn = document.getElementById("draw-cards");
const header = document.getElementById("header");
const remainingText = document.getElementById("remaining");
// let cardComputer;
// let myCard;
const computerScoreEl = document.getElementById("computer-score");
const myScoreEl = document.getElementById("my-score");
let computerScore = 0;
let myScore = 0;

async function handleClick() {
  const res = await fetch(
    "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
  );
  const data = await res.json();
  remainingText.innerHTML = `Remaining cards: ${data.remaining}`;
  console.log(data);
  deckId = data.deck_id;
}

newDectBtn.addEventListener("click", handleClick);

drawCardsBtn.addEventListener("click", async () => {
  const response = await fetch(
    `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`
  );
  const data = await response.json();
  console.log(data);
  remainingText.innerHTML = `Remaining cards: ${data.remaining}`;

  cardContainer.children[0].innerHTML = `<img src=${data.cards[0].image} class="card" />`;
  cardContainer.children[1].innerHTML = ` <img src=${data.cards[1].image} class="card" />`;

  const winnerText = determineWinningCard(data.cards[0], data.cards[1]);
  header.textContent = winnerText;

  if (data.remaining === 0) {
    drawCardsBtn.disabled = true;
    if (computerScore > myScore) {
      header.textContent = `End Game The computer won the game!`;
    } else if (computerScore < myScore) {
      header.textContent = `End Game You won the game!`;
    } else {
      header.textContent = `It's a tie game!`;
    }
  }
});

function determineWinningCard(card1, card2) {
  const valueScore = [
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

  const valueOneIndex = valueScore.indexOf(card1.value);
  const valueTwoIndex = valueScore.indexOf(card2.value);
  if (valueOneIndex > valueTwoIndex) {
    computerScore++;
    computerScoreEl.innerHTML = `Computer score: ${computerScore}`;
    return "The computer wins!";
  } else if (valueTwoIndex > valueOneIndex) {
    myScore++;
    myScoreEl.innerHTML = `Myscore: ${myScore}`;
    return "You won!";
  } else {
    return "War!";
  }
}
