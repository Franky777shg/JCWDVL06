let arr = [1, "a", 4, "a", 4, 4];
let item;
let counter = 0;

for (let i = 0; i < arr.length; i++) {
  // i = 0
  let tempCounter = 0; // 1
  for (let j = i; j < arr.length; j++) {
    // j = 3
    if (arr[i] === arr[j]) {
      tempCounter++;
    }
  }

  if (tempCounter > counter) {
    item = arr[i];
    counter = tempCounter;
  }
}

console.log(
  `${item} adalah item yang paling banyak dengan jumlah sebanyak ${counter} kali`
);
