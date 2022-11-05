import { hubSite } from "../HubMenu/app";
import { randomColor } from "../../components/color-changer/colorFlip";
import "./styleLogin.css";

export const initLoginPage = () => {
  document.querySelector("#app").innerHTML = `
    <div class="container">
        <h1 class="title">GitHub Game's Board</h1>
        <form class="logIn">
          <input type="text" placeholder="Nickname here" id="identificator"/>
         </form>
         <button type="button" class="btn-login">Login</button>
    </div>
    `;

  shootingEvent();
};

const limit = (value) => {
  console.log(value);
  //Super useful the .match(/^[A-Za-z]+$/) <-----------
  if (value.match(/^[A-Za-z]+$/) && value.length > 3) {
    window.localStorage.setItem(
      "name",
      JSON.stringify(document.querySelector("#identificator").value)
    );
    hubSite();
  } else {
    alert("You gotta write a real name, or at least kinda real");
  }
};

const shootingEvent = () => {
  const inputName = document.querySelector("#identificator");
  const btnLogin = document.querySelector(".btn-login");

  btnLogin.addEventListener("click", () => limit(inputName.value));
};
