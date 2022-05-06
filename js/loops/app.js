let input = prompt("Z jakiej liczby chcesz obliczyć silnię?");
let result = 1;
for (i = 1; i <= input; i++) {
  result = result * i;
}
console.log(result);
