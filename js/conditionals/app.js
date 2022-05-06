console.log("Zadanie 1");
const numbers = [4, 4, 1, 2, 5, 40];
let avg = 0;
for (let i = 0; i < numbers.length; i++) {
  avg += numbers[i];
}
avg /= numbers.length;
console.log(avg);

console.log("Zadanie 2");
let array = [];

let min = Math.ceil(1);
let max = Math.floor(100);
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  console.log(array[i]);
  if (array[i] % 2 === 1) {
    array[i] = array[i] + 1;
    console.log("CHANGED: " + array[i]);
  }
}



