/* function getCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((characters) => console.log(characters));
}

getCharacters(); */

const getCharactersAsync = async () => {
  try {
    const rawInfo = await fetch("https://rickandmortyapi.com/api/character");
    const toJson = await rawInfo.json();
    return toJson;
  } catch (error) {
    console.log("ELRRRROOOOOND, kidding; just an error occured");
  }
};

await getCharactersAsync();
