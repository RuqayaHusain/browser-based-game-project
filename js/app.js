/*-------------------------------- Constants --------------------------------*/
const maxMoves = 60;
const gameSize = 3; //represents 3 * 3 grid
const numberOfTiles = gameSize * gameSize; //total number of tiles

/*---------------------------- Variables (state) ----------------------------*/
let board =[]; //puzzle board array
let movesLeft; //used to display the number of moves left
let gameStatus; //Win, Loss, or InProgress



/*------------------------ Cached Element References ------------------------*/
const puzzleBoardEl = document.querySelector('.puzzle-board');
const movesCounterEl = document.querySelector('#counter');
const tileEls = document.querySelectorAll('.tile');
const gameMessageEl = document.querySelector('#game-message');
const resetBtnEl = document.querySelector('#reset');

/*-------------------------------- Functions --------------------------------*/

const init = () => {
    board = getRandomValueArray(); //shuffle puzzle
    movesLeft = maxMoves; //set movesLeft to maxMoves (60)
    gameStatus = 'InProgress'; //initial status = 'InProgress'
    gameMessageEl.classList.add('hide');
    resetBtnEl.classList.add('hide');
    render(); //render game
};

const render = () => {
    puzzleBoardEl.innerHTML = ''; //clears the board
    board.forEach(boardValue => { //generates the tile (div elements) using JS and assigns them a value from the borad array
        
        const newTileEl = document.createElement('div');
        newTileEl.classList.add('tile');

        if (boardValue !== numberOfTiles) { //if the tiles doesn't hold the last element number (9) set a value for it
            newTileEl.innerText = boardValue;
        } else { //title with value 9, should be hidden, by giving it a new class
            newTileEl.classList.add('empty-tile');
        }
            puzzleBoardEl.appendChild(newTileEl);
        
    });
    movesCounterEl.innerText = `Moves Left: ${movesLeft}`; //updates the counter
    updateGameMessage(); //sets the game message based on the game's status
};

const getRandomValueArray = () => {
    let randomValuesArray = [];
    for (let i = 1; i <= numberOfTiles; i++){ //will generate array from [1 ... 9]
        randomValuesArray.push(i);
    }
    randomValuesArray = randomValuesArray.sort(() => Math.random() - 0.5);

    return randomValuesArray;
};

const updateGameMessage = () => { //checks the game status and updates the gameMessage element accordingly
    if (gameStatus === 'Win') {
        gameMessageEl.innerText = 'Congrats! You Have Won 🎉!';
    } else if (gameStatus === 'Loss') {
        gameMessageEl.innerText = 'Game Over 💀!';
    } else {
        gameMessageEl.innerText = '';
    }
};

init();
/*----------------------------- Event Listeners -----------------------------*/

