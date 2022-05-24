const inversions = (arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) counter++;
    }
  }
  console.log(`${counter} inversions`);
};

inversions([3, 2, 1, 4]);
