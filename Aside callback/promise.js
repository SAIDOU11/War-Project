fetch("https://apis.scrimba.com/bored/api/activity")
  .then(function (res) {
    return "Hello";
  })
  .then(function (whatever) {
    console.log(whatever);
    return "World";
  })
  .then(function (another) {
    console.log(another);
  });

// fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//   - Pending ..
//   - Fulfilled - run .then() block
//   - Rejected

// document.getElementById("new-deck").addEventListener("click", () => {
//   console.log("Clicked");
// });

// const voters = [
//   { name: "Joe", email: "joe@joe.com", voted: true },
//   { name: "Jane", email: "jane@jane.com", voted: true },
//   { name: "Bo", email: "bo@bo.com", voted: false },
//   { name: "Bane", email: "bane@bane.com", voted: false },
// ];

// // filter (voted) then .map() array email

// const finalResult = voters
//   .filter((voter) => voter.voted)
//   .map((pers) => {
//     return new Array(pers.email);
//   });
// console.log(finalResult);
