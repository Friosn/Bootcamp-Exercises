//ASYNC

//ITERATION1----------FETCH
//1.1--------------------
const getData = async (param) => {
  try {
    const rawInfo = await fetch(`https://api.agify.io?${param}`);
    const toJson = await rawInfo.json();
    return toJson;
  } catch {
    console.log(`An error has occur`);
  }
};

getData();
