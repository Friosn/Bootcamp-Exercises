export const pokeCard = (pokemon) =>
  `<div class="pokeCard">
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.image}" height="120px" width="120px">
        <p>Type: ${pokemon.type}</p>
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>Special ability: ${pokemon.ability}</p>
      </div>
      `;
