//1.1 -----------

const addBtnLikeABoss = document.querySelector("#btnToClick");
addBtnLikeABoss.textContent = "I am a button";

addBtnLikeABoss.addEventListener("click", () => {
  console.log(
    "I don't know what information do I have to print here, but here I come :)"
  );
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
