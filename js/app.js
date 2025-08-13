/*-------------------------------- Constants --------------------------------*/
const maxMoves = 60;
const gameSize = 3; //represents 3 * 3 grid
const numberOfTiles = gameSize * gameSize; //total number of tiles

/*---------------------------- Variables (state) ----------------------------*/
let board; //puzzle board array
let movesLeft; //used to display the number of moves left
let gameStatus; //win, loss, or InProgress



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
    render(); //render game
};

const render = () => {

};

const getRandomValueArray = () => {
    let randomValuesArray = [];
    for (let i = 1; i <= numberOfTiles; i++){ //will generate array from [1 ... 9]
        randomValuesArray.push(i);
    }
    randomValuesArray = randomValuesArray.sort(() => Math.random() - 0.5);
};

/*----------------------------- Event Listeners -----------------------------*/

