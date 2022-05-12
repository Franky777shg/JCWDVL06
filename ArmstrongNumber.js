let number = 370;

let numberTostring = number.toString(); // '370'
// console.log(numberTostring[2]);

let digit = numberTostring.length; // 3

let counter = 0; // 153

for (let i = 0; i < digit; i++) {
  // i = 3
  counter += Math.pow(numberTostring[i], digit);
}

if (counter === number) {
  console.log(true);
} else {
  console.log(false);
}

// looping setiap angka nya
// bikin counter
// angkanya tersebut akan langsung dipangkatkan dengan digitnya
// lalu ditambahkan ke counter
// lalu cek apakah counter sama dengan angka awal
