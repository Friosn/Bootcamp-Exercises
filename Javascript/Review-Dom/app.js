//1.1------------
let uList = document.createElement("ul");

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

for (const country of countries) {
  let liList = document.createElement("li");
  liList.innerHTML = country;
  uList.appendChild(liList);
}

document.body.appendChild(uList);

//1.2--------------------

let ubicarionToRemove = document.querySelector(".fn-remove-me");

ubicarionToRemove.remove();

//1.3 --------------------

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
let ulNew = document.createElement("ul");

const ubicationFunc = document.querySelector('[data-function="printHere"]');

for (const car of cars) {
  let liNew = document.createElement("li");
  liNew.innerHTML = car;
  ulNew.appendChild(liNew);
}

ubicationFunc.appendChild(ulNew);
