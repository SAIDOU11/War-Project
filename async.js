const newDeckBtn = document.getElementById("new-deck");

function handleClick() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      remainingText.textContent = `Remaining cards: ${data.remaining}`;
      deckId = data.deck_id;
      console.log(deckId);
    });
}

newDeckBtn.addEventListener("click", handleClick);
