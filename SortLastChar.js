let sentence = "LAUGHING OUT LOUD";

const sortLastChar = (input) => {
  return input
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

console.log(sortLastChar(sentence));

// console.log(sentence.split(" "));
// console.log(
//   sentence
//     .split(" ")
//     .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
// );
