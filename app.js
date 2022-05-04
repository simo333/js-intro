console.log("ZADANIE 1");
let hello = "hello";
let js = "JS";
let text = hello + " " + js;

console.log(text);

console.log("ZADANIE 2");
let number = 15;              //number -> 15
let txt = "txt";              //string -> txt
let numbAndTxt = number + text; //string -> 15hello JS
let bool = true;              //boolean -> true
let spec = undefined;         //undefinded -> undefined

console.log(typeof spec);
console.log(spec);

console.log("ZADANIE 3.1");
let names1 = ["Jan", "Maria", "Kasia", "Wojtek", "Zosia"];

console.log(names1[1]);
console.log(names1[4]);
console.log(names1.length);

console.log("ZADANIE 3.2");
let names2 = [];
names2.push("Jan");
names2.push("Maria");
names2.push("Kasia");
names2.push("Wojtek");
names2.push("Zosia");

console.log(names2[0]);
console.log(names2[2]);
console.log(names2.length);

console.log("ZADANIE 4.1");
let arrayOfNumbers = [];
arrayOfNumbers[0] = [1, 2, 3, 4];
arrayOfNumbers[1] = [5, 6, 7, 8];
arrayOfNumbers[2] = [9, 10, 11, 12];

console.log(arrayOfNumbers[0][1]);
console.log(arrayOfNumbers[1]);
console.log(arrayOfNumbers[0][2].length);

console.log("ZADANIE 4.2")
let mixedArray = [];
mixedArray[0] = ["Maria", "Jan", "Piotr"];
mixedArray[1] = [1, 2, 3, 4, 5, 6];

console.log(mixedArray[0][2]);
console.log(mixedArray[0][4]);
console.log(mixedArray[0][1].length);
