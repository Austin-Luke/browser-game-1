/* ------------- Constants ---------------*/
const gameBoard = document.getElementById('gameBoard')
const gameFields = document.querySelectorAll('.gameField')
const message = document.getElementById('message')
const resetButton = document.getElementById('resetButton')
// const winningCombos = [
//     [0,1,2], [3,4,5], [6,7,8],      // rows
//     [0,3,6], [1,4,7], [2,5,8],      // columns
//     [0,4,8], [2,4,6],               // diagonals
//   ]
/* ------------- Variables ---------------*/


/* ------ Cached Element References ------*/


/* ---------- Event Listeners ------------*/
gameFields.forEach((gameField) => {
    gameField.addEventListener("contextmenu", (event) => {
        console.log(event)
        if (gameField.textContent === '') 
           {gameField.textContent = 'O'}
        
    })
    gameField.addEventListener('click', (event) => {
        console.log(event)
        if  (gameField.textContent === '') 
            {gameField.textContent = `X`} 

        
    }
)})


/* ------------- Functions ---------------*/
resetButton.addEventListener('click', (event) => {
    gameFields.forEach((gameField) => {
          gameField.textContent = ''
          console.log(event)
    }
  

)})

