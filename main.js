console.log("Quiz App");

//for changing the background to light or dark mode
let darkModeBtn = document.querySelector("#darkMode");
let i = 0;

darkModeBtn.addEventListener("click", () => {
  if (i === 0) {  
    document.body.style.background = "black";     
    document.body.style.color = "white";
    darkModeBtn.textContent = "light mode";
    i = 1;
  } else if (i === 1) {       
    document.body.style.background = "white";
    document.body.style.color = "black";
    darkModeBtn.textContent = "dark mode";
    i = 0;
  }
});

//Array of Objects

let questions = [
  {
    id: "Q1",
    inputType: "radio",
    question: "1) 1 + 1 is 2",
    options: [true, false],
    answer: ["true"],
  },
  {
    id: "Q2",
    inputType: "radio",
    question: "2) 1 - 1 is 2",
    options: [true, false],
    answer: ["false"],
  },
  {
    id: "Q3",
    inputType: "radio",
    question: "3) 1 * 1 is 1",
    options: [true, false],
    answer: ["true"],
  },
  {
    id: "Q4",
    inputType: "checkBox",
    question: "4) Square root of 25",
    options: ["25", "-5", "5", "-25", "none"],
    answer: ["-5", "5"],
  },
  {
    id: "Q5",
    inputType: "dropDown",
    question: "5) Sum of the angles of a triangle is:",
    options: ["180 degree", "360 degree", "90 degree"],
    answer: ["180 degree"],
  },
  {
    id: "Q6",
    inputType: "dropDown",
    question: "6) Choose the right answer (4 – 5) – (13 – 18 + 2):",
    options: ["-2", "2", "-1"],
    answer: ["2"],
  },
  {
    id: "Q7",
    inputType: "dropDown",
    question: "7) Approximate value of pi ( π ) is: ",
    options: ["22", "22.7", "3.14"],
    answer: ["3.14"],
  },
];

//------functions for creating the questions and options------//

//radio buttons
let radioButton = (question, values, name) => {
  let heroQuestions = document.querySelector("#questions");

  let eachQuestion = document.createElement("div");
  eachQuestion.id = "individualQuestion";
  heroQuestions.appendChild(eachQuestion);

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
  });
};

//checkbox
let checkBox = (question, values) => {
  let heroQuestions = document.querySelector("#questions");

  let eachQuestion = document.createElement("div");
  eachQuestion.id = "individualQuestion";
  heroQuestions.appendChild(eachQuestion);

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
  });
};

//dropdowns
let dropDown = (question, values, name) => {
  let heroQuestions = document.querySelector("#questions");

  let eachQuestion = document.createElement("div");
  eachQuestion.id = "individualQuestion";
  heroQuestions.appendChild(eachQuestion);

  let questionH3 = document.createElement("h3");
  questionH3.textContent = question;
  eachQuestion.appendChild(questionH3);

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
    radioButton(object.question, object.options, object.id);
  } else if (object.inputType == "checkBox") {
    checkBox(object.question, object.options);
  } else if (object.inputType == "dropDown") {
    dropDown(object.question, object.options, object.id);
  }
});

//-----functions for checking the results-----//

//for radio buttons

let RadioBtnCheck = (correctAnswer, name) => {
  let radioBtnOptions = document.querySelector(`input[name='${name}']`);
  console.log(!radioBtnOptions.checked);
  
    let userAnswer = document.querySelector(`input[name='${name}']:checked`);
    console.log(userAnswer);

    if (!userAnswer){ return userAnswer = 0}
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
      totalScore +       ".";
    messageTag.style.color = "green";
    messageTag.style.fontWeight = "bold";
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
