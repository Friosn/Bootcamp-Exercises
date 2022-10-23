import { clean } from "../../utils/cleaner";
import { initPokedex } from "../Games/Pokedex/app";
import { initQuiz } from "../Games/Quiz/quiz";
import "./style.css";

export const hubSite = (val) => {
  clean();
  const innerStuff = document.querySelector("#app");
  const pokedexDiv = document.createElement("div");
  const quizDiv = document.createElement("div");
  const wakaMoleBtn = document.createElement("button");
  const quizImg = document.createElement("img");
  const pokedexImg = document.createElement("img");
  const apocalypse = document.createElement("img");
  apocalypse.src =
    "https://i.gifer.com/origin/7c/7c34e7bb2ee13297e38921aacd45eb0c_w200.gif";
  pokedexImg.src =
    "https://media1.giphy.com/media/M6BvFDxqoNUrzgMyYf/giphy.gif?cid=6c09b952ap8hh8372acgk03k9dt0wsq20bafst0l0h5xfs6o&rid=giphy.gif&ct=s";
  wakaMoleBtn.innerText = "Waka-Mole";
  quizImg.src =
    "https://logos-download.com/wp-content/uploads/2016/09/Who_Wants_To_Be_A_Millionaire_logo_logotype.png";
  pokedexImg.classList.add("pokeBtn");
  wakaMoleBtn.classList.add("wakaBtn");
  quizImg.classList.add("quizBtn");
  apocalypse.classList.add("apocBtn");

  innerStuff.appendChild(pokedexImg);
  innerStuff.appendChild(quizImg);
  innerStuff.appendChild(apocalypse);
  innerStuff.appendChild(wakaMoleBtn);

  apocalypse.addEventListener("click", () => alert("In process 🧟‍♂️🧟‍♀️"));
  pokedexImg.addEventListener("click", () => initPokedex());
  wakaMoleBtn.addEventListener("click", () => alert("Maintenance time 🧹🧹"));
  quizImg.addEventListener("click", () => initQuiz());

  const getBody = document.querySelector("body");
  getBody.classList.add("hubBody");
};
