//ITERATION#1--------------------------------------------------------

//1.1-------------
const queryClass = document.querySelector(".showme");

console.log(queryClass);

//1.2--------------

const queryId = document.querySelector("#catched");

console.log(queryId);

//1.3 --------------

const queryParagraph = document.querySelectorAll("p");

console.log(queryParagraph);

//1.4 --------------

const queryAllPokemonClass = document.querySelectorAll(".pokemon");

console.log(queryAllPokemonClass);

//1.5 --------------

const queryDataFunctionAtribute = document.querySelectorAll(
  '[data-function = "testMe"]'
);

console.log(queryDataFunctionAtribute);

//1.6 ---------------

const queryJustThreeDataFunctions = document.querySelectorAll(
  '[data-function = "testMe"]'
)[2];

console.log(queryJustThreeDataFunctions);



