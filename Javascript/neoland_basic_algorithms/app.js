let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;
//Iteration#1 "Variables"

const character = { name: "Jack Sparrow", age: 10 };
character.age = 25;
console.log(character); //Checked
//1.1

let firsName = "Jon";
let lastName = "Snow";
let age = 24;

console.log(
  "Soy " +
    firsName +
    " " +
    lastName +
    ", tengo " +
    age +
    " años y me gustan los lobos."
);
//1.2

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

console.log(toy1.price + toy2.price);
//1.3

let globalBasePrice = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car1.finalPrice);
console.log(car2.finalPrice);
//1.4

//Iteration#2 "Variables avanzadas"

console.log(10 * 5); //50
console.log(10 / 2); //5
console.log(15 % 9); //6

let p = 10;
let j = 5;
let o = p + j;
console.log(o); //15

let c = 10;
let m = 5;
let i = c * m;
console.log(i); //50
//Iteration#3

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);
//1.1

avengers[0] = "IRONMAN";
console.log(avengers);
//1.2

console.log(avengers.length);
//1.3

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters); //Checked
//1.4

const rickAndMortyCharacters2 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0], rickAndMortyCharacters2[4]);
//1.5

const rickAndMortyCharacters3 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters3.splice(1, 1);
console.log(rickAndMortyCharacters3);
//1.6

//Iteration#4 "Arrays"

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if (number1 === 10) {
  console.log("number1 es estrictamente igual a 10");
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(
    "number3 por 5 es igual a number1 Y number1 por 2 es igual a number2"
  );
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(
    "number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3"
  );
}
//Iteration#5 "Condicionales"

for (index = 0; index < 10; index++) {
  console.log(index);
}
//1.1

for (index = 0; index < 10; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}
//1.2
for (index = 0; index <= 10; index++) {
  if (index < 10) {
    console.log("Intentando dormir");
  } else {
    console.log("Dormido!");
  }
}
//1.3
//Iteration#6 --> Basic Algorithms' Block Finished!
