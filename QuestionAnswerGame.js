//Getting start and game history buttons
const startBtn = document.getElementById("startbtn");
startBtn.addEventListener("click", startQuiz);
const historyBtn = document.getElementById("historybtn");
historyBtn.addEventListener("click", historyButton);

//Linking other HTML and CSS elements to javascript
const score = document.getElementById("score");
const retreatBtn = document.getElementById("retreat");
const quizContainer = document.getElementById("container");
const questionContainer = document.getElementById("questionContainer");
const answContainer1 = document.getElementById("anscontainer1");
const answContainer2 = document.getElementById("anscontainer2");
const answContainer3 = document.getElementById("anscontainer3");
const answContainer4 = document.getElementById("anscontainer4");
const questionText = document.getElementById("questionText");
const answButton1 = document.getElementById("answbtn1");
const answButton2 = document.getElementById("answbtn2");
const answButton3 = document.getElementById("answbtn3");
const answButton4 = document.getElementById("answbtn4");
const nextBtn = document.getElementById("nextbtn");
const retryBtn = document.getElementById("retrybtn");
const victoryText = document.getElementById("victoryText");
const failureText = document.getElementById("failureText");
const mainMenubtn = document.getElementById("mainMenu");
const scoreTable = document.getElementById("scoreBoardTable");
const scoreTableBody = document.getElementById("scoreBoardTableBody");
//score value
var scoreValue = 0;
score.innerText = scoreValue;

//Answer button event listeners
answButton1.addEventListener("click", chooseAnswer);
answButton2.addEventListener("click", chooseAnswer);
answButton3.addEventListener("click", chooseAnswer);
answButton4.addEventListener("click", chooseAnswer);

//Next question button event listener
nextBtn.addEventListener("click", nextQuestionSet);

//Retry Button event listener
retryBtn.addEventListener("click", startQuiz);

//Retreat button event listener
retreatBtn.addEventListener("click", gamefinished);

//Main menu button event listener
mainMenubtn.addEventListener("click", reloadGame);
//answer variables (edited at questionShow)
var answer1, answer2, answer3, answer4;

//Question randomizer variables (edited at nextQuestionSet)
let randomQuestionslv1,
  randomQuestionslv2,
  randomQuestionslv3,
  randomQuestionslv4,
  randomQuestionslv5,
  currentQuestion;

//This function starts the game when the Start button is clicked, sorts the objects array
//and display the items in screen
function startQuiz() {
  console.log("started");
  failureText.classList.add("hidden");
  victoryText.classList.add("hidden");
  startBtn.classList.add("hidden");
  historyBtn.classList.add("hidden");
  retryBtn.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  answButton1.classList.remove("hidden");
  answButton2.classList.remove("hidden");
  answButton3.classList.remove("hidden");
  answButton4.classList.remove("hidden");
  questionContainer.classList.remove("hidden");
  answContainer1.classList.remove("hidden");
  answContainer2.classList.remove("hidden");
  answContainer3.classList.remove("hidden");
  answContainer4.classList.remove("hidden");
  retreatBtn.classList.remove("hidden");
  score.classList.remove("hidden");
  randomQuestionslv1 = quizQuestionsLv1.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  randomQuestionslv2 = quizQuestionsLv2.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  randomQuestionslv3 = quizQuestionsLv3.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  randomQuestionslv4 = quizQuestionsLv4.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  randomQuestionslv5 = quizQuestionsLv5.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  nextQuestionSet();
}
//This function sets the next question, checks the category acording to score and randomize
//the questions within each category
function nextQuestionSet() {
  nextBtn.classList.add("hidden");
  if (scoreValue < 5) {
    questionShow1(randomQuestionslv1[currentQuestion]);
    clearVisuals();
  } else if (scoreValue >= 5 && scoreValue <= 9) {
    questionShow2(randomQuestionslv2[currentQuestion]);
    clearVisuals();
  } else if (scoreValue >= 10 && scoreValue <= 14) {
    questionShow3(randomQuestionslv3[currentQuestion]);
    clearVisuals();
  } else if (scoreValue >= 15 && scoreValue <= 19) {
    questionShow4(randomQuestionslv4[currentQuestion]);
    clearVisuals();
  } else if (scoreValue >= 20) {
    questionShow5(randomQuestionslv5[currentQuestion]);
    clearVisuals();
  }
}
//these functions shows the questions to the user, check the correct answer for each one and
//prepare them for the user to choose
function questionShow1(questionlvl1) {
  questionText.innerText = questionlvl1.questionlvl1;
  answButton1.innerText = questionlvl1.answers[0].text;
  answButton2.innerText = questionlvl1.answers[1].text;
  answButton3.innerText = questionlvl1.answers[2].text;
  answButton4.innerText = questionlvl1.answers[3].text;

  var CheckCorrect1 = {
    check: questionlvl1.answers[0].correct,
  };
  var CheckCorrect2 = {
    check: questionlvl1.answers[1].correct,
  };
  var CheckCorrect3 = {
    check: questionlvl1.answers[2].correct,
  };

  var CheckCorrect4 = {
    check: questionlvl1.answers[3].correct,
  };

  if (CheckCorrect1.check == true) {
    answer1 = "correct";
    return answer1;
  }
  if (CheckCorrect2.check == true) {
    answer2 = "correct";
    return answer2;
  }
  if (CheckCorrect3.check == true) {
    answer3 = "correct";
    return answer3;
  }
  if (CheckCorrect4.check == true) {
    answer4 = "correct";
    return answer4;
  }
}

function questionShow2(questionlvl2) {
  questionText.innerText = questionlvl2.questionlvl2;
  answButton1.innerText = questionlvl2.answers[0].text;
  answButton2.innerText = questionlvl2.answers[1].text;
  answButton3.innerText = questionlvl2.answers[2].text;
  answButton4.innerText = questionlvl2.answers[3].text;

  var CheckCorrect1 = {
    check: questionlvl2.answers[0].correct,
  };
  var CheckCorrect2 = {
    check: questionlvl2.answers[1].correct,
  };
  var CheckCorrect3 = {
    check: questionlvl2.answers[2].correct,
  };

  var CheckCorrect4 = {
    check: questionlvl2.answers[3].correct,
  };

  if (CheckCorrect1.check == true) {
    answer1 = "correct";
    return answer1;
  }
  if (CheckCorrect2.check == true) {
    answer2 = "correct";
    return answer2;
  }
  if (CheckCorrect3.check == true) {
    answer3 = "correct";
    return answer3;
  }
  if (CheckCorrect4.check == true) {
    answer4 = "correct";
    return answer4;
  }
}

function questionShow3(questionlvl3) {
  questionText.innerText = questionlvl3.questionlvl3;
  answButton1.innerText = questionlvl3.answers[0].text;
  answButton2.innerText = questionlvl3.answers[1].text;
  answButton3.innerText = questionlvl3.answers[2].text;
  answButton4.innerText = questionlvl3.answers[3].text;

  var CheckCorrect1 = {
    check: questionlvl3.answers[0].correct,
  };
  var CheckCorrect2 = {
    check: questionlvl3.answers[1].correct,
  };
  var CheckCorrect3 = {
    check: questionlvl3.answers[2].correct,
  };

  var CheckCorrect4 = {
    check: questionlvl3.answers[3].correct,
  };

  if (CheckCorrect1.check == true) {
    answer1 = "correct";
    return answer1;
  }
  if (CheckCorrect2.check == true) {
    answer2 = "correct";
    return answer2;
  }
  if (CheckCorrect3.check == true) {
    answer3 = "correct";
    return answer3;
  }
  if (CheckCorrect4.check == true) {
    answer4 = "correct";
    return answer4;
  }
}

function questionShow4(questionlvl4) {
  questionText.innerText = questionlvl4.questionlvl4;
  answButton1.innerText = questionlvl4.answers[0].text;
  answButton2.innerText = questionlvl4.answers[1].text;
  answButton3.innerText = questionlvl4.answers[2].text;
  answButton4.innerText = questionlvl4.answers[3].text;

  var CheckCorrect1 = {
    check: questionlvl4.answers[0].correct,
  };
  var CheckCorrect2 = {
    check: questionlvl4.answers[1].correct,
  };
  var CheckCorrect3 = {
    check: questionlvl4.answers[2].correct,
  };

  var CheckCorrect4 = {
    check: questionlvl4.answers[3].correct,
  };

  if (CheckCorrect1.check == true) {
    answer1 = "correct";
    return answer1;
  }
  if (CheckCorrect2.check == true) {
    answer2 = "correct";
    return answer2;
  }
  if (CheckCorrect3.check == true) {
    answer3 = "correct";
    return answer3;
  }
  if (CheckCorrect4.check == true) {
    answer4 = "correct";
    return answer4;
  }
}

function questionShow5(questionlvl5) {
  questionText.innerText = questionlvl5.questionlvl5;
  answButton1.innerText = questionlvl5.answers[0].text;
  answButton2.innerText = questionlvl5.answers[1].text;
  answButton3.innerText = questionlvl5.answers[2].text;
  answButton4.innerText = questionlvl5.answers[3].text;

  var CheckCorrect1 = {
    check: questionlvl5.answers[0].correct,
  };
  var CheckCorrect2 = {
    check: questionlvl5.answers[1].correct,
  };
  var CheckCorrect3 = {
    check: questionlvl5.answers[2].correct,
  };

  var CheckCorrect4 = {
    check: questionlvl5.answers[3].correct,
  };

  if (CheckCorrect1.check == true) {
    answer1 = "correct";
    return answer1;
  }
  if (CheckCorrect2.check == true) {
    answer2 = "correct";
    return answer2;
  }
  if (CheckCorrect3.check == true) {
    answer3 = "correct";
    return answer3;
  }
  if (CheckCorrect4.check == true) {
    answer4 = "correct";
    return answer4;
  }
}
//this function allows the user to select a question, compares the selection with the
//correct answer and if the answer is right add +1 to the randomizer coutner to avoid
//repeating questions.
function chooseAnswer(e) {
  const selectedButton = e.target;
  console.log(e.target);
  //Sucess cases
  if (selectedButton == answButton1 && answer1 == "correct") {
    console.log("1 is right");
    answButton1.classList.add("right");
    answButton2.classList.add("wrong");
    answButton3.classList.add("wrong");
    answButton4.classList.add("wrong");
    scoreValue = scoreValue + 1;
    score.innerText = scoreValue;
    nextBtn.classList.remove("hidden");
    currentQuestion++;
    console.log(currentQuestion);
    resetCurrentQuestion();
  } else if (selectedButton == answButton2 && answer2 == "correct") {
    console.log("2 is right");
    answButton1.classList.add("wrong");
    answButton2.classList.add("right");
    answButton3.classList.add("wrong");
    answButton4.classList.add("wrong");
    scoreValue = scoreValue + 1;
    score.innerText = scoreValue;
    nextBtn.classList.remove("hidden");
    currentQuestion++;
    console.log(currentQuestion);
    resetCurrentQuestion();
  } else if (selectedButton == answButton3 && answer3 == "correct") {
    console.log("3 is right");
    answButton1.classList.add("wrong");
    answButton2.classList.add("wrong");
    answButton3.classList.add("right");
    answButton4.classList.add("wrong");
    scoreValue = scoreValue + 1;
    score.innerText = scoreValue;
    nextBtn.classList.remove("hidden");
    currentQuestion++;
    console.log(currentQuestion);
    resetCurrentQuestion();
  } else if (selectedButton == answButton4 && answer4 == "correct") {
    console.log("4 is right");
    answButton1.classList.add("wrong");
    answButton2.classList.add("wrong");
    answButton3.classList.add("wrong");
    answButton4.classList.add("right");
    scoreValue = scoreValue + 1;
    score.innerText = scoreValue;
    nextBtn.classList.remove("hidden");
    currentQuestion++;
    console.log(currentQuestion);
    resetCurrentQuestion();
  }
  //failure cases
  else if (selectedButton != answButton1 && answer1 == "correct") {
    console.log("1 is wrong");
    answButton1.classList.add("right");
    answButton2.classList.add("wrong");
    answButton3.classList.add("wrong");
    answButton4.classList.add("wrong");
    gameOver();
  } else if (selectedButton != answButton2 && answer2 == "correct") {
    console.log("2 is wrong");
    answButton1.classList.add("wrong");
    answButton2.classList.add("right");
    answButton3.classList.add("wrong");
    answButton4.classList.add("wrong");
    gameOver();
  } else if (selectedButton != answButton3 && answer3 == "correct") {
    console.log("3 is wrong");
    answButton1.classList.add("wrong");
    answButton2.classList.add("wrong");
    answButton3.classList.add("right");
    answButton4.classList.add("wrong");
    gameOver();
  } else if (selectedButton != answButton4 && answer4 == "correct") {
    console.log("4 is wrong");
    answButton1.classList.add("wrong");
    answButton2.classList.add("wrong");
    answButton3.classList.add("wrong");
    answButton4.classList.add("right");
    gameOver();
  }
}
//this functions resets the visual feedback of the buttons and update the questions to show
//to the user according to score
function clearVisuals(
  questionlvl1,
  questionlvl2,
  questionlvl3,
  questionlvl4,
  questionlvl5
) {
  answButton1.classList.remove("right", "wrong");
  answButton2.classList.remove("right", "wrong");
  answButton3.classList.remove("right", "wrong");
  answButton4.classList.remove("right", "wrong");

  if (scoreValue <= 4) {
    questionShow1(questionlvl1);
  } else if (scoreValue >= 5 && scoreValue <= 9) {
    questionShow2(questionlvl2);
  } else if (scoreValue >= 10 && scoreValue <= 14) {
    questionShow3(questionlvl3);
  } else if (scoreValue >= 15 && scoreValue <= 19) {
    questionShow4(questionlvl4);
  } else if (scoreValue >= 20 && scoreValue <= 24) {
    questionShow5(questionlvl5);
  } else if (scoreValue == 25) {
    gamefinished();
  }
}
//this function resets the randomizer counter when it reaches 5 in order for the randomizer to
//sort all the questions of the next category.
function resetCurrentQuestion() {
  if (currentQuestion == 5) {
    currentQuestion = 0;
    console.log(currentQuestion);
  }
  answer1 = "";
  answer2 = "";
  answer3 = "";
  answer4 = "";
  return answer1, answer2, answer3, answer4;
}

// This function adds score to scoreboard
function updateScoreBoard() {
  const oldScoreBoard = localStorage.getItem("scoreboard");
  let newScore = [];
  if (oldScoreBoard) {
    newScore = [...JSON.parse(oldScoreBoard), scoreValue];
  } else {
    newScore.push(scoreValue);
  }
  localStorage.setItem("scoreboard", JSON.stringify(newScore));
}
// This function creates the board for the game history
function renderScoreBoard() {
  const currentScoreBoard = localStorage.getItem("scoreboard");
  if (scoreTable && currentScoreBoard) {
    let currentScore = JSON.parse(currentScoreBoard);
    currentScore.forEach((item) => {
      let row = scoreTableBody.insertRow(); //Create a line
      let cell = row.insertCell();
      cell.textContent = item;
      scoreTableBody.appendChild(row);
    });
  }
  mainMenubtn.classList.remove("hidden")
}

//This function manage the history button process
function historyButton() {
  console.log("history pressed");
  renderScoreBoard();
  scoreTable.classList.remove("hidden");
  startBtn.classList.add("hidden");
  historyBtn.classList.add("hidden");
}
//This function shows the game history screen (not implemented yet)
function openGameHistory() {}
//This function forces the game to stop when the answer is wrong
function gameOver() {
  updateScoreBoard();
  scoreValue = 0;
  score.innerText = scoreValue;
  failureText.classList.remove("hidden");
  startBtn.classList.add("hidden");
  historyBtn.classList.add("hidden");
  retryBtn.classList.remove("hidden");
  quizContainer.classList.add("hidden");
  answButton1.classList.add("hidden");
  answButton2.classList.add("hidden");
  answButton3.classList.add("hidden");
  answButton4.classList.add("hidden");
  questionContainer.classList.add("hidden");
  answContainer1.classList.add("hidden");
  answContainer2.classList.add("hidden");
  answContainer3.classList.add("hidden");
  answContainer4.classList.add("hidden");
  retreatBtn.classList.add("hidden");
  score.classList.add("hidden");

  console.log("gameOver");
}
//This function finish the game when the player retreats or when they win
function gamefinished() {
  updateScoreBoard();
  victoryText.classList.remove("hidden");
  var victoryContent = "congratulations! you got " + scoreValue + " points";
  victoryText.innerText = victoryContent;
  mainMenubtn.classList.remove("hidden");
  startBtn.classList.add("hidden");
  historyBtn.classList.add("hidden");
  retryBtn.classList.add("hidden");
  quizContainer.classList.add("hidden");
  answButton1.classList.add("hidden");
  answButton2.classList.add("hidden");
  answButton3.classList.add("hidden");
  answButton4.classList.add("hidden");
  questionContainer.classList.add("hidden");
  answContainer1.classList.add("hidden");
  answContainer2.classList.add("hidden");
  answContainer3.classList.add("hidden");
  answContainer4.classList.add("hidden");
  retreatBtn.classList.add("hidden");
  score.classList.add("hidden");
}
//This function reloads the game when the player click main menu
function reloadGame() {
  window.location.reload(false);
}

const quizQuestionsLv1 = [
  {
    questionlvl1: "What is the largest organ in the human body?",
    answers: [
      { text: "The Skin", correct: true },
      { text: "The Brain", correct: false },
      { text: "The Lungs", correct: false },
      { text: "The Stomach", correct: false },
    ],
  },
  {
    questionlvl1: "who invented the first functional phone?",
    answers: [
      { text: "Michel Faraday", correct: false },
      { text: "Alexander Graham Bell", correct: true },
      { text: "Thomas Alva Edison", correct: false },
      { text: "Nikola Tesla", correct: false },
    ],
  },
  {
    questionlvl1: "Where is Monaco located?",
    answers: [
      { text: "America", correct: false },
      { text: "Africa", correct: false },
      { text: "Europe", correct: true },
      { text: "Asia", correct: false },
    ],
  },
  {
    questionlvl1: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Setphen Hawkings", correct: false },
      { text: "Richard Feynman", correct: false },
      { text: "Albert Einstein", correct: true },
    ],
  },
  {
    questionlvl1: "How many planets are in the solar system?",
    answers: [
      { text: "10", correct: false },
      { text: "9", correct: false },
      { text: "12", correct: false },
      { text: "8", correct: true },
    ],
  },
];
const quizQuestionsLv2 = [
  {
    questionlvl2: "Who developed the theory of the Big Bang?",
    answers: [
      { text: "Sheldon Cooper", correct: false },
      { text: "Georges Lemaitre", correct: true },
      { text: "Marie Curie", correct: false },
      { text: "Michel Faraday", correct: false },
    ],
  },
  {
    questionlvl2: "What kind of star is The Sun?",
    answers: [
      { text: "Giant star", correct: false },
      { text: "Main sequence star", correct: true },
      { text: "Subdwarf star", correct: false },
      { text: "White Dwarf", correct: false },
    ],
  },
  {
    questionlvl2: "Where is Taiwan located?",
    answers: [
      { text: "Asia", correct: true },
      { text: "Oceania", correct: false },
      { text: "America", correct: false },
      { text: "Europe", correct: false },
    ],
  },
  {
    questionlvl2: "What is the deadliest pandemic in human history?",
    answers: [
      { text: "The spanish flu", correct: false },
      { text: "Covid19 pandemic", correct: false },
      { text: "The black death", correct: true },
      { text: "HIV AIDS global pandemic", correct: false },
    ],
  },
  {
    questionlvl2: "What is the equation for relativity?",
    answers: [
      { text: "F = GmM / r 2", correct: false },
      { text: "(∂ + m) ψ = 0", correct: false },
      { text: "a² + b² = c²", correct: false },
      { text: "E=MC²", correct: true },
    ],
  },
];

const quizQuestionsLv3 = [
  {
    questionlvl3: "What member of Queen is also an astrophysics?",
    answers: [
      { text: "Freddy Mercury", correct: false },
      { text: "Jhon Deacon", correct: false },
      { text: "Brian May", correct: true },
      { text: "Roger Taylor", correct: false },
    ],
  },
  {
    questionlvl3: "What happens to time at relativistic speeds?",
    answers: [
      { text: "Slows down", correct: true },
      { text: "Speeds up", correct: false },
      { text: "Stays the same", correct: false },
      { text: "Goes backwards", correct: false },
    ],
  },
  {
    questionlvl3: "Where is Belize located?",
    answers: [
      { text: "Asia", correct: false },
      { text: "America", correct: true },
      { text: "Africa", correct: false },
      { text: "Europe", correct: false },
    ],
  },
  {
    questionlvl3: "When was Constantinople conquered?",
    answers: [
      { text: "1509", correct: false },
      { text: "1492", correct: false },
      { text: "1387", correct: false },
      { text: "1453", correct: true },
    ],
  },
  {
    questionlvl3: "What is a black hole?",
    answers: [
      { text: "A incredibly dense region of space", correct: true },
      { text: "An actual hole in the universe", correct: false },
      { text: "An empty region in space", correct: false },
      { text: "A kind of star", correct: false },
    ],
  },
];

const quizQuestionsLv4 = [
  {
    questionlvl4: "How many moons does Saturn has?",
    answers: [
      { text: "12", correct: false },
      { text: "37", correct: false },
      { text: "60", correct: false },
      { text: "53", correct: true },
    ],
  },
  {
    questionlvl4: "What part of the brain deals with hearing and language?",
    answers: [
      { text: "Temporal lobe", correct: true },
      { text: "Occipital lobe", correct: false },
      { text: "Frontal lobe", correct: false },
      { text: "Parietal lobe", correct: false },
    ],
  },
  {
    questionlvl4: "What is the biggest moon in the solar system?",
    answers: [
      { text: "The Moon", correct: false },
      { text: "Ganymede", correct: true },
      { text: "Io", correct: false },
      { text: "Phobos", correct: false },
    ],
  },
  {
    questionlvl4:
      "What is the name of the project that created the first atomic bomb?",
    answers: [
      { text: "Project Washington", correct: false },
      { text: "Project Nevada", correct: false },
      { text: "Project Manhattan", correct: true },
      { text: "Project Lincoln", correct: false },
    ],
  },
  {
    questionlvl4: "Lagomorph, refers to what type of animal?",
    answers: [
      { text: "Frogs", correct: false },
      { text: "Birds", correct: false },
      { text: "crocodiles", correct: false },
      { text: "Rabbits", correct: true },
    ],
  },
];

const quizQuestionsLv5 = [
  {
    questionlvl5: "What was the main purpouse of Kepler Space Telescope?",
    answers: [
      { text: "Study exoplanets", correct: true },
      { text: "Study the Sun", correct: false },
      { text: "Study the center of the Galaxy", correct: false },
      { text: "Study black holes", correct: false },
    ],
  },
  {
    questionlvl5:
      "Whic of the next ones is NOT a fundamental principle of quantum mechanics?",
    answers: [
      { text: "Principle of superposition of states", correct: false },
      { text: "Principle of conservation of energy", correct: true },
      { text: "Dirac's razor", correct: false },
      { text: "Principle of Indeterminacy", correct: false },
    ],
  },
  {
    questionlvl5: "Which coutnry is the world's largest producer of uranium?",
    answers: [
      { text: "Russia", correct: false },
      { text: "Azerbaijan", correct: false },
      { text: "Kazakhstan", correct: true },
      { text: "China", correct: false },
    ],
  },
  {
    questionlvl5: "Of what tribe was Boudica the head?",
    answers: [
      { text: "Parisi", correct: false },
      { text: "Silures", correct: false },
      { text: "Iceni", correct: true },
      { text: "Brigantes", correct: false },
    ],
  },
  {
    questionlvl5: "In Geology What Period followed The Cretaceous?",
    answers: [
      { text: "Triassic", correct: false },
      { text: "Paleogene", correct: false },
      { text: "Permian", correct: false },
      { text: "Jurasic", correct: true },
    ],
  },
];
