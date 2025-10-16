class Game {
    
    constructor() {
        this.startScreen = document.getElementById("start-screen");
        this.gameScreen = document.getElementById("game-screen");
        this.endScreen = document.getElementById("end-screen");
        
        this.startBtn = document.getElementById("startBtn");
        this.rockBtn = document.getElementById("rockBtn");
        this.paperBtn = document.getElementById("paperBtn");
        this.scissorsBtn = document.getElementById("scissorsBtn");
        this.restartBtn = document.getElementById("restartBtn");
        
        this.playerNameInput = document.getElementById("playerName");
        this.playerText = document.getElementById("player-text");
        this.playerScoreEl = document.getElementById("player-score");
        this.computerScoreEl = document.getElementById("computer-score");
        
        this.resultMsg = document.getElementById("result-message");
        this.roundChoices = document.getElementById("round-choices");
        this.winnerText = document.getElementById("winner-text");
        this.finalScore = document.getElementById("final-score");
        
        this.playersScore = 0;
        this.AiScore = 0;
        this.userName = "";
        
        this.setupButtons();
    }
    
    setupButtons() {
        this.startBtn.onclick = () => {
            this.startGame();
        };
        
    
        this.rockBtn.onclick = () => {
            this.play("Rock");
        };
        
    
        this.paperBtn.onclick = () => {
            this.play("Paper");
        };
        
  
        this.scissorsBtn.onclick = () => {
            this.play("Scissors");
        };
        
        
        this.restartBtn.onclick = () => {
            this.restart();
        };
    }
    
    
    startGame() {
        
        this.userName = this.playerNameInput.value.trim();
        
        
        if (this.userName === "") {
            alert("Please enter your name first!");
            return;
        }
        
        
        this.playerText.textContent = this.userName;
        
        
        this.startScreen.classList.add('hidden');
        this.gameScreen.classList.remove('hidden');
    }
    
    getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        const random = Math.floor(Math.random() * 3);
        return choices[random];
    }
    

    play(playerChoice) {
    
        const computerChoice = this.getComputerChoice();
  
        this.roundChoices.textContent = `${this.userName} chose ${playerChoice}, AI chose ${computerChoice}`;
        
        if (playerChoice === computerChoice) {
            this.resultMsg.textContent = "It's a Tie!";
            return; 
        }
        
        
        if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
       
            this.playersScore = this.playersScore + 1;
            this.resultMsg.textContent = `${this.userName} wins this round!`;
        } else {
            
            this.AiScore = this.AiScore + 1;
            this.resultMsg.textContent = "AI wins this round!";
        }
      
        this.playerScoreEl.textContent = this.playersScore;
        this.computerScoreEl.textContent = this.AiScore;
        
  
        this.checkGameOver();
    }
    
    checkGameOver() {
        if (this.playersScore === 5 || this.AiScore === 5) {
          
            if (this.playersScore > this.AiScore) {
                this.winnerText.textContent = `${this.userName} WINS!`;
            } else {
                this.winnerText.textContent = "AI WINS!";
            }
            
            this.finalScore.textContent = `Final Score: ${this.playersScore} - ${this.AiScore}`;

            this.gameScreen.classList.add('hidden');
            this.endScreen.classList.remove('hidden');
        }
    }
    
    
    restart() {
        this.playersScore = 0;
        this.AiScore = 0;
        
        this.playerScoreEl.textContent = 0;
        this.computerScoreEl.textContent = 0;
        
        this.resultMsg.textContent = "";
      this.roundChoices.textContent = "";
      
      this.endScreen.classList.add('hidden');
        this.gameScreen.classList.remove('hidden');
    }
}

const game = new Game();