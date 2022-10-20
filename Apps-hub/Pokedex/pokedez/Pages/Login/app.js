import { hubSite } from "../HubMenu/app";

export const initLoginPage = () => {
  document.querySelector("#app").innerHTML = `
    <div class="container">
        <h1>GitHub Game's Board</h1>
        <form>
          <input type="text" id="identificator"/>
          <button type="button" class="btn-login">Login</button>
        </form>
    </div>
    `;

  shootingEvent();
};
const limit = (value) => {
  console.log(value);
  //Super useful the .match(/^[A-Za-z]+$/) <-----------
  if (value.match(/^[A-Za-z]+$/) && value.length > 3) {
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
