/*
Browser Game: Tic-Tac-Toe
Contributors: Khadija Sadat, Cindy Parnell, Austin Berndlmaier
notes: 
    game fields html/css constructed
    game fields can be populated with X's and O's
    game fields can only be populated once per match, then are locked
    left clicking enters an X
    right clicking enters an O
    the reset button is functional and will clear out all game fields
        ** no win-message to display yet
        ** we researched evaluating array indices to determine match outcomes
        ** need more time to fully understand how they work

*/
/* ------------- Constants ---------------*/

const gameBoard = document.getElementById('gameBoard')          // the whole board
const gameFields = document.querySelectorAll('.gameField')      // each of nine play squares
const message = document.getElementById('message')              // to display the 'you win' message; not written yet
const resetButton = document.getElementById('resetButton')      // to clear out all game fields and start over

// const winningLines = [
//     [0,1,2], [3,4,5], [6,7,8],      // rows
//     [0,3,6], [1,4,7], [2,5,8],      // columns
//     [0,4,8], [2,4,6],               // diagonals
//   ]

/* ------------- Variables ---------------*/


/* ------ Cached Element References ------*/


/* ---------- Event Listeners ------------*/

gameFields.forEach((gameField) => {                             // to loop through each gameField          
    
    gameField.addEventListener('click', (event) => {            // listen for left clicks
        console.log(event)                                      // check work progress 
        if  (gameField.textContent === '')                      // make sure the square is valid for selection
            {gameField.textContent = `X`}                       // display user's choice and disable future inputs

        
    })
    gameField.addEventListener("contextmenu", (event) => {      // listen for right-clicks
        console.log(event)                                      // check work progress
        if (gameField.textContent === '')                       // make sure square is valid for selection
           {gameField.textContent = 'O'}                        // display user's choice and disable future inputs
        
    })
})


/* ------------- Functions ---------------*/
resetButton.addEventListener('click', (event) => {              // listen for left clicks
    gameFields.forEach((gameField) => {                         // to loop through each gameField
          gameField.textContent = ''                            // empty the square for a new game
          console.log(event)                                    // check work progress (each square is now empty)
    }
  

)})

