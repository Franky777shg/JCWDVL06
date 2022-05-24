const book = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: true,
  },
];

const showString = (arr) => {
  let result = "";
  arr.forEach((item) => {
    let tempStr = "";
    for (let key in item) {
      tempStr += `${key}: ${item[key]}, `;
    }
    result += tempStr.slice(0, -2) + "\n";
  });
  console.log(result);
};

showString(book);
