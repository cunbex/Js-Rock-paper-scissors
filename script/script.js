const btns = document.querySelectorAll(".choice");
const round = document.querySelector(".current-round");
const ptsComputer = document.querySelector(".ptsComputer");
const ptsPlayer = document.querySelector(".ptsPlayer");
const gameChoices = ["rock", "paper", "scissor"];

btns.forEach((btn) => btn.addEventListener("click", playRound));

function playRound(e) {
  if (!e) {
    alert("problem");
    return;
  }
  let computerPick = getComputerChoice();
  let playerPick = getPlayerChoice(e);
  let result = roundResult(playerPick, computerPick);
  incriment(
    round.innerText,
    result,
    ptsPlayer.innerText,
    ptsComputer.innerText
  );
}

function roundResult(player, computer) {
  switch (true) {
    case player == computer:
      return "tie";
    case player == "rock":
      switch (true) {
        case computer == "scissor":
          return "win";
        default:
          return "lose";
      }
    case player == "scissor":
      switch (true) {
        case computer == "paper":
          return "win";
        default:
          return "lose";
      }
    case player == "paper":
      switch (true) {
        case computer == "rock":
          return "win";
        default:
          return "lose";
      }
    default:
      alert("unkonwn error");
      break;
  }
}
function getComputerChoice() {
  let pick = gameChoices[Math.floor(Math.random() * 3)];
  const computerChoice = document.querySelector(".computerChoice");
  computerChoice.innerText = pick;
  return pick;
}

function getPlayerChoice(e) {
  if (!e) {
    alert("Error in player choice, function getPlayerChoice");
    return;
  }
  let pick = e.target.innerText.toLowerCase();
  const playerChoice = document.querySelector(".playerChoice");
  playerChoice.innerText = pick;
  return pick;
}

function incriment(currentRound, state, playerScore, computerScore) {
  round.innerText = `${parseInt(currentRound) + 1}`;
  switch (state) {
    case "win":
      ptsPlayer.innerText = `${parseInt(playerScore) + 1}`;
      window.confirm("You Won!");
      break;
    case "lose":
      ptsComputer.innerText = `${parseInt(computerScore) + 1}`;
      window.confirm("You Lost!");
      break;
    default:
      window.confirm("Its a Tie!");
      break;
  }
}
