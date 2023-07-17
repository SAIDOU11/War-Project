function fetchFunction() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

document.getElementById("new-deck").addEventListener("click", fetchFunction);

function callbackLater() {
  return console.log("I finally ran");
}

setTimeout(callbackLater, 2000);

const people = [
  { name: "Jack", hasPet: true, age: 12 },
  { name: "Jill", hasPet: false, age: 18 },
  { name: "Alice", hasPet: true, age: 22 },
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

const peopleWithPets = filterArray(people, (people) => people.hasPet);
console.log(peopleWithPets);
