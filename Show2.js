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
  let result = [];
  arr.forEach((item) => {
    let tempArr = [];
    for (let key in item) {
      tempArr.push(`${key}: ${item[key]}`);
    }
    result.push(tempArr);
  });
  console.log(result);
};

showString(book);
