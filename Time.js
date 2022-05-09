const init = 3721;
const detikPerJam = 3600;
const detikPerMenit = 60;

const jam = Math.floor(init / detikPerJam);

const detikSisaJam = init - jam * detikPerJam;

const menit = Math.floor(detikSisaJam / detikPerMenit);

const detik = detikSisaJam - menit * detikPerMenit;

console.log(`${jam} Jam, ${menit} Menit, ${detik} Detik`);

// const vs let vs var
// var => global variabel (tidak terikat dengan lexical scope)
// let => terikat dengan lexical scope
// const => terikat dengan lexical scope

let angka = 2;
angka = 3;
console.log(angka);

const huruf = "F";
huruf = "N";
console.log(huruf);
