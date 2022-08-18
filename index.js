// Create variables for the game state
let player1ScoreEl = document.getElementById("player1Scoreboard")
let player2ScoreEl = document.getElementById("player2Scoreboard")
let player1DiceEl = document.getElementById("player1Dice")
let player2DiceEl = document.getElementById("player2Dice")
let messageEl = document.getElementById("message")
let rollBtnEl = document.getElementById("rollBtn")
let resetBtnEl = document.getElementById("resetBtn") 

let player1Scores = 0 
let player2Scores = 0
let player1Turn = true 


function showResetBtn(){
    rollBtnEl.style.display = "none"
    resetBtnEl.style.display = "block"
}

rollBtnEl.addEventListener("click", function(){
    let randomNum = Math.floor(Math.random() * 6 + 1)
    if(player1Turn){
        player1Scores += randomNum 
        player1ScoreEl.textContent = player1Scores
        player1DiceEl.textContent = randomNum
        player1DiceEl.classList.remove("active")
        player2DiceEl.classList.add("active")
        messageEl.textContent = "Player 2 Turn"
    }else{
        player2Scores += randomNum 
        player2ScoreEl.textContent = player2Scores
        player2DiceEl.textContent = randomNum
        player2DiceEl.classList.remove("active")
        player1DiceEl.classList.add("active")
        messageEl.textContent = "Player 1 Turn"
    }
    
    if(player1Scores >= 20){
        messageEl.innerText = "Player 1 Win 😘"
        showResetBtn()
    }else if(player2Scores >= 20){
        messageEl.innerText = "Player 2 win 😘"
        showResetBtn()        
    }
    

    player1Turn = !player1Turn
})

resetBtnEl.addEventListener("click", function(){
    messageEl.textContent = "Player 1 Turn"
    player1Scores = 0
    player2Scores = 0
    player1ScoreEl.textContent = 0
    player2ScoreEl.textContent = 0
    player1DiceEl.textContent = "-"
    player2DiceEl.textContent = "-"
    rollBtnEl.style.display = "block"
    resetBtnEl.style.display = "none"
    
})


