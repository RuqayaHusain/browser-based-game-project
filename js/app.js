/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let board =[]; //puzzle board array
let movesLeft; //used to display the number of moves left
let gameStatus; //Win, Loss, or InProgress
let gameLevel; //easy, medium, hard
let gameSize; //changes based on the level of game. easy: 3, medium: 4, hard: 5
let numberOfTiles; // = gameSize * gameSize
let maxMoves; //changes based on the level of the game. easy: 60, medium: 100, hard: 150



/*------------------------ Cached Element References ------------------------*/
const puzzleBoardEl = document.querySelector('.puzzle-board');
const movesCounterEl = document.querySelector('#counter');
const gameMessageEl = document.querySelector('#game-message');
const resetBtnEl = document.querySelector('#reset');
const levelSelectEl = document.querySelector('#level-select');
const gameHeaderEl = document.querySelector('#game-header');
const easyBtnEl = document.querySelector('#easy-btn');
const mediumBtnEl = document.querySelector('#medium-btn');
const hardBtnEl = document.querySelector('#hard-btn');

/*-------------------------------- Functions --------------------------------*/

const init = () => {

    board = getRandomValueArray(); //shuffle puzzle
    movesLeft = maxMoves; //set movesLeft to maxMoves
    gameStatus = 'InProgress'; //initial status = 'InProgress'
    gameMessageEl.classList.add('hide');
    resetBtnEl.classList.add('hide');
    render(); //render game
};

const render = () => {

    puzzleBoardEl.innerHTML = ''; //clears the board
    puzzleBoardEl.classList.add(`grid-${gameSize}x${gameSize}`); //adding class that will change based on the game's level
    board.forEach(boardValue => { //generates the tile (div elements) using JS and assigns them a value from the borad array
        
        const newTileEl = document.createElement('div');
        newTileEl.classList.add('tile');

        if (boardValue !== numberOfTiles) { //if the tiles doesn't hold the last element number (9) set a value for it
            newTileEl.innerText = boardValue;
        } else { //title with value 9, should be hidden, by giving it a new class
            newTileEl.classList.add('empty-tile');
        }
            // newTileEl.addEventListener('click', handleClick);
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
        gameMessageEl.innerText = 'Congrats! You Have Won 🕹️!';
        resetBtnEl.classList.remove('hide');
        gameMessageEl.classList.remove('hide');
    } else if (gameStatus === 'Loss') {
        gameMessageEl.innerText = 'Game Over 👾!';
        resetBtnEl.classList.remove('hide');
        gameMessageEl.classList.remove('hide');
    } else {
        gameMessageEl.innerText = '';
    }
};

const isMoveValid = (emptyTileIndex, clickedTileIndex) => {

    /* 
    if the empty tile and the clicked tile are in the same row, they must be next to each other in columns (column difference = 1)
        or 
    if the empty tile and the clicked tile are in the same column, they must be next to each other in rows (row difference = 1)
     */

    const emptyTileRow = Math.floor(emptyTileIndex / gameSize);
    const emptyTileCol = emptyTileIndex % gameSize;
    const clickedTileRow = Math.floor(clickedTileIndex / gameSize);
    const clickedTileCol = clickedTileIndex % gameSize;

    return (
        (emptyTileRow === clickedTileRow && Math.abs(emptyTileCol - clickedTileCol) === 1) ||
        (emptyTileCol === clickedTileCol && Math.abs(emptyTileRow - clickedTileRow) === 1)
    );
};

const handleClick = (event) => {

    if (gameStatus !== 'InProgress') return; //get out of the function if gameStatus is not InProgress
    if (event.target.classList.contains('empty-tile')) return; //get out of the function if user clicked on the empty tile

    const clickedTileValue = parseInt(event.target.textContent); //get the value if the clicked tile
    const clickedTileIndex = board.indexOf(clickedTileValue); //get the index of the clicked tile
    const emptyTileIndex = board.indexOf(numberOfTiles); //get the index of empty tile

    if(isMoveValid(emptyTileIndex, clickedTileIndex)) {
        [board[clickedTileIndex], board[emptyTileIndex]] = [board[emptyTileIndex], board[clickedTileIndex]]; //swap
        movesLeft --;
        checkGameStatus(); //checks for win or loss
        render();
    }
};

const checkGameStatus = () => {

  if (board.every((value, index) => value === index + 1)) { //checks if all values are in board array are in sequence
    gameStatus = 'Win';
  } else if (movesLeft <= 0) {
    gameStatus = 'Loss';
  }
};

const levelSelection = (level) => {//based on the level specified by the user, it will set game's size, maxMoves, number of tiles
    gameLevel = level;

    if (level === 'easy') {
        gameSize = 3;
        maxMoves = 60;

    } else if (level === 'medium') {
        gameSize = 4;
        maxMoves = 100;

    } else {
        gameSize = 5;
        maxMoves = 150;

    }

    numberOfTiles = gameSize * gameSize;

    levelSelectEl.classList.add('hide'); //hides the level selection
    puzzleBoardEl.classList.remove('hide'); //will dislpay the puzzle borad
    gameHeaderEl.classList.remove('hide'); //will display game header

    init();
};

init();
/*----------------------------- Event Listeners -----------------------------*/
resetBtnEl.addEventListener('click', () => { //will display the level selection div, and hide the rest
    levelSelectEl.classList.remove('hide');
    puzzleBoardEl.innerHTML = '';
    puzzleBoardEl.classList.add('hide');
    movesCounterEl.innerText = '';
    gameMessageEl.innerText = '';
    gameMessageEl.classList.add('hide');
    gameHeaderEl.classList.add('hide');
    resetBtnEl.classList.add('hide');
});

puzzleBoardEl.addEventListener('click', handleClick);

easyBtnEl.addEventListener('click', () => levelSelection('easy'));
mediumBtnEl.addEventListener('click', () => levelSelection('medium'));
hardBtnEl.addEventListener('click', () => levelSelection('hard'));

/*----------------------------- Initial Setup -----------------------------*/
puzzleBoardEl.classList.add('hide');
gameHeaderEl.classList.add('hide');
gameMessageEl.classList.add('hide');
resetBtnEl.classList.add('hide');