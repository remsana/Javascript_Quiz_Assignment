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
    question: "5) Sum of the angles of a triangle?",
    options: ["180 degree", "360 degree", "90 degree"],
    answer: ["180 degree"],
  },
  {
    id: "Q6",
    inputType: "dropDown",
    question: "6) choose the right answer (4 – 5) – (13 – 18 + 2)?",
    options: ["-2", "2", "-1"],
    answer: ["2"],
  },
  {
    id: "Q7",
    inputType: "dropDown",
    question: "7) Approximate value of pi ( π )  ",
    options: ["22", "22.7", "3.14"],
    answer: ["3.14"],
  },
];

//------functions for creating the questions and options------//

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
let dropDown = (question, values, name) => {
  let heroQuestions = document.querySelector("#questions");
  let questionH3 = document.createElement("h3");
  questionH3.textContent = question;
  heroQuestions.appendChild(questionH3);

  let selectForDropDown = document.createElement("select");
  selectForDropDown.id = name;  
  heroQuestions.appendChild(selectForDropDown);

  let firstOption = document.createElement("option");
  firstOption.value = "firstOption";
  firstOption.textContent = "Select answer";  
  firstOption.style.visibility = "hidden";
  //firstOption.style.visibility = "disabled";
  // firstOption.style.visibility = "selected";
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
  let userAnswer = document.querySelector(
    `input[name='${name}']:checked`
  ).value;
  
  if (userAnswer == correctAnswer) {
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
    
  }); console.log(userAnswers);

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
let DropDownCheck = (correctAnswer, name) =>{
  let selectOptions = document.querySelector(`#${name}`);

  let userAnswer = selectOptions.options[selectOptions.selectedIndex].value;
  console.log(userAnswer + " : " + (userAnswer === correctAnswer));
  if (userAnswer === correctAnswer) {
    return 1;
  } return 0;
};

//add eventlistener for get results button (Submit)
let submit = document.querySelector("#submitButton");
submit.addEventListener("click", () => {
  let totalScore = 0;
  questions.forEach((object) => {
    if (object.inputType === "radio") {
      totalScore = totalScore + RadioBtnCheck(object.answer[0], object.id);
    } 
    else if(object.inputType === "checkBox"){
      totalScore = totalScore + CheckBoxCheck(object.answer) ;
    } else if (object.inputType === "dropDown"){
      totalScore = totalScore + DropDownCheck(object.answer[0], object.id);
    }
    console.log("each item's score " + totalScore);
  });
  console.log(totalScore);  

  //to get the message on DOM

  let message = document.querySelector("#message");
  let messageTag = document.createElement("p");
  message.appendChild(messageTag);

  if (totalScore == 7) {
    messageTag.textContent =
      "Congratulations! You got all the answers right! Your score is " + totalScore + ".";
      messageTag.style.color = "green";
  } else if (totalScore > (7/2)){
    messageTag.textContent = "Your score is " + totalScore + ".";
    messageTag.style.color = "orange";
  } else {
    messageTag.textContent = "Your score is " + totalScore + ".";
    messageTag.style.color = "red";
  }
});
