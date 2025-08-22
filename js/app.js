/*-------------------------------- Constants --------------------------------*/
const easyBoards = [
  [1, 2, 4, 5, 3, 6, 7, 8, 9],
  [2, 3, 1, 4, 5, 6, 7, 8, 9],
  [3, 1, 2, 4, 5, 6, 7, 8, 9],
  [6, 5, 9, 4, 8, 3, 2, 7, 1],
  [2, 7, 5, 8, 9, 4, 6, 3, 1]
];

const mediumBoards = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15],
  [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 13, 15, 16],
  [1, 3, 4, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  [3, 7, 6, 5, 13, 14, 15, 16, 4, 11, 8, 10, 1, 9, 12, 2],
  [10, 8, 7, 6, 1, 13, 11, 16, 14, 12, 3, 2, 9, 5, 4, 15]
];

const hardBoards = [
  [2, 1, 4, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 24],
  [2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  [16, 12, 14, 4, 24, 21, 25, 1, 9, 13, 20, 10, 2, 17, 6, 5, 22, 23, 11, 3, 19, 7, 18, 15, 8],
  [5, 6, 11, 17, 16, 21, 8, 4, 24, 13, 7, 20, 25, 15, 1, 19, 10, 3, 22, 9, 2, 12, 23, 18, 14],
  [6, 5, 9, 12, 3, 24, 1, 4, 18, 23, 7, 17, 2, 22, 25, 14, 10, 8, 21, 15, 16, 19, 13, 20, 11]
];

const tileSlideSound = new Audio('../assets/tile-slide.mp3'); //defined on the golabl scope to avoid frequent creation

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

const render = () => {
    
    puzzleBoardEl.innerHTML = ''; //clears the board
    puzzleBoardEl.classList.remove('grid-3x3', 'grid-4x4', 'grid-5x5'); //makes sure all grid classes are removed
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
    
const getRandomValueArray = () => { //returns a random board from the ones defined under the constants section (based on the selected level)
    let boards = [];

    if (gameSize === 3) {
        boards = easyBoards;
    } else if (gameSize === 4) {
        boards = mediumBoards;
    } else {
        boards = hardBoards;
    }
        
    const randomIndex = Math.floor(Math.random() * boards.length);
        
    return boards[randomIndex].slice();
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
        /* tile slide sound will only be played if move is valid */
        tileSlideSound.volume = .5;
        tileSlideSound.play();
        checkGameStatus(); //checks for win or loss
        render();
    }
};
    
const checkGameStatus = () => {
        
    if (board.every((value, index) => value === index + 1)) { //checks if all values are in board array are in sequence
        gameStatus = 'Win';
        const winSound = new Audio('../assets/win.mp3');
        winSound.volume = .5;
        winSound.play();
    } else if (movesLeft <= 0) {
        gameStatus = 'Loss';
        const lossSound = new Audio('../assets/loss.mp3');
        lossSound.volume = .5;
        lossSound.play();
    }
};
    
const init = () => {
        
    board = getRandomValueArray(); //shuffle puzzle
    movesLeft = maxMoves; //set movesLeft to maxMoves
    gameStatus = 'InProgress'; //initial status = 'InProgress'
    gameMessageEl.classList.add('hide');
    resetBtnEl.classList.add('hide');
    render(); //render game
};

const levelSelection = (level) => {//based on the level specified by the user, it will set game's size, maxMoves, number of tiles
    gameLevel = level;
        
    if (level === 'easy') {
        gameSize = 3;
        maxMoves = 80;
            
    } else if (level === 'medium') {
        gameSize = 4;
        maxMoves = 120;
            
    } else {
        gameSize = 5;
        maxMoves = 160;
            
    }
        
    numberOfTiles = gameSize * gameSize;
        
    levelSelectEl.classList.add('hide'); //hides the level selection
    puzzleBoardEl.classList.remove('hide'); //will dislpay the puzzle borad
    gameHeaderEl.classList.remove('hide'); //will display game header
        
    init();
};
    
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