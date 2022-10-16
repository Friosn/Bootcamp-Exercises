//Iteration#1 ARROWS-----------------------------

const sum = (a = 10, b = 5) => {
  console.log(a + b);
};

//1.1-----------
sum();
//1.2-----------
sum(1);
//1.3----------
sum(1, 2);

//Iteration#2   DESTRUCTURING-----------------

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

//2.1------------
const titleGame = game.title;
const genderGame = game.gender;
const yearGame = game.year;

console.log(titleGame);
console.log(genderGame);
console.log(yearGame);
//2.2-----------------
const fruits = ["Banana", "Strawberry", "Orange"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);
//2.3------------------
const animalFunction = () => {
  return {
    name: "Bengal Tiger",
    race: "Tiger",
  };
};

const { name, race } = animalFunction();

console.log(name, race);

//2.4----------------

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const carName = car.name;
const carItv = car.itv;

const carItvYea1 = car.itv[0];
const carItvYea2 = car.itv[1];
const carItvYea3 = car.itv[2];

console.log(carName, carItv, carItvYea1, carItvYea2, carItvYea3);
