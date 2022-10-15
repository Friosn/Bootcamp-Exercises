//ITERATION#2 -----------------------------------

//2.1----------

let newDiv = document.createElement("div");

document.body.appendChild(newDiv);

//2.2-----------

let newP = document.createElement("p");

document.querySelector("div").appendChild(newP);

//2.3------------
let newP2 = document.createElement("p");
const secondDiv = document.querySelectorAll("div")[1];

for (i = 0; i <= 6; i++) {
  let addingDivs = secondDiv.appendChild(newP2);
  addingDivs + 1;
}

//2.4 ---------------

let newPDynamic = document.createElement("p");
newPDynamic.innerHTML = "I am dynamic!";
document.body.appendChild(newPDynamic);

//2.5---------------

let sufferingRick = document.querySelector(".fn-insert-here");
let rickSays = "Wubba Lubba dub dub";
sufferingRick.innerHTML = rickSays;

//2.6----------------

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

let createList = document.createElement("ul");

apps.forEach((element) => {
  let insideList = document.createElement("li");
  insideList.innerHTML = element;
  createList.appendChild(insideList);
});
document.body.appendChild(createList);
//2.7-----------------------
const removeNodes = document.querySelectorAll(".fn-remove-me");

for (let node of removeNodes) {
  node.remove();
}

//2.8----------------------

const inserting = document.querySelectorAll("div");
