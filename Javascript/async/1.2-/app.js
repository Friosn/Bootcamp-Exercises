const baseUrl = "https://api.nationalize.io";

const getData = async (name) => {
  try {
    const rawInfo = await fetch(`${baseUrl}/?name=${name}`);
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

//...........

const getNationalize = async (value) => {
  const tada = await fetch(`https://api.nationalize.io/?name=${value}`);
  const jsonData = await tada.json();
  printElements(jsonData);
};

getBtn.addEventListener("click", () => getNationalize(getInput.vallue));
