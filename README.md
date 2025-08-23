# 🧩 Sliding Blocks Game

A classic **sliding tile puzzle** built using **HTML, CSS, and JavaScript**. The goal is to slide numbered tiles into the correct order by moving them into the empty space. The game includes multiple levels, a move counter, sound effects, and win/lose conditions.  

## 📸 Screenshots

<!-- Desktop Screenshots -->
### 🖥️ Desktop View
<table>
  <tr>
    <td><img src="https://i.ibb.co/Kx96Nknh/Screenshot-2025-08-22-at-11-05-30-PM.png" width="200"></td>
    <td><img src="https://i.ibb.co/tTJg2wSR/Screenshot-2025-08-20-at-4-55-13-PM.png" width="200"></td>
    <td><img src="https://i.ibb.co/KzFVyyQJ/Screenshot-2025-08-22-at-11-08-05-PM.png" width="200"></td>
    <td><img src="https://i.ibb.co/LXKv7SFh/Screenshot-2025-08-22-at-11-08-15-PM.png" width="200"></td>
  </tr>
</table>

<!-- Mobile Screenshots -->
### 📱 Mobile View
<table>
  <tr>
    <td><img src="https://i.ibb.co/6RdBrWj4/IMG-9874.png" width="150"></td>
    <td><img src="https://i.ibb.co/23SrHbRQ/IMG-9875.png" width="150"></td>
    <td><img src="https://i.ibb.co/H96N99z/IMG-9876.png" width="150"></td>
    <td><img src="https://i.ibb.co/0p3DqLrx/IMG-9877.png" width="150"></td>
  </tr>
</table>


---

## 🌐 Live Demo  

Check out the live version of the game here: [Play Sliding Block Game](https://ruqayahusain.github.io/browser-based-game-project/)

---

## 📌 Project Overview

- **Type**: Browser-based puzzle game  
- **Technologies**: HTML5, CSS3, JavaScript (ES6)  
- **Difficulty**: Beginner to Intermediate  
- **Purpose**: Practice grid logic, DOM manipulation, and puzzle mechanics

---

## ✨ Features

- 🎚️ **Multiple difficulty levels**  
  - Easy: 3x3  
  - Medium: 4x4  
  - Hard: 5x5  
- 🔀 Randomly shuffled board each game (always solvable)  
- 🖱️ Click a tile next to the empty space to slide  
- 🔢 Move counter displayed on screen  
- ⏳ Limited moves (varies by level) – if you run out, you lose  
- 🏁 Win detection when the puzzle is solved  
- 🎵 Sound effects for moves and victory  
- 🔄 Restart button to play again instantly  

---

## 🎮 How to Play

1. Choose a **difficulty level** (3x3, 4x4, or 5x5).  
2. A shuffled puzzle will appear on the screen.  
3. Click a tile next to the empty space to slide it.  
4. Arrange the numbers in the correct order, with the empty space in the bottom-right corner.  
5. You must solve the puzzle **before your moves run out**.  
6. The game displays a **win message** if you succeed or a **loss message** if you fail.  

---

## 💡 Future Improvements

- 🏆 Leaderboard & score tracking with `localStorage`  
- 📱 Better mobile/touch support  
- 🌈 More themes & animations  

---

## 🧰 Technologies Used

- **HTML5** – Semantic layout for the grid and tiles  
- **CSS3** – Styling, arcade-inspired design, and responsiveness  
- **JavaScript (ES6)** – Core game logic, tile movement, shuffling, and sound  

---

## 📁 File Structure
```plaintext
browser-based-game-project/
│
├── index.html             # Game layout
├── css/
│   └── style.css          # Styling
├── js/
│   └── app.js            # Game logic & interactivity
├── assets/                # Game sounds
│   ├── loss.mp3
│   ├── tile-slide.mp3
│   └── win.mp3
└── README.md              # Project documentation
```
## 🙏 Attribution & Credits

- 🎨 **Color Palette**: [Color Hunt](https://colorhunt.co/)  
- 📺 **Tutorial Reference**: [Sliding Puzzle Game Tutorial – YouTube](https://www.youtube.com/watch?v=0WZLdVH2VV4&t=1279s)  
- 🔊 **Sound Effects**: Free-to-use sounds ([slide](https://freesound.org/people/LittleRobotSoundFactory/sounds/290384/), [loss](https://freesound.org/people/deleted_user_877451/sounds/76376/), and [win](https://freesound.org/people/interstellarcat/sounds/787559/)).  
