console.log("Zadanie 1");
let input = prompt("Ile masz lat?");
let txt = input >= 18 ? "Jesteś pełnoletni" : "Jesteś niepełnoletni";
console.log(txt);

console.log("Zadanie 2");
let grade = prompt("Podaj ocene 1-6:");
console.log(grade)
switch (grade) {
  case '1': console.log("niedostateczny");
          break;
  case '2': console.log("dopuszczjący");
          break;
  case '3': console.log("dostateczny");
          break;
  case '4': console.log("dobru");
          break;
  case '5': console.log("bardzo dobry");
          break;
  case '6': console.log("celujący");
          break;
  default: console.log("Nie ocena")
}
