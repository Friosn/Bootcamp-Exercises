const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

/* data-function="toFilterStreamers"/>
  <button data-function="toShowFilterStreamers" */

const btnRefer = document.querySelector("button");
const callInput = document.querySelector('[data-function="toFilterStreamers"]');

btnRefer.addEventListener("click", (e) => {
  console.log(
    streamers.filter((streamer) => {
      return streamer.name.includes(e.valueInput.value);
    })
  );
});
