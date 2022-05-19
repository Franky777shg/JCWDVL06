let prime = (n) => {
  let factor = []; // [1, 5]

  for (let i = 1; i <= n; i++) {
    // i = 6
    if (n % i === 0) {
      factor.push(i);
    }
  }

  if (factor.length === 2) {
    return `${n} adalah bilangan prima, dan faktor nya adalah ${factor}`;
  } else {
    return `${n} adalah BUKAN bilangan prima, dan faktor nya adalah ${factor}`;
  }
};

console.log(prime(12));
