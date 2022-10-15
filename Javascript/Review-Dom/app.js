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

//1.4-------------------------

const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

createDivs = document.createElement("div");

for (const country2 of countries2) {
  let titleH4 = document.createElement("h4");
  let imgElement = document.createElement("img");
  titleH4.innerHTML = country2.title;
  imgElement.innerHTML = country2.imgUrl;
  createDivs.appendChild(titleH4, imgElement);
}

document.body.appendChild(createDivs);
