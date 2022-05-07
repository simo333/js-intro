console.log("Zadanie 1");
function sumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let sum = sumNumbers([1, 2, 3]);
console.log("Suma: " + sum);

console.log("Zadanie 2");
let max = function (num1, num2, num3) {
  if(num1 > num2) {
    if(num1 > num3) {
      return num1;
    }
  } else if(num2 > num3) {
      return num2;
  } else {
    return num3;
  }
}
let maxNumb = max(1,2,3);
console.log("max = " + maxNumb);

console.log("Zadanie 3");
function calculateTip(amount, rating) {
  let bdb = "Bardzo dobra obsługa";
  let db = "Dobra obsługa";
  let medium = "Średnia obsługa";
  let bad = "Zła obsługa";

  switch (rating) {
    case bdb: return amount * 0.25;
    case db: return amount * 0.2;
    case medium: return amount * 0.15;
    case bad: return 0;
    default: return "Opis nieczytelny";
  }
}

console.log(calculateTip(100, "Bardzo dobra obsługa"));
console.log(calculateTip(100, "adsadas"));
