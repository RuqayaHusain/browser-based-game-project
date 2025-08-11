// 1) Define any variables used to track the state of the game:
//    - The puzzle grid
//    - The position of the empty tile
//    - The number of moves left (start at 60)
//    - The game status (playing, won, lost)
//    - A result message (win or lose)

// 2) Define the required constants:
//    - Max number of moves allowed (60)
//    - Reference to DOM elements: puzzle container, move counter, result message, try again button

// 3) Initialize the game:
//    - Shuffle the puzzle pieces into a solvable configuration
//    - Render the puzzle grid in the DOM
//    - Set movesLeft to MAX_MOVES
//    - Hide the result message and Try Again button

// 4) Handle a tile click event:
//    - Check if the clicked tile is adjacent to the empty tile
//    - If yes, swap the clicked tile with the empty tile
//    - Decrease movesLeft by 1
//    - Update the move counter display
//    - Check win condition: if tiles are in correct order, display "Congrats! You have won!" and show Try Again button
//    - Check lose condition: if movesLeft is 0, display "Game Over!" and show Try Again button

// 5) Update the puzzle display in the DOM:
//    - Loop through the puzzle grid and update tile positions
//    - Use CSS classes or inline styles to visually represent tile positions

// 6) Handle the Try Again button click:
//    - Re-initialize the game by calling the initialization function
//    - Reset movesLeft to MAX_MOVES
//    - Shuffle puzzle again