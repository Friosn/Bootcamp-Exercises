const baseUrl = "https://api.nationalize.io";

const getData = async (name) => {
  try {
    const rawInfo = await fetch(`${baseUrl}${name}`);
    const toJson = await rawInfo.json();
    return toJson;
  } catch {
    console.log(`An error has occur`);
  }
};
const getInput = document.querySelector("input");
const getBtn = document.querySelector("button");

const getEvent = getBtn.addEventListener("click", () => {
  console.log(getInput.value);
  getData(getInput.value);
});

//something strange is unresolved
