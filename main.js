console.log("Quiz App");

//for changing the background to light or dark mode
let darkModeBtn = document.querySelector("#darkMode");
let i = 0;

darkModeBtn.addEventListener("click", () => {
  if (i === 0) {
    document.body.style.background = "rgb(51,58,70)";
    document.body.style.color = "white";
    darkModeBtn.textContent = "light mode";
    i = 1;
  } else if (i === 1) {
    document.body.style.background = "rgb(232,233,249)";
    document.body.style.color = "black";
    darkModeBtn.textContent = "dark mode";
    i = 0;
  }
});

//Array of Objects

let questions = [
  {
    id: "Q1",
    number: "1",
    inputType: "radio",
    question: "Mean is the average of the data points present in the dataset.",
    options: [true, false],
    answer: ["true"],
  },
  {
    id: "Q2",
    number: "2",
    inputType: "radio",
    question: "The product of two positive numbers is NOT positive.",
    options: [true, false],
    answer: ["false"],
  },
  {
    id: "Q3",
    number: "3",
    inputType: "radio",
    question: "The diagonals of a square intersect at right angles.",
    options: [true, false],
    answer: ["true"],
  },
  {
    id: "Q4",
    number: "4",
    inputType: "dropDown",
    question: "What is the length of x?",    
    image: "img/rightangle.png",
    options: ["5", "7", "6"],
    answer: ["5"],
  },
  {
    id: "Q5",
    number: "5",
    inputType: "dropDown",
    question: "What is the measure of angle A in the figure below? Choose the right option.",
    image: "img/Geometry.png",
    options: ["51 degrees", "42 degrees", "87 degrees"],
    answer: ["87 degrees"],
  },
  {
    id: "Q6",
    number: "6",
    inputType: "dropDown",
    question: "Which of the following pairs could be the length and width of the rectangle? ",
    image: "img/Algebra.png",
    options: ["4x and 6x", "2 and 2x - 3", "4 and x - 6"],
    answer: ["2 and 2x - 3"],
  },
  {
    id: "Q7",
    number: "7",
    inputType: "checkBox",
    question: "(Multiple choice) Which of the below fractions convert to 0.25 in decimal form?",
    options: ["25/125", "25/100", "1/4", "1/25", "2/10"],
    answer: ["25/100", "1/4"],
  },  
];

//------functions for creating the questions and options------//

//radio buttons
let radioButton = (question, values, name, number) => {
  let heroQuestions = document.querySelector("#questions");

  let eachQuestion = document.createElement("div");
  eachQuestion.id = "individualQuestion";
  heroQuestions.appendChild(eachQuestion);

  let questionNumber = document.createElement("h2");
  questionNumber.textContent = `Question ${number}`;
  questionNumber.style.color = "red";
  eachQuestion.appendChild(questionNumber);

  let questionH3 = document.createElement("h3");
  questionH3.textContent = question;
  eachQuestion.appendChild(questionH3);

  values.forEach((value) => {
    let questionInput = document.createElement("input");
    questionInput.type = "radio";
    questionInput.value = value;
    questionInput.name = name;
    eachQuestion.appendChild(questionInput);

    let labelValue = document.createElement("label");
    labelValue.innerHTML += questionInput.value;
    eachQuestion.appendChild(labelValue);

    let breakTag = document.createElement("br");
    eachQuestion.appendChild(breakTag);

  });
};

//checkbox
let checkBox = (question, values, number) => {
  let heroQuestions = document.querySelector("#questions");

  let eachQuestion = document.createElement("div");
  eachQuestion.id = "individualQuestion";
  heroQuestions.appendChild(eachQuestion);

  let questionNumber = document.createElement("h2");
  questionNumber.textContent = `Question ${number}`;
  questionNumber.style.color = "red";
  eachQuestion.appendChild(questionNumber);

  let questionH3 = document.createElement("h3");
  questionH3.textContent = question;
  eachQuestion.appendChild(questionH3);

  values.forEach((value) => {
    let questionInput = document.createElement("input");
    questionInput.type = "checkbox";
    questionInput.value = value;
    questionInput.className = "checkboxOptions";
    eachQuestion.appendChild(questionInput);

    let labelValue = document.createElement("label");
    labelValue.innerHTML += questionInput.value;
    eachQuestion.appendChild(labelValue);

    let breakTag = document.createElement("br");
    eachQuestion.appendChild(breakTag);
  });
};

//dropdowns
let dropDown = (question, values, name, image, number) => {
  let heroQuestions = document.querySelector("#questions");

  let eachQuestion = document.createElement("div");
  eachQuestion.id = "individualQuestion";
  heroQuestions.appendChild(eachQuestion);

  let questionNumber = document.createElement("h2");
  questionNumber.textContent = `Question ${number}`;
  questionNumber.style.color = "red";
  eachQuestion.appendChild(questionNumber);

  let questionH3 = document.createElement("h3");
  questionH3.textContent = question;
  eachQuestion.appendChild(questionH3);

if (image){
  let questionImg = document.createElement("img");
  questionImg.src = image;
  questionImg.id = `image${name}`;
  
  heroQuestions.appendChild(questionImg); }

  let selectForDropDown = document.createElement("select");
  selectForDropDown.id = name;
  eachQuestion.appendChild(selectForDropDown);

  let firstOption = document.createElement("option");
  firstOption.style.display = "none";
  firstOption.textContent = "Select answer";

  selectForDropDown.appendChild(firstOption);

  values.forEach((value) => {
    let questionInput = document.createElement("option");
    questionInput.value = value;
    questionInput.textContent = value;
    selectForDropDown.appendChild(questionInput);
  });
};

//printing to DOM

questions.forEach((object) => {
  if (object.inputType == "radio") {
    radioButton(object.question, object.options, object.id, object.number);
  } else if (object.inputType == "checkBox") {
    checkBox(object.question, object.options, object.number);
  } else if (object.inputType == "dropDown") {
    dropDown(object.question, object.options, object.id, object.image, object.number);
  }
});

//-----functions for checking the results-----//

//for radio buttons

let RadioBtnCheck = (correctAnswer, name) => {
  let radioBtnOptions = document.querySelector(`input[name='${name}']`);
  console.log(!radioBtnOptions.checked);

  let userAnswer = document.querySelector(`input[name='${name}']:checked`);
  console.log(userAnswer);

  if (!userAnswer) {
    return (userAnswer = 0);
  }
  if (userAnswer.value === correctAnswer) {
    return 1;
  }
  return 0;
};

//for checkboxes
let CheckBoxCheck = (correctAnswer) => {
  let checkboxes = document.querySelectorAll(".checkboxOptions");
  let userAnswers = [];
  checkboxes.forEach((box) => {
    if (box.checked) {
      userAnswers.push(box.value);
    }
  });

  if (
    correctAnswer.length === userAnswers.length &&
    correctAnswer[0] === userAnswers[0] &&
    correctAnswer[1] === userAnswers[1]
  ) {
    return 1;
  }
  return 0;
};

//for dropdown
let DropDownCheck = (correctAnswer, name) => {
  let selectOptions = document.querySelector(`#${name}`);

  let userAnswer = selectOptions.options[selectOptions.selectedIndex].value;
  //console.log(userAnswer + " : " + (userAnswer === correctAnswer));
  if (userAnswer === correctAnswer) {
    return 1;
  }
  return 0;
};

//add eventlistener for get results button (Submit)
let submit = document.querySelector("#submitButton");
submit.addEventListener("click", () => {
  let totalScore = 0;
  questions.forEach((object) => {
    if (object.inputType === "radio") {
      totalScore = totalScore + RadioBtnCheck(object.answer[0], object.id);
      console.log(totalScore);
    } else if (object.inputType === "checkBox") {
      totalScore = totalScore + CheckBoxCheck(object.answer);
    } else if (object.inputType === "dropDown") {
      totalScore = totalScore + DropDownCheck(object.answer[0], object.id);
    }
  });

  //to get the message on DOM

  let messageTag = document.querySelector("#resultMessage");
  messageTag.textContent = "";
  

  if (totalScore == 7) {
    messageTag.textContent =
      "Congratulations! You got all the answers right! Your score is " +
      totalScore +
      ".";
    messageTag.style.color = "green";
    messageTag.style.fontWeight = "bold";

    let trophy = document.createElement("img");
    trophy.src = "img/trophy.png";
    trophy.style.width = "25px";
    trophy.style.height = "25px";
    messageTag.appendChild(trophy);
  } else if (totalScore > 7 / 2) {
    messageTag.textContent =
      "You scored " + totalScore + " out of " + questions.length + ".";
    messageTag.style.color = "orange";
    messageTag.style.fontWeight = "bold";
  } else {
    messageTag.textContent =
      "You scored " + totalScore + " out of " + questions.length + ".";
    messageTag.style.color = "red";
    messageTag.style.fontWeight = "bold";
  }
});
