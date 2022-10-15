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
