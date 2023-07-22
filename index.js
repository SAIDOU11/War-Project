const newDeckBtn = document.getElementById("new-deck");

async function handleClick() {
  const res = await fetch(
    "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
  );
  const data = await res.json();
  console.log(data);
}

newDeckBtn.addEventListener("click", handleClick);

const people = [
  { name: "Jack", hasPet: true, age: 12 },
  { name: "Jill", hasPet: false, age: 18 },
  { name: "Alicce", hasPet: true, age: 22 },
  { name: "Bob", hasPet: false, age: 32 },
];

function filterArray(array, callback) {
  const resultingArray = [];
  for (let item of array) {
    const result = callback(item);
    if (result) {
      resultingArray.push(item);
    }
  }
  return resultingArray;
}
