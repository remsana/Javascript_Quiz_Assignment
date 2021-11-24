console.log("Quiz App");

//for changing the background to light or dark mode
let darkModeBtn = document.querySelector("#darkMode");
let i = 0;

darkModeBtn.addEventListener("click", () => {
  console.log("clicked");

  if (i === 0) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    darkModeBtn.textContent = "light mode";
    i = 1;
  } else if (i === 1) {
    console.log("clicked again");
    document.body.style.backgroundColor = "white";
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
    question: "1 + 1 is 2",
    options: [true, false],
    answer: [true],
  },
  {
    id: "Q2",
    inputType: "radio",
    question: "1 - 1 is 2",
    options: [true, false],
    answer: [false],
  },
  {
    id: "Q3",
    inputType: "radio",
    question: "1 * 1 is 1",
    options: [true, false],
    answer: [true],
  },
  {
    id: "Q4",
    inputType: "checkBox",
    question: "Question No.4",
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    answer: ["Option 2", "Option 3"],
  },
  {
    id: "Q5",
    inputType: "dropDown",
    question: "Question No.5",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: ["Option 3"],
  },
  {
    id: "Q6",
    inputType: "dropDown",
    question: "Question No.6",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: ["Option 2"],
  },
  {
    id: "Q7",
    inputType: "dropDown",
    question: "Question No.7",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: ["Option 1"],
  },
];

//functions for creating the questions and options

//radio buttons
let radioButton = (question, values, name) => {
  let heroQuestions = document.querySelector("#questions");
  let questionH3 = document.createElement("h3");
  questionH3.textContent = question;
  heroQuestions.appendChild(questionH3);

  values.forEach((value) => {
    let questionInput = document.createElement("input");
    questionInput.type = "radio";
    questionInput.value = value;
    questionInput.name = name;
    heroQuestions.appendChild(questionInput);

    let labelValue = document.createElement("label");
    labelValue.innerHTML += questionInput.value;
    heroQuestions.appendChild(labelValue);
  });
};
//checkbox
let checkBox = (question, values) => {
  let heroQuestions = document.querySelector("#questions");
  let questionH3 = document.createElement("h3");
  questionH3.textContent = question;
  heroQuestions.appendChild(questionH3);

  values.forEach((value) => {
    let questionInput = document.createElement("input");
    questionInput.type = "checkbox";
    questionInput.value = value;
    questionInput.className = "checkboxOptions";  
    heroQuestions.appendChild(questionInput);

    let labelValue = document.createElement("label");
    labelValue.innerHTML += questionInput.value;
    heroQuestions.appendChild(labelValue);
  });
};

//dropdowns
let dropDown = (question, values) => {
  let heroQuestions = document.querySelector("#questions");
  let questionH3 = document.createElement("h3");
  questionH3.textContent = question;
  heroQuestions.appendChild(questionH3);

  let selectForDropDown = document.createElement("select");
  heroQuestions.appendChild(selectForDropDown);

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
    dropDown(object.question, object.options);
  }
});

//function for checking the results
let submit = document.querySelector("#submitButton");

//for radio buttons
let RadioBtnCheck = ((correctAnswer, name) =>{
  let userAnswer = document.querySelector(
    `input[name='${name}']:checked`).value;
  console.log(userAnswer);
  if (userAnswer === correctAnswer) {
    return 1;         
  } return 0;
}); 

//for checkboxes
let CheckBoxCheck = ((correctAnswer) =>{
  let checkboxes = document.querySelectorAll(".checkboxOptions");
  let userAnswers = [];

  checkboxes.forEach((box) => {
    if (box.checked) {
      userAnswers.push(box.value);
    }
  });
  console.log(userAnswers);
  
  if (correctAnswer[0] === userAnswers[0] && correctAnswer[1] === userAnswers[1]) {
    return 1;
  } return 0;
}); 

//add eventlistener
submit.addEventListener("click", () => {
  let totalScore = 0;
  questions.forEach((object)=>{
    if (object.inputType === "radio"){
      totalScore = totalScore + RadioBtnCheck(object.answer, object.id);  }
      // else if(object.inputType === "checkBox"){
      //   totalScore = totalScore + CheckBoxCheck(object.answer) ;
      // }
       
  });
  console.log(totalScore);

  //radio Buttons
  // let userAnswer1 = document.querySelector(
  //   "input[name='question1']:checked"
  // ).value;
  // console.log(userAnswer1);
  // if (userAnswer1 === "True") {
  //   correctAnswers++;
  // }

  // let userAnswer2 = document.querySelector(
  //   "input[name='question2']:checked"
  // ).value;
  // console.log(userAnswer2);
  // if (userAnswer2 === "False") {
  //   correctAnswers++;
  // }

  // let userAnswer3 = document.querySelector(
  //   "input[name='question3']:checked"
  // ).value;
  // console.log(userAnswer3);
  // if (userAnswer3 === "True") {
  //   correctAnswers++;
  // }

  // //checkBoxes
  // let checkboxes = document.querySelectorAll(".quest4Options");

  // let corAnswers = ["Option 1", "Option 2"];
  // let userAnswers = [];
  // checkboxes.forEach((box) => {
  //   if (box.checked) {
  //     userAnswers.push(box.value);
  //   }
  // });
  // console.log(userAnswers);
  // console.log(corAnswers);
  // if (corAnswers[0] == userAnswers[0] && corAnswers[1] == userAnswers[1]) {
  //   console.log("true");
  //   correctAnswers++;
  // }

  // //dropdown
  // let question5Options = document.querySelector("#question5List");
  // let userAnswer5 =
  //   question5Options.options[question5Options.selectedIndex].value;
  // if (userAnswer5 === "Option 1") {
  //   correctAnswers++;
  // }

  // let question6Options = document.querySelector("#question6List");
  // let userAnswer6 =
  //   question6Options.options[question6Options.selectedIndex].value;
  // if (userAnswer6 === "Option 1") {
  //   correctAnswers++;
  // }

  // let question7Options = document.querySelector("#question7List");
  // let userAnswer7 =
  //   question7Options.options[question7Options.selectedIndex].value;
  // if (userAnswer7 === "Option 1") {
  //   correctAnswers++;
  // }

  // console.log(countOfCorrectAnswers);

  // let message = document.querySelector("#message");
  // let messageTag = document.createElement("p");
  // message.appendChild(messageTag);

  // if (countOfCorrectAnswers == 7) {
  //   messageTag.textContent =
  //     "Congratulations!! You got all the answers right! Great work!";
  // } else {
  //   messageTag.textContent = "Your score is " + countOfCorrectAnswers + ".";
  // }
});
