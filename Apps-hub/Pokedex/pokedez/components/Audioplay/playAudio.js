export const playAudio = (source) => {
  const audio = document.createElement("audio");
  audio.src = source;
  const play = () => audio.play();
  play();
};

export const stopAudio = (source) => {
  const audio = document.createElement("audio");
  audio.src = source;
  const stop = () => {
    audio.pause();
    audio.src = audio.src;
  };
  stop();
};
