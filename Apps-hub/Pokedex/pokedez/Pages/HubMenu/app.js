import { clean } from "../../utils/cleaner";
import { initPokedex } from "../Games/Pokedex/app";
import { initQuiz } from "../Games/Quiz/quiz";
import "./style.css";

export const hubSite = (val) => {
  clean();
  const innerStuff = document.querySelector("#app");
  const pokedexBtn = document.createElement("button");
  const wakaMoleBtn = document.createElement("button");
  const quizBtn = document.createElement("button");
  pokedexBtn.innerText = "Pokedex";
  wakaMoleBtn.innerText = "Waka-Mole";
  quizBtn.innerText = "Rapid Quiz";
  pokedexBtn.classList.add("pokeBtn");
  wakaMoleBtn.classList.add("wakaBtn");
  quizBtn.classList.add("quizBtn");
  innerStuff.appendChild(quizBtn);
  innerStuff.appendChild(pokedexBtn);
  innerStuff.appendChild(wakaMoleBtn);

  pokedexBtn.addEventListener("click", () => initPokedex());
  wakaMoleBtn.addEventListener("click", () => alert("It is working dude!"));
  quizBtn.addEventListener("click", () => initQuiz());
};
