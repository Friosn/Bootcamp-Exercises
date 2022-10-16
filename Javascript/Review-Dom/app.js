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
createDivs.addClas;

for (const country2 of countries2) {
  createDivs.innerHTML += `<h4>${country2.title}</h4>
  <img class="deleteMeNext" src="${country2.imgUrl}">
  `;
}
document.body.appendChild(createDivs);

//1.5 --------------------

classForDeleting = document.querySelector(".deleteMeNext");
createBtn = document.createElement("button");
createBtn.innerHTML = `DELETING LAST ELEMENT`;
document.body.appendChild(createBtn);

createBtn.addEventListener("click", (event) => {
  const lastElement = document.querySelector(`.deleteMeNext`);
  const lastElementPosition = countries2[countries2.length - 1].lastElement;
  countries2.splice([countries2.length - 1]);
  lastElement.parentElement.remove();
}); //FALTA ACABARLO/bloqueo :(())cd ..


//1.6 ------------------
