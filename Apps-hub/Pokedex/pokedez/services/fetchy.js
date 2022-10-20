export const getData = async () => {
  try {
    const rawData = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    const dataToJson = await rawData.json();
    return dataToJson;
  } catch (error) {
    console.log("There is not such Pokemon... yet");
  }
};
