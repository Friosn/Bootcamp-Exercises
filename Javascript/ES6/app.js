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

//Iteration#3------------------
//3.1----------
const pointsList = [32, 54, 21, 64, 75, 43];

let pointsListCopy = [...pointsList];
console.log(pointsListCopy);

//3.2---------------
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

let toyCopy = { ...toy };
console.log(toyCopy);

//3.3----------------
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const pointListMixx = [...pointsLis2, ...pointsList2];
console.log(pointListMixx);

//3.4------------
const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const toyMixx = { ...toy2, ...toyUpdate };
console.log(toyMixx);

//3.5-----------------

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const colorsBut2 = [...colors];
colorsBut2.splice(2, 1);
console.log(colorsBut2);

//Iteration#4---------------
//4.1-----------
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const nameMap = users.map((user) => user.name);
console.log(nameMap);

//4.2----------------
const users2 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const nameMap2 = users2.map((user2) => {
  if (user2.name[0] == "A") {
    user2.name = "Anacleto";
  }
  return user2.name;
});
console.log(nameMap2);

//4.3---------------

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const visitedPlaces = cities.map((city) => {
  if (city.isVisited) {
    return `${city.name} Visitado`;
  }
  return city.name;
});

console.log(visitedPlaces);

//Iteration#5----------------- Filter

//5.1-----------
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const offAge = ages.filter((age) => {
  return age > 18;
});

console.log(offAge);
//5.2--------------
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pairAge = ages2.filter((age2) => {
  if (age2 % 2 === 0) {
    return age2;
  }
});
console.log(pairAge);

//5.3-----------------
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const leagueOf = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed == "League of Legends") {
    return streamer;
  }
});
console.log(leagueOf);

//5.4-----------------

const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const namesWithU = streamers2.filter((streamer2) => {
  if (streamer2.name.includes("u")) {
    return streamer2;
  }
});
console.log(namesWithU);

//5.5------------------

const legends = streamers2.filter((streamer2) => {
  if (streamer2.gameMorePlayed.includes("League")) {
    return streamer2;
  }
});
const mayus = legends.map((legend) => ({
  ...legend,
  gameMorePlayed:
    legend.age > 35
      ? legend.gameMorePlayed.toLocaleUpperCase()
      : legend.gameMorePlayed,
}));
console.log(legends);

//better solution than the one I had with overengeniering
