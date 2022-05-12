let str = "xxxXXxxfreXXXX";
let countX = 0;

// looping untuk setiap character
for (let i = 0; i <= str.length; i++) {
  // kalau character yang sedang di looping adalah x atau X, countX akan ditambahkan 1
  if (str[i] == "x" || str[i] == "X") {
    countX++;
  }
}

// kalau countX kurang dari sama dengan 10, maka safe
if (countX <= 10) {
  console.log(countX);
  console.log("Safe!");
}
// kalau countX lebih dari 10, maka danger
else {
  console.log(countX);
  console.log("Danger!");
}
