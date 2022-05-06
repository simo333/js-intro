console.log("Zadanie 1");
let input = prompt("Z jakiej liczby chcesz obliczyć silnię?");
let result = 1;
for (let i = 1; i <= input; i++) {
  result = result * i;
}
console.log(result);

console.log("Zadanie 2");
let x = prompt("x =");
let y = prompt("y =");
let result2 = Number(x);
for (++x; x <= y; x++) {
  result2 = result2 + x;
}
console.log(result2);
