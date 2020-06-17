let startButton = document.getElementById("button");
let humanWins = document.getElementById("humanPoints");
let computerWins = document.getElementById("computerPoints");
let gifSection = document.getElementById("gifSection");

let userInput;
let win = 0;
let compWin = 0;
function takeInput() {
  let compChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  userInput = prompt("Pick your weapon: {Paper, Scissors, Rock}");
  let inputValue;
  if (
    userInput === "Paper" ||
    userInput === "paper" ||
    userInput === "P" ||
    userInput === "p"
  ) {
    inputValue = 1;
    if (inputValue == 1 && compChoice == 1) {
      alert("Draw!!");
    } else if (inputValue == 1 && compChoice == 3) {
      alert("You Won!!");
      gifSection.src = "h-kickrobot.gif";
      win++;
    } else if (inputValue == 1 && compChoice == 2) {
      alert("You Lost");
      gifSection.src = "r-futurama.gif";
      compWin++;
    }
  } else if (
    userInput === "Scissors" ||
    userInput === "scissors" ||
    userInput === "S" ||
    userInput === "s"
  ) {
    inputValue = 2;
    if (inputValue == 2 && compChoice == 2) {
      alert("Draw!!");
    } else if (inputValue == 2 && compChoice == 1) {
      alert("You Won!!");
      gifSection.src = "h-robotfail.gif";
      win++;
    } else if (inputValue == 2 && compChoice == 3) {
      alert("You Lost");
      gifSection.src = "r-dance.gif";
      compWin++;
    }
  } else if (
    userInput === "Rock" ||
    userInput === "rock" ||
    userInput === "R" ||
    userInput === "r"
  ) {
    inputValue = 3;
    if (inputValue == 3 && compChoice == 3) {
      alert("Draw!!");
    } else if (inputValue == 3 && compChoice == 2) {
      alert("You Won!!");
      gifSection.src = "h-robotfail.gif";
      win++;
    } else if (inputValue == 3 && compChoice == 1) {
      alert("You Lost");
      gifSection.src = "r-humanfail.gif";
      compWin++;
    }
  } else {
    alert("The String Entered is Invalid. Try Again");
  }

  humanWins.innerHTML = win;
  computerWins.innerHTML = compWin;
}

function compare() {
  //let a = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  console.log(a);
}

startButton.addEventListener("click", takeInput);
