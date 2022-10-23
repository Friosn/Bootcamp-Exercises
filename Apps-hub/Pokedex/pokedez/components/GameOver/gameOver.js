import { clean } from "../../utils/cleaner";

export const gameOver = () => {
  clean();
  const mainApp = document.querySelector("#app");
  mainApp.innerHTML = `

    <h1>GAME OVER</h1>
     
    <p>Sometimes shit happens, mate</p>
    `;
};
