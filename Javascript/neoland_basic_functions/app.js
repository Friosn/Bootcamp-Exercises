//Iteration#1
function sum(numberOne, numberTwo) {
  return Math.max(numberOne, numberTwo);
}

console.log(sum(8, 10)); //Checked

//Iteration#2
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const findLongestString = () => {
  let longestWord = "";
  for (let index = 0; index < avengers.length; index++) {
    const element = avengers[index];

    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }
  return longestWord;
};

console.log(findLongestString());

//Iteration#3 crear un accumulator
const numberss = [1, 2, 3, 5, 45, 37, 58];

const sumAll = numberss.reduce(
  (accumulator, eachNumber) => accumulator + eachNumber,
  0
);

console.log(sumAll);

//Iteration#4
const numbers = [12, 21, 38, 5, 45, 37, 6];

const sumeAll = numbers.reduce(
  (accumulator1, eachNumber1) => accumulator1 + eachNumber1,
  0
);

const average = sumeAll / numbers.length;

console.log(average);

//Iteration#5
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const averageWord = () => {
  let totalSum = 0;
  for (let index = 0; index < mixedElements.length; index++) {
    const element = mixedElements[index];
    if (typeof element === "number") {
      totalSum = element + totalSum;
    } else {
      totalSum = element.length + totalSum;
    }
  }
  return totalSum;
};

console.log(averageWord());

//Iteration#6 -----------------------------------------

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

const removeDuplicates = duplicates.filter((noDuplicate, i) => {
  return i === duplicates.indexOf(noDuplicate);
});
console.log(removeDuplicates);

//Iteration#7 ------------------------------

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName() {
  if (nameFinder.indexOf("Logan")) {
    console.log(true);
    console.log(nameFinder.indexOf("Logan"));
  } else {
    console.log(false);
  }
}

finderName();
//Iteration#8
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
const repeatedWords = [];
const repeatCounter = (words) => {
  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    let wordCounter = 0;
    for (let i = index; i < words.length; i++) {
      let repeatedWord = words[i];
      if (word === repeatedWord) {
        wordCounter += 1;
      }
    }
    repeatedWords.push(`The word ${word} is ${wordCounter} times repeated`);
  }
  /* for (let x = 0; x < repeatedWords.length; x++) {
    const element = repeatedWords[x];
    if (element !== repeatedWords.indexOf(element)) {
      repeatedWords.splice(x, 1);
    }
  } */
  return repeatedWords;
};

console.log(repeatCounter(counterWords));

//SOLUCIÓN DE CRISS --> Increíblemente guay

const counterWords2 = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
let totalCount = [];
const repeatCounter2 = (elements) => {
  elements.forEach((element) => {
    totalCount[element] = totalCount[element] + 1 || 1;
  });
  return totalCount;
};
console.log(repeatCounter2(counterWords2));
