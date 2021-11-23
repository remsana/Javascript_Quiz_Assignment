console.log("Quiz App");

//for changing the background mode
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

//function for checking the results
let submit = document.querySelector("#submitButton");

submit.addEventListener("click", () => {
  let correctAnswers = 0;

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

  let checkboxes = document.querySelectorAll(".quest4Options");

  let corAnswers = ["Option 1", "Option 2"];
  let userAnswers = [];
  checkboxes.forEach((box) => {
    if (box.checked) {
      userAnswers.push(box.value);
    }
  });
  console.log(userAnswers);
  console.log(corAnswers);
  if (corAnswers[0] == userAnswers[0] && corAnswers[1] == userAnswers[1]) {
    console.log("true");
    correctAnswers++;
  }

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

  console.log(correctAnswers);
});


