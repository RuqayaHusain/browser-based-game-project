# 🧩 Sliding Puzzle Game

A classic **3x3 sliding tile puzzle** built using HTML, CSS, and JavaScript. The goal is to slide numbered tiles into the correct order by moving them into the empty space. This project focuses on logic, grid manipulation, and user interaction using core web technologies.

![Game Preview/Logo] <!-- screenshot of system will appear here -->

---


## 🌐 Live Demo 

<!-- demo link will appear here -->

---

## 📌 Project Overview

- **Type**: Browser-based puzzle game  
- **Technologies**: HTML5, CSS3, JavaScript (ES6)  
- **Difficulty**: Beginner to Intermediate  
- **Purpose**: To practice grid layout, DOM manipulation, and basic puzzle logic without using external libraries

---

## 📋 Planning & Initialization

### 🎯 Objectives

- Build a functioning sliding puzzle that allows users to move tiles.
- Ensure proper logic to restrict movement only to adjacent tiles.
- Shuffle the board randomly on load and check for a win condition.
- Keep the code modular and beginner-friendly.

### 🗂️ Initial Steps

1. **Grid Design (HTML + CSS):**  
   - Create a 3x3 grid using Flexbox or CSS Grid.
   - Each tile is a `<div>` element with a number or empty space.

2. **Shuffling Algorithm (JavaScript):**  
   - Store tile positions in an array.
   - Randomly shuffle the array ensuring the puzzle is solvable.

3. **Tile Movement Logic:**  
   - Allow only tiles adjacent to the empty space to move.
   - Swap the tile and the empty space on click.

4. **Win & Lose Condition Check:**  
   - After each move, check if the tiles are in the correct order to detect a win.  
   - Track the number of moves and if it exceeds **60 moves**, end the game with a losing message.


---

## 🎮 How to Play

1. A shuffled 3x3 grid appears when the game loads.  
2. Click a tile next to the empty space to slide it.  
3. Arrange the numbers from **1 to 8**, with the empty space in the bottom-right corner.  
4. You have a **maximum of 60 moves** to solve the puzzle.  
5. The move counter is displayed during the game so you can keep track.  
6. If you exceed 60 moves, the game ends and you lose.  
7. You'll get a message when you win or lose!


---

## ✨ Features

- ✅ Random shuffling on page load  
- 🖱️ Clickable tiles that slide smoothly  
- ✅ Movement only if the tile is adjacent to the empty space  
- 🔢 Move counter displayed (max 60 moves allowed)  
- 🛑 Losing condition if moves exceed 60  
- 🏁 Win detection  
- 🔄 Restart button  

---

## 💡 Future Improvements

- 🎵 Sound effects  
- 💾 Save best scores using localStorage  
- 🏆 Leaderboard

---

## 🧰 Technologies Used

- **HTML5** – Semantic layout for the grid and tiles  
- **CSS3** – Styling, grid layout, and responsiveness  
- **JavaScript (ES6)** – Game logic, user interaction, win checking

---

## 📁 File Structure
```plaintext
sliding-puzzle-game/
│
├── index.html   # Game layout
├── style.css    # Game styling
├── script.js    # Game logic and interactivity
└── README.md    # Project documentation
```
