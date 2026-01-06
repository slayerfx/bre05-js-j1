let i = 0;
while (i <= 100) {
  console.log(i);
  i++;
}

let j = 0;
while (j <= 50) {
  console.log(j);
  j += 2;
}

let k = 51;
while (k <= 100) {
  if (k % 2 === 0) {
    console.log(k + " est pair");
  } else {
    console.log(k + " est impair");
  }
  k += 3;
}
