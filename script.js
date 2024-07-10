let wordList = [];
let currentWord = '';
let currentHint = '';
let guessedLetters = [];
let health = 8;
let selectedDifficulty = '';
let hintsRemaining = 3;

document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
});

function fetchCategories() {
    fetch('https://opentdb.com/api_category.php')
        .then(response => response.json())
        .then(data => {
            wordList = data.trivia_categories;
            generateCategoryList();
        });
}

function showDifficultySelection() {
    document.querySelector('.menu').classList.add('hidden');
    document.querySelector('.difficulty-selection').classList.remove('hidden');
}

function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    document.querySelector('.difficulty-selection').classList.add('hidden');
    document.querySelector('.category-selection').classList.remove('hidden');
}

function generateCategoryList() {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '';
    wordList.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category.name;
        button.onclick = () => chooseWord(category.id);
        categoryList.appendChild(button);
    });
}

function chooseWord(categoryId) {
    document.querySelector('.category-selection').classList.add('hidden');
    document.querySelector('.game').classList.remove('hidden');

    fetch(`https://opentdb.com/api.php?amount=1&category=${categoryId}&difficulty=${selectedDifficulty}&type=multiple`)
        .then(response => response.json())
        .then(data => {
            const question = data.results[0];
            currentWord = question.correct_answer.toUpperCase().replace(/[^A-Z0-9]/g, ''); // Sanitize the word
            currentHint = question.question;
            guessedLetters = Array(currentWord.length).fill('_');
            health = 8;
            hintsRemaining = 3;
            updateWord();
            updateHealth();
            updateHint();
            updateHintsRemaining();
            generateKeyboard();
        });
}

function updateWord() {
    document.getElementById('word').textContent = guessedLetters.join(' ');
}

function updateHealth() {
    document.getElementById('health').textContent = health;
}

function updateHint() {
    document.getElementById('hint').textContent = currentHint;
}

function updateHintsRemaining() {
    document.getElementById('hints-remaining').textContent = hintsRemaining;
}

function generateKeyboard() {
    const keyboard = document.querySelector('.keyboard');
    keyboard.innerHTML = '';

    // Create a container for alphabetic characters
    const alphabetContainer = document.createElement('div');
    alphabetContainer.className = 'alphabet-container';
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(character => {
        const button = document.createElement('button');
        button.textContent = character;
        button.onclick = () => guessCharacter(character);
        alphabetContainer.appendChild(button);
    });
    keyboard.appendChild(alphabetContainer);

    // Create a container for numeric characters
    const numberContainer = document.createElement('div');
    numberContainer.className = 'number-container';
    '0123456789'.split('').forEach(character => {
        const button = document.createElement('button');
        button.textContent = character;
        button.onclick = () => guessCharacter(character);
        numberContainer.appendChild(button);
    });
    keyboard.appendChild(numberContainer);
}

function guessCharacter(character) {
    if (currentWord.includes(character)) {
        currentWord.split('').forEach((char, index) => {
            if (char === character) {
                guessedLetters[index] = character;
            }
        });
        updateWord();
        if (!guessedLetters.includes('_')) {
            showResult('You Win!');
        }
    } else {
        health--;
        updateHealth();
        if (health === 0) {
            showResult('You Lose!');
        }
    }
}

function useHint() {
    if (hintsRemaining > 0) {
        const unrevealedIndices = [];
        for (let i = 0; i < guessedLetters.length; i++) {
            if (guessedLetters[i] === '_') {
                unrevealedIndices.push(i);
            }
        }
        if (unrevealedIndices.length > 0) {
            const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
            guessedLetters[randomIndex] = currentWord[randomIndex];
            hintsRemaining--;
            updateWord();
            updateHintsRemaining();
            if (!guessedLetters.includes('_')) {
                showResult('You Win!');
            }
        }
    }
}

function showResult(message) {
    document.querySelector('.game').classList.add('hidden');
    document.querySelector('.result').classList.remove('hidden');
    document.getElementById('result-message').textContent = message;
}

function pauseGame() {
    document.querySelector('.game').classList.add('hidden');
    document.querySelector('.pause-menu').classList.remove('hidden');
}

function resumeGame() {
    document.querySelector('.pause-menu').classList.add('hidden');
    document.querySelector('.game').classList.remove('hidden');
}

function quitGame() {
    document.querySelector('.pause-menu').classList.add('hidden');
    document.querySelector('.menu').classList.remove('hidden');
    document.querySelector('.result').classList.add('hidden');
}

function showInstructions() {
    document.querySelector('.menu').classList.add('hidden');
    document.querySelector('.instructions').classList.remove('hidden');
}

function hideInstructions() {
    document.querySelector('.instructions').classList.add('hidden');
    document.querySelector('.menu').classList.remove('hidden');
}

function backToMenu() {
    document.querySelector('.difficulty-selection').classList.add('hidden');
    document.querySelector('.category-selection').classList.add('hidden');
    document.querySelector('.menu').classList.remove('hidden');
}

function backToDifficulty() {
    document.querySelector('.category-selection').classList.add('hidden');
    document.querySelector('.difficulty-selection').classList.remove('hidden');
}
