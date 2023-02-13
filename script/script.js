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
playButton.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();
  switch (true) {
    case computerChoice === "paper":
      switch (true) {
        case playerChoice === "scissor":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "you are the winner";
          break;
        case playerChoice === "rock":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "You lose";
        default:
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "Tie";
          break;
      }
      break;
    case computerChoice === "scissor":
      switch (true) {
        case playerChoice === "rock":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "you are the winner";
          break;
        case playerChoice === "paper":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "You lose";
          break;
        default:
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "Tie";
          break;
      }
      break;
    case computerChoice === "rock":
      switch (true) {
        case playerChoice === "paper":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "you are the winner";
          break;
        case playerChoice === "scissor":
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "You lose";
          break;
        default:
          computer.innerHTML = `The robot has chosen ${computerChoice}`;
          result.innerHTML = "Tie";
          break;
      }
      break;
    default:
      alert("unknown error");
      break;
  }
});
