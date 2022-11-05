import { initQuiz } from "../../Pages/Games/Quiz/quiz";
import { clean } from "../../utils/cleaner";
import "./style.css";

const mainApp = document.querySelector("#app");
const mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");
mainApp.appendChild(mainDiv);

export const retryBtn = () => {
  const retrBtn = document.createElement("button");
  retrBtn.classList.add("retryBtn");
  retrBtn.innerText = "RETRY";
  mainApp.appendChild(retrBtn);
  retrBtn.addEventListener("click", () => initQuiz());
};

export const gameOver = () => {
  clean();
  mainApp.innerHTML = `
    <h1 class="gameOver">GAME OVER</h1>   
    `;
  retryBtn();
};
