# Hangman Game

Welcome to the Hangman Game! This project is a web-based implementation of the classic Hangman game, where players try to guess a word by suggesting letters or numbers within a limited number of guesses. The game fetches trivia questions from the Open Trivia Database (OTDB) API, allowing users to play with words from various categories and difficulty levels.

## Features

- **Difficulty Levels**: Choose from easy, medium, and hard difficulty levels.
- **Categories**: Select from a variety of trivia categories fetched from the OTDB API.
- **Keyboard Input**: Guess letters and numbers using an on-screen keyboard.
- **Hints**: Use up to 3 hints to reveal random letters in the word.
- **Pause and Resume**: Pause the game and resume it later.
- **Responsive Design**: Optimized for different screen sizes.

## How to Play

1. **Start the Game**: Click the "Play" button on the main menu.
2. **Select Difficulty**: Choose a difficulty level (easy, medium, or hard).
3. **Choose Category**: Pick a category from the list provided.
4. **Guess the Word**: Use the on-screen keyboard to guess letters and numbers. Each incorrect guess decreases your health by one.
5. **Use Hints**: Click the "Use Hint" button to reveal a random letter in the word. You have up to 3 hints.
6. **Win or Lose**: The game ends when you guess the entire word or run out of guesses. You can then choose to play again or select a new category.

### index.html

This file contains the HTML structure of the game, including the main menu, difficulty selection, category selection, game interface, pause menu, instructions, and result display.

### styles.css

This file contains the CSS styles for the game, ensuring a responsive and visually appealing design.

### script.js

This file contains the JavaScript logic for the game, including fetching categories and words from the OTDB API, handling user input, managing game state, and providing hints.

## Running the Project

To run the project, follow these steps:

1. **Open the `index.html` file**:
    - Navigate to the project directory where the `index.html` file is located.
    - Double-click the `index.html` file, or right-click it and select "Open with" followed by your preferred web browser.

2. **Start Playing**:
    - The game will load in your web browser.
    - Follow the on-screen instructions to play the game.

## API Integration

The game uses the [Open Trivia Database (OTDB) API](https://opentdb.com/api_config.php) to fetch trivia questions. The API provides categories and questions with different difficulty levels.

### Endpoints Used

- **Categories**: `https://opentdb.com/api_category.php`
- **Questions**: `https://opentdb.com/api.php?amount=1&category=CATEGORY_ID&difficulty=DIFFICULTY&type=multiple`


## Acknowledgements

- [Open Trivia Database (OTDB) API](https://opentdb.com/)
- [Font Awesome](https://fontawesome.com/)

---

Enjoy playing the Hangman Game!
