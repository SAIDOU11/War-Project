let deckId;
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

document.getElementById("new-deck").addEventListener("click", handleClick);

document.getElementById("draw-cards").addEventListener("click", () => {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.cards);
      cardComputer = data.cards[0].image;
      myCard = data.cards[1].image;
      document.querySelector(".card-slot").innerHTML = `
        <img src=${cardComputer} />
      <img src=${myCard} />
      `;
    });
});

//
