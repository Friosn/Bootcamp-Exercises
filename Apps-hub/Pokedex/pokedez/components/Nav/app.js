import { randomColor } from "../color-changer/colorFlip";
import "./style.css";
export const navBar = () => {
  const colorChange = document.querySelector(".btn-color");
  colorChange.addEventListener("click", () => randomColor());
  return randomColor();
};
