// DOM Elements
const startBtn = document.getElementById('start-btn'); // Button to start the quiz
const quizScreen = document.getElementById('quiz-screen'); // Quiz screen element
const startScreen = document.getElementById('start-screen'); // Start screen element
const endScreen = document.getElementById('end-screen'); // End screen element
const highscoresScreen = document.getElementById('highscores-screen'); // Highscores screen element
const questionElement = document.getElementById('question'); // Element to display the question
const choicesElement = document.getElementById('choices'); // Element to display answer choices
const timerElement = document.getElementById('time'); // Timer element
const finalScoreElement = document.getElementById('final-score'); // Element to display final score
const highscoreForm = document.getElementById('highscore-form'); // Highscore form
const initialsInput = document.getElementById('initials'); // Input field for initials
const highscoresList = document.getElementById('highscores-list'); // List to display highscores
const goBackBtn = document.getElementById('go-back'); // Button to go back to start screen
const clearHighscoresBtn = document.getElementById('clear-highscores'); // Button to clear highscores

// Quiz Questions
const questions = [
    {
        question: "What is the full form of HTML?",
        choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is the full form of CSS?",
        choices: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is the full form of JS?",
        choices: ["JavaScript", "JavaSource", "JavaServer"],
        answer: "JavaScript"
    }
];

// Variables
let currentQuestionIndex = 0; // Index of current question
let time = 60; // Timer value
let timerInterval; // Interval for timer

// Event Listeners
startBtn.addEventListener('click', startQuiz); // Start quiz button
choicesElement.addEventListener('click', handleChoiceClick); // Answer choices
highscoreForm.addEventListener('submit', saveHighscore); // Highscore form submission
goBackBtn.addEventListener('click', showStartScreen); // Go back to start screen button
clearHighscoresBtn.addEventListener('click', clearHighscores); // Clear highscores button

// Functions
// Start the quiz
function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    timerInterval = setInterval(updateTimer, 1000);
    showQuestion();
}

// Update timer every second
function updateTimer() {
    time--;
    timerElement.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}

// Display the current question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice-btn');
        choicesElement.appendChild(button);
    });
}

// Handle user choice
function handleChoiceClick(event) {
    if (!event.target.matches('.choice-btn')) return;
    const selectedChoice = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedChoice !== correctAnswer) {
        time -= 10;
        if (time < 0) time = 0;
        timerElement.textContent = time;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

// End the quiz
function endQuiz() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    finalScoreElement.textContent = time;
}

// Save highscore to local storage
function saveHighscore(event) {
    event.preventDefault();
    const initials = initialsInput.value.trim();
    if (initials === '') return;
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    const newScore = { initials, score: time };
    highscores.push(newScore);
    localStorage.setItem('highscores', JSON.stringify(highscores));
    initialsInput.value = '';
    showHighscores();
}

// Display highscores
function showHighscores() {
    endScreen.classList.add('hidden');
    highscoresScreen.classList.remove('hidden');
    highscoresList.innerHTML = '';
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    highscores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = `${score.initials} - ${score.score}`;
        highscoresList.appendChild(li);
    });
}

// Show start screen
function showStartScreen() {
    highscoresScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    time = 60;
    timerElement.textContent = time;
}

// Clear highscores
function clearHighscores() {
    localStorage.removeItem('highscores');
    showHighscores();
}
