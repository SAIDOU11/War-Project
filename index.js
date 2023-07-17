function fetchFunction() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

document.getElementById("new-deck").addEventListener("click", fetchFunction);

let callBack = () => {
  console.log("I finally ran!");
};

setTimeout(callBack, 2000);

const people = [
  { name: "Jack", hasPet: true },
  { name: "Jill", hasPet: false },
  { name: "Alice", hasPet: true },
  { name: "Bob", hasPet: false },
];
