export const clean = async () => {
  const appDiv = document.querySelector("#app");
  appDiv.innerHTML = ``;
};

export const masiveClean = async () => {
  const getBody = document.querySelector("body");
  getBody.innerHTML = ``;
};

export const cleanHead = async () => {
  const getHead = document.querySelector("header");
  getHead.innerHTML = ``;
};
