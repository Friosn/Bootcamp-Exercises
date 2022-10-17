//Iteration#6 --- FIND----------

//6.1----------

const numbers = [32, 21, 63, 95, 100, 67, 43];

const hundred = numbers.find((element) => element === 100);
const position100 = numbers.indexOf(hundred);
console.log(position100);

//6.2--------------
const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const year10Movie = movies.find((element) => element.date === 2010);
const positionMovie = movies.indexOf(year10Movie);
console.log(positionMovie);

//6.3-------------
const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];
const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const cucushu = aliens.find((element) => element.name === "Cucushumushu");

const mutation = mutations.find((element) => element.name === "Porompompero");

const alienMutation = { ...cucushu, mutation };
console.log(alienMutation);

//Iteration#7 ---REDUCE--------
//7.1------
const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const sumScores = exams.reduce(
  (accumulator, exam) => accumulator + exam.score,
  0
);

console.log(sumScores);

//7.2-----------

const sumAprobedOnes = exams.reduce((accumulator, exam) => {
  if (exam.score >= 5) {
    return accumulator + exam.score;
  }
  return accumulator;
}, 0);

console.log(sumAprobedOnes);

//7.3-----------

const averageSocres = sumScores / exams.length;
console.log(averageSocres);

//ITERATION#8----------BONUS---------

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];

const rpgGames = videogames.filter((game) => game.genders.includes("RPG"));

const scoreSum = rpgGames.reduce(
  (accumulator, game) => accumulator + game.score,
  0
);
const averageGameScore = scoreSum / rpgGames.length;
console.log(averageGameScore);
