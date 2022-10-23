import "./style.css";
import { clean } from "../../../utils/cleaner";
import { gameOver } from "../../../components/GameOver/gameOver";
import { playAudio } from "../../../components/Audioplay/playAudio";
import { retryBtn } from "../../../components/GameOver/gameOver";

const quiz = [
  {
    question:
      "Select the right order of the three richest persons in the world?",
    answer: {
      a: "Jeff Bezos, Elon Musk, Bill Gates",
      b: "Elon Musk, Jeff Bezos, Warren Buffett",
      c: "Elon Musk, Jeff Bezos, Bernard Arnault",
    },
    correctAnswer: "c",
  },
  {
    question: "How many mass extinctions are there?",
    answer: {
      a: "5",
      b: "6",
      c: "7",
    },
    correctAnswer: "b" || "c",
  },
  {
    question: "What country has the highest life expectancy?",
    answer: {
      a: "Japan",
      b: "Switzerland",
      c: "Hong Kong",
    },
    correctAnswer: "c",
  },
  {
    question: "What illness was commonly spread on pirate ships?",
    answer: {
      a: "Scurvy",
      b: "Polio",
      c: "Yellow fever",
    },
    correctAnswer: "a",
  },
  {
    question: "What is cynophobia?",
    answer: {
      a: "Fear of being alone in a cinema",
      b: "Fear of having secrets",
      c: "Fear of dogs",
    },
    correctAnswer: "c",
  },
  {
    question:
      "What is, generally speaking, the order of the 4 most useful lenguages to learn?",
    answer: {
      a: "English, Spanish, French, Chinese",
      b: "English, Chinese, Spanish, Arabic",
      c: "English, Chinese, Arabic, Spanish",
    },
    correctAnswer: "b",
  },
];

const mainApp = document.querySelector("#app");
const mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");
mainApp.appendChild(mainDiv);
let score = 0;
let pos = 0;

export const initQuiz = () => {
  playAudio("https://millionaire-school.netlify.app/sounds/easy.mp3");
  clean();
  firstProve();
};

const firstProve = () => {
  clean();
  /*  const scoreDiv = document.createElement("div");
  scoreDiv.classList.add("quizDivApp");
  scoreDiv.innerHTML = `YOUR SCORE : ${score}`; */
  mainApp.insertAdjacentHTML("beforeend", `<h2>YOUR SCORE : ${score}</h2>`);

  const quest = quiz[pos];
  mainApp.innerHTML += `
       <h2>${quest.question}</h2>
       
       <p><input type="checkbox" class="answer" id="a"><label for="a">${quest.answer.a}</label></p>
       <p><input type="checkbox" class="answer" id="b"><label for="b">${quest.answer.b}</label></p>
       <p><input type="checkbox" class="answer" id="c"><label for="c">${quest.answer.c}</label></p>
       `;

  const submitBtn = document.createElement("button");
  submitBtn.innerText = "SUBMIT";
  mainApp.appendChild(submitBtn);

  submitBtn.addEventListener("click", () => {
    let rightAnswer = "";
    const aaa = document.querySelector("#a");
    const bbb = document.querySelector("#b");
    const ccc = document.querySelector("#c");
    if (aaa.checked) {
      rightAnswer = "a";
    } else if (bbb.checked) {
      rightAnswer = "b";
    } else if (ccc.checked) {
      rightAnswer = "c";
    }

    if (rightAnswer === quest.correctAnswer) {
      playAudio(
        "https://millionaire-school.netlify.com/sounds/correct_answer.mp3"
      );
      score++;
      pos++;
      if (score === 6) {
        clean();
        mainApp.insertAdjacentHTML(
          "afterend",
          `<h1>NEOLANDER FOR THE WIN!!</h1>`
        );
        retryBtn();
      } else {
        firstProve();
      }
    } else {
      playAudio(
        "https://millionaire-school.netlify.app/sounds/wrong_answer.mp3"
      );
      gameOver();
    }
  });
};
