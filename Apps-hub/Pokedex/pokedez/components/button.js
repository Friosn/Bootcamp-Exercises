export const button = (id, text, listener) => {
  const createButton = document.createElement("button");
  createButton.setAttribute("id", id);
  createButton.innerText = text;
  createButton.addEventListener("click", () => listener);
};
