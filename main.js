console.log("Quiz App");

let darkModeBtn = document.querySelector("#darkMode");

let i = 0;

darkModeBtn.addEventListener("click", () => {
    console.log("clicked");
  
  if (i === 0) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    darkModeBtn.textContent = "change to light mode";
    i = 1;
  } else if (i === 1) {
    console.log("clicked again");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    darkModeBtn.textContent = "change to dark mode";
    i = 0;
  }
});
