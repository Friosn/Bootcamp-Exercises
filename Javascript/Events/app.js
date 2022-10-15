//1.1 -----------
const selectingSpace = document.querySelector(".click");
const addBtnLikeABoss = document.querySelector("#btnToClick"); //I could have added the button from here with a .createElement("button"), ut I think that wasn't the thing  asked in the exercise.
addBtnLikeABoss.textContent = "I am a button";

addBtnLikeABoss.addEventListener("click", (value) => {
  console.log(selectingSpace.value);
});

//1.2---------------------

const addingAnother = document.querySelector(".focus");

addingAnother.addEventListener("focus", (value) => {
  console.log(value.target.value);
});

//1.3 --------------------------

const addingInput = document.querySelector(".value");

addingInput.addEventListener("input", (value) => {
  console.log(value.target.value);
});
