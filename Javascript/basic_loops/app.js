//iteration#1
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

let camisetaArr = [];

for (let index = 0; index < products.length; index++) {
  const element = products[index];

  if (element.includes("Camiseta")) {
    camisetaArr.push(element);
  }
}

console.log(camisetaArr);

//iteration#2 ----------------------------------

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

alumns.forEach((alumns) => {
  alumns.isApproved = {};
});

for (let i = 0; i < alumns.length; i++) {
  let alumn = alumns[i];
  if (alumn.T1 === false && alumn.T2 === false) {
    alumn.isApproved = false;
  } else if (alumn.T2 === false && alumn.T3 === false) {
    alumn.isApproved = false;
  } else if (alumn.T1 === false && alumn.T3 === false) {
    alumn.isApproved = false;
  } else {
    alumn.isApproved = true;
  }

  console.log(alumn.isApproved);
}

console.log(alumns);

//iteration#3 --------------------------------------------------------

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const places of placesToTravel) {
  console.log(places);
}

//iteration#4 ------------------------------

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const key in alien) {
  console.log(`The alien has the key ${key} with value ${alien[key]}`);
}

//iteration#5 -------------------------------

const placesToTravelNext = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let i = 0; i < placesToTravelNext.length; i++) {
  const element = placesToTravelNext[i];
  if (element.id == 11 || element.id == 40) {
    delete element.id;
  }
}
console.log(placesToTravelNext);

//Iteration#6 -------------------------------------

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

for (const toy of toys) {
  if (toy.name.includes("gato")) {
    delete toy.name;
  } else {
    console.log(toy);
  }
}

//Iteration#7 -----------------------------

const popularToys = [];
const toyStorys = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

for (const toyStory of toyStorys) {
  if (toyStory.sellCount > 15) {
    popularToys.push(toyStory);
  }
}

console.log(popularToys);
