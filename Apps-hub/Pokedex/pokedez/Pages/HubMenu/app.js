import { clean } from "../../utils/cleaner";
import { initPokedex } from "../Games/Pokedex/app";
import "./style.css";

export const hubSite = (val) => {
  clean();
  const innerStuff = document.querySelector("#app");
  const pokedexBtn = document.createElement("button");
  const wakaMoleBtn = document.createElement("button");
  pokedexBtn.innerText = "Pokedex";
  wakaMoleBtn.innerText = "Waka-Mole";
  pokedexBtn.classList.add("pokeBtn");
  wakaMoleBtn.classList.add("wakaBtn");
  innerStuff.appendChild(pokedexBtn);
  innerStuff.appendChild(wakaMoleBtn);

  pokedexBtn.addEventListener("click", () => initPokedex());
  wakaMoleBtn.addEventListener("click", () => alert("It is working dude!"));
};
