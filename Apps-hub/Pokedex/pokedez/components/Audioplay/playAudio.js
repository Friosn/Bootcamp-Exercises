export const playAudio = (source) => {
  const audio = document.createElement("audio");
  audio.src = source;
  const play = () => audio.play();
  play();
};
