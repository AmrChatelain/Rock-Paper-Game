const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("startBtn");
const gameScreen = document.getElementById("game-screen");
const scoreContainer= document.getElementById("score-container");
const playerScore = document.getElementById ("player-score");
const computerScore  =document.getElementById("computer-score");
const choices = document.getElementById("choices");
const rockBtn= document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn =document.getElementById("scissorsBtn");
const resultMsg= document.getElementById("result-message");
const roundChoices= document.getElementById("round-choices");
const endScreen =document.getElementById("end-screen");
const winnerText= document.getElementById("winner-text");
const finalScore=document.getElementById("final-score");
const restartBtn= document.getElementById("restartBtn");

let userName;


function showScreens (screen) {
 startScreen.classList.add('hidden');
 gameScreen.classList.add('hidden');
 endScreen.classList.add ('hidden');

  screen.classList.remove('hidden');

}

startBtn.addEventListener("click", () =>{
  userName=document.getElementById("playerName").value;
console.log(userName);
 document.getElementById("player-text").textContent = userName;


 showScreens(gameScreen);

});

let playersScore=0;

let AiScore=0;

playerScore.textContent=playersScore;

function getAiChoice (){
  const choice=["Rock","Paper","Scissors"];
  const randomChoice= Math.floor(Math.random()*3);
  return choice [randomChoice];
}

function updateScore() {
    playerScore.textContent = playersScore;
    computerScore.textContent = AiScore;
}

function playRound (playerChoice){

  const AiChoice= getAiChoice();

     roundChoices.textContent = `You chose ${playerChoice}, AI chose ${AiChoice}`;
  if (playerChoice === AiChoice){
    resultMsg.textContent= "It's a Tie!"
    return;
  }
  if(
  (playerChoice === "Rock" && AiChoice === "Scissors") ||
  (playerChoice=== "Paper" && AiChoice === "Rock") ||
  (playerChoice === "Scissors" && AiChoice==="Paper")
  )
  {
    playersScore++;
  resultMsg.textContent = "You win this round!";
 }else{
  AiScore++;
  resultMsg.textContent = "AI wins this round!";

  }
  updateScore();
}

function checkWinner(){
 if(playersScore===5 || AiScore===5){
  if(playersScore > AiScore)
    winnerText.textContent="You WIN!";
  else{
    winnerText.textContent="AI WIN!";
  }
  finalScore.textContent=`Final Score ${playersScore} - ${AiScore}`;

  showScreens(endScreen);
 }

}

rockBtn.onclick= () =>{
   playRound("Rock");
  checkWinner();

}

paperBtn.onclick= () =>{
  playRound("Paper");
  checkWinner();
}

scissorsBtn.onclick= () =>{
  playRound("Scissors");
  checkWinner();
};


restartBtn.onclick = () => {
    playersScore = 0;
    AiScore = 0;
    updateScore();
    resultMsg.textContent = "";
    roundChoices.textContent = "";
    showScreens(gameScreen);
};