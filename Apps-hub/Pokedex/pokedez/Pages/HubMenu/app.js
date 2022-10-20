import { clean } from "../../utils/cleaner";
import "./style.css";

export const hubSite = (val) => {
  clean();
  const innerStuff = document.querySelector("#app");
  const pokedexBtn = document.createElement("button");
  pokedexBtn.innerText = "Pokedex";
  pokedexBtn.classList.add("pokeBtn");
  innerStuff.appendChild(pokedexBtn);

  pokedexBtn.addEventListener("click", () => alert("It is working"));
};
