import { clean } from "../../../utils/cleaner";
import "./style.css";
import { pokeCard } from "../../../components/pokeCard";

/* import { createHeader } from "../../../components/HeaderPoke/header"; */

export const initPokedex = () => {
  console.log("entr");
  clean();
  getData();
  const getHeader = document.querySelector("header");
  getHeader.classList.add("pokeHeader");

  const insertIMG = document.createElement("img");
  insertIMG.src = "https://avatars.githubusercontent.com/u/64151210?v=4";
  getHeader.appendChild(insertIMG);

  // -----------SEARCHER------------------
  const getMain = document.querySelector("main");
  const divForInput = document.createElement("div");
  getMain.appendChild(divForInput);
  const searcherInput = document.createElement("input");
  searcherInput.classList.add(".myInput");
  searcherInput.setAttribute("placeholder", "SEARCH POKEMON");
  divForInput.appendChild(searcherInput);

  const printPokemon = (word) => {
    const filteredPokemons = pokeMapArray.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(word.toLowerCase())
    );
    const mainApp = document.querySelector("#app");
    console.log(filteredPokemons);
    mainApp.innerHTML = ``;
    filteredPokemons.forEach((pokemon) => {
      console.log(pokemon);
      mainApp.innerHTML += pokeCard(pokemon);
    });
  };

  searcherInput.addEventListener("input", (ev) => {
    printPokemon(ev.target.value);
    console.log(ev.target);
  });
};
let pokeArray = [];
let pokeMapArray = [];

//---------FETCH-----------

const getData = async () => {
  for (let i = 1; i <= 151; i++) {
    try {
      const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      const dataToJson = await rawData.json();
      pokeArray.push(dataToJson);
    } catch (error) {
      console.log("There is not such Pokemon... yet 🐣");
    }
  }
  pokeMap(pokeArray);
};

//-----------MAP-----------

const pokeMap = (pokeList) => {
  const arrPokemon = pokeList.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.types[0].type.name,
      image: pokemon.sprites.other["official-artwork"].front_default,
      ability: pokemon.abilities[0].ability.name,
      height: pokemon.height / 10 + " m",
      weight: pokemon.weight / 10 + " kg",
    };
  });
  pokeMapArray = arrPokemon;
  printPokeTemplate(arrPokemon);
};

const printPokeTemplate = (pokeArray) => {
  const mainApp = document.querySelector("#app");
  for (const pokemon of pokeArray) {
    mainApp.innerHTML += pokeCard(pokemon);
  }
};

//----------SELECT ---------

///

const selectThis = () => {
  const select = document.createElement("select");
  select.classList.add("selector");
  const pokeType = document.createElement("option");
  pokeType.value = "Pokemon type";
  select.add(pokeType);
};
