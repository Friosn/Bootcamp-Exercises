/* const pokeArray = [];
const getData = async () => {
  for (let i = 0; i < 151; i++) {
    try {
      const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon?${i}`);
      const dataToJson = await rawData.json();
      return dataToJson;
    } catch (error) {
      console.log("There is not such Pokemon... yet");
    }
    pokeArray.push(dataToJson);
  }
};

console.log(pokeArray); */
