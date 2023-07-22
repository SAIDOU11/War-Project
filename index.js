let deckId;
let computerScore = 0;
let myScore = 0;
const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCards = document.getElementById("draw-cards");
const header = document.getElementById("header");
const remaining = document.getElementById("remaining");
const myScoreEl = document.getElementById("my-score");
const computerScoreEl = document.getElementById("computer-score");

drawCards.disabled = true;
async function handleClick() {
  const res = await fetch(
    "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
  );
  const data = await res.json();
  remaining.innerHTML = `Remaining cards: ${data.remaining}`;
  deckId = data.deck_id;
  drawCards.disabled = false;
}

newDeckBtn.addEventListener("click", handleClick);

drawCards.addEventListener("click", async () => {
  const response = await fetch(
    `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`
  );
  const data = await response.json();
  remaining.innerHTML = `Remaining cards: ${data.remaining}`;
  cardsContainer.children[0].innerHTML = `<img class="card" src=${data.cards[0].image} />`;
  cardsContainer.children[1].innerHTML = `<img class="card" src=${data.cards[1].image} />`;
  const winnerText = determineWinner(data.cards[0], data.cards[1]);
  header.textContent = winnerText;

  if (data.remaining === 0) {
    drawCards.disabled = true;
    if (computerScore > myScore) {
      header.textContent = "The computer has won the game!";
    } else if (computerScore < myScore) {
      header.textContent = "You won the game!";
    } else {
      header.textContent = "It's a tie game!";
    }
  }
});

function determineWinner(card1, card2) {
  const cardValue = [
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
  const cardOne = cardValue.indexOf(card1.value);
  const cardTwo = cardValue.indexOf(card2.value);

  if (cardOne > cardTwo) {
    computerScore++;
    computerScoreEl.innerHTML = `Computer score : ${computerScore}`;
    return "Computer wins!";
  } else if (cardOne < cardTwo) {
    myScore++;
    myScoreEl.innerHTML = `My score : ${myScore}`;
    return "You win!";
  } else {
    return "Its a tie game!";
  }
}
