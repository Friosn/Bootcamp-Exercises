const createHeader = () => {
  const getHeader = document.querySelector("header");
  getHeader.innerHTML = `
    <div>
        <input type="text" id="myInput" placeholder="Search for Pokemon (I Gen)"/>
        <button class="btnInput" id="btnInput"><img src="https://cdn3.emoji.gg/emojis/6126-pokeball.gif"/></button>
    </div>`;
};
