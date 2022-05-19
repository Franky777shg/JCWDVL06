let word = "Phantom Assassin";

const abbreviate = (input) => {
  return input
    .split(" ")
    .map((item) => {
      return item[0].toUpperCase();
    })
    .join(".");
};

console.log(abbreviate(word));

// console.log(word.split(" "));
// console.log(
//   word.split(" ").map((item) => {
//     return item[0];
//   })
// );
// console.log(
//   word
//     .split(" ")
//     .map((item) => {
//       return item[0];
//     })
//     .join(".")
// );
