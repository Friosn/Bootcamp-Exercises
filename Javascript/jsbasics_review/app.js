/* Iteración #1: Mix for & includes**

Dado el siguiente javascript usa forof para recorrer el array de películas, 
genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
Ten en cuenta que las categorías no deberían repetirse.
Para filtrar las categorías puedes ayudarte de la función .includes() */

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const movieCategories = [];

for (let index = 0; index < movies.length; index++) {
  let movie = movies[index];
  for (let i = 0; i < movie.categories.length; i++) {
    const catgs = movie.categories[i];
    movieCategories.push(catgs);
  }
}

const removeCopies = movieCategories.filter((copies, indez) => {
  return indez === movieCategories.indexOf(copies);
});
console.log(removeCopies);

/* **Iteración #2: Mix Fors**

Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios. */

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let newArrayMixedUp = [];

for (const user of users) {
  newArrayMixedUp.push(user.favoritesSounds);
}
console.log(newArrayMixedUp);
let newLessMixedUp = [];

for (let index = 0; index < newArrayMixedUp.length; index++) {
  const element = newArrayMixedUp[index].waves;
  const elemen = newArrayMixedUp[index].firecamp;
  const elem = newArrayMixedUp[index].rain;
  const ele = newArrayMixedUp[index].shower;
  const ele1 = newArrayMixedUp[index].train;
  const ele2 = newArrayMixedUp[index].wind;
  newLessMixedUp.push(element, elemen, elem, ele, ele1, ele2);
}
let newVolumeArr = [];
console.log(newLessMixedUp);

newLessMixedUp = newLessMixedUp.filter((element) => {
  return element !== undefined;
});

for (let i = 0; i < newLessMixedUp.length; i++) {
  const volm = newLessMixedUp[i];
  if (typeof volm.volume === "number") {
    newVolumeArr.push(volm.volume);
  }
}
console.log(newVolumeArr);

const sumeAll = newVolumeArr.reduce(
  (accumulator, eachVolume) => accumulator + eachVolume,
  0
);
console.log(sumeAll);
const averageVolume = sumeAll / newVolumeArr.length;
console.log(averageVolume);
//57.25 (crazy way I took... holy molly)

/* **Iteración #3: Mix Fors**

Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...
a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript. */

const users2 = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
