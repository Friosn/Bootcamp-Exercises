import { initQuiz } from "../../Pages/Games/Quiz/quiz";
import { clean } from "../../utils/cleaner";

const mainApp = document.querySelector("#app");

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
    <h1>GAME OVER</h1>   
    <p>Sometimes shit happens, mate</p>
    `;
  retryBtn();
};
