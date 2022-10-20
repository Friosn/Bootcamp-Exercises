import { randomColor } from "../color-changer/colorFlip";

export const navBar = () => {
  const colorChange = document.querySelector(".btn-color");
  colorChange.addEventListener("click", () => randomColor());
  return randomColor();
};
