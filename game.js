let userScore = 0;
let computerScore = 0;

let userScorepara = document.querySelector("#userScore");
let computerScorepara = document.querySelector("#computerScore");

let message = document.querySelector("#message");
let choices = document.querySelectorAll(".image");
// console.log(choices);

let playGame = (userChoice) => {
  console.log(`User Choice = ${userChoice}`);
  let compChoice = computerChoice();
  console.log(`Computer Choice = ${compChoice}`);
  if (userChoice === "rock" && compChoice === "rock") {
    message.innerHTML = "";
    message.innerHTML = "Game Draws! Both Selected Rock";
  } else if (userChoice === "scissors" && compChoice === "scissors") {
    message.innerHTML = "";
    message.innerHTML = "Game Draws! Both Selected scissors";
  } else if (userChoice === "paper" && compChoice === "paper") {
    message.innerHTML = "";
    message.innerHTML = "Game Draws! Both Selected Paper";
  } else if (userChoice === "rock" && compChoice === "paper") {
    message.innerHTML = "";
    message.innerHTML = "You Lost! paper beats rock";
    computerScore++;
    computerScorepara.textContent = computerScore;
  } else if (userChoice === "rock" && compChoice === "scissors") {
    message.innerHTML = "";
    message.innerHTML = "You Win! rock beats scissors";
    userScore++;
    userScorepara.textContent = userScore;
  } else if (userChoice === "paper" && compChoice === "rock") {
    message.innerHTML = "";
    message.innerHTML = "You Win! paper beats rock";
    userScore++;
    userScorepara.textContent = userScore;
  } else if (userChoice === "paper" && compChoice === "scissors") {
    message.innerHTML = "";
    message.innerHTML = "You Lost! scissors beats paper";
    computerScore++;
    computerScorepara.textContent = computerScore;
  } else if (userChoice === "scissors" && compChoice === "rock") {
    message.innerHTML = "";
    message.innerHTML = "You Lost! rock beats scissors";
    computerScore++;
    computerScorepara.textContent = computerScore;
  } else if (userChoice === "scissors" && compChoice === "paper") {
    message.innerHTML = "";
    message.innerHTML = "You Win! scissors beats paper";
    userScore++;
    userScorepara.textContent = userScore;
  }
};

let computerChoice = () => {
  let compChoicearr = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * (2 - 0 + 1) + 0);

  return compChoicearr[randIdx];

  //   if (compChoice === 0) {
  //     console.log(compChoicearr[0]);
  //   } else if (compChoice === 1) {
  //     console.log(compChoicearr[1]);
  //   } else if (compChoice === 2) {
  //     console.log(compChoicearr[2]);
  //   }
};

// let gameResult=()=>{
//     if()
// }

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.id;
    message.innerHTML = "";
    playGame(userChoice);

    computerChoice();
  });
});
