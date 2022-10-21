//here we select the colors we are going to use:
export const randomColor = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let newColor = `rgb(${x},${y},${z})`;
  document.body.style.background = newColor;
};

////////////////

//MUCHO MÁS LIMPIO

const getColor = () => randomRGB();

const getNumber = () => `${Math.floor(Math.random() * 256)}`;

const randomRGB = () => `rgb (${getNumber()},${getNumber()},${getNumber()})`;
