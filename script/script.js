const playButton = document.querySelector("#submit");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");
const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}
function getPlayerChoice() {
  let choice = document.querySelector("#game");
  return choice.value;
}
function incrementPlayerScore() {
  let playerScore = document.querySelector("#playerScore");
  let number = playerScore.innerHTML;
  number++;
  playerScore.innerHTML = number;
}
function incrementComputerScore() {
  let computerScore = document.querySelector("#computerScore");
  let number = computerScore.innerHTML;
  number++;
  computerScore.innerHTML = number;
}
playButton.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();
  let round = document.querySelector("#round");
  let number = round.innerHTML;
  number++;
  round.innerHTML = number;
  switch (true) {
    case computerChoice === "paper":
      switch (true) {
        case playerChoice === "scissor":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "YOU WIN";
          incrementPlayerScore();
          break;
        case playerChoice === "rock":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "YOU LOSE";
          incrementComputerScore();
          break;
        default:
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "TIE";
          break;
      }
      break;
    case computerChoice === "scissor":
      switch (true) {
        case playerChoice === "rock":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "YOU WIN";
          incrementPlayerScore();
          break;
        case playerChoice === "paper":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "YOU LOSE";
          incrementComputerScore();
          break;
        default:
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "TIE";
          break;
      }
      break;
    case computerChoice === "rock":
      switch (true) {
        case playerChoice === "paper":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "YOU WIN";
          incrementPlayerScore();
          break;
        case playerChoice === "scissor":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "YOU LOSE";
          incrementComputerScore();
          break;
        default:
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "TIE";
          break;
      }
      break;
    default:
      alert("unknown error");
      break;
  }
});
