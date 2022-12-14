import { randomColor } from "../color-changer/colorFlip";
import { hubSite } from "../../Pages/HubMenu/app";
import { clean, cleanHead } from "../../utils/cleaner";
import { masiveClean } from "../../utils/cleaner";
import "./style.css";
export const navBar = () => {
  const colorChange = document.querySelector(".btn-color");
  colorChange.addEventListener("click", () => randomColor());
  randomColor();
  const homeBtn = document.querySelector(".btn-hub");
  homeBtn.addEventListener("click", () => {
    clean();
    cleanHead();
    hubSite();
  });
};
