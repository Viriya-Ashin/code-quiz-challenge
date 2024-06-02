# code-quiz-challenge HTML Structure

## Meta Tags
- Sets character encoding to UTF-8
- Configures viewport for responsive design

## Page Title
- **Title:** Code Quiz Challenge

## External CSS
- **Stylesheet:** `./Assets/css/style.css`

## Header Section
- **Quiz Title:** JavaScript Fundamentals Quiz
- **Timer:** Displays remaining time

## Main Section

### Start Screen
- **Welcome Message:** Welcome to the Quiz!
- **Button:** Start Quiz

### Quiz Screen
- **Question:** Displays current question
- **Choices:** Lists answer options (initially hidden)

### End Screen
- **Completion Message:** All done!
- **Score Display:** Shows final score
- **Form:** Submit initials for high score

### High Scores Screen
- **Title:** High Scores
- **List:** Displays high scores
- **Buttons:** Go Back, Clear High Scores

## External JavaScript
- **Script:** `./Assets/js/script.js`


# code-quiz-challenge CSS Structure

## Body
- **Styles:** Arial font, no margin/padding, flexbox, light gray background

## Header
- **Styles:** 95% width, flexbox, green background, white text, padding

## Main
- **Styles:** 100% width, max-width 600px, margin, white background, padding, shadow, border-radius


# code-quiz-challenge JavaScript Structure

## DOM Elements
- Variables for accessing HTML elements such as start button, quiz screens, timer, etc.

## Quiz Questions
- Array containing questions, choices, and correct answers for the quiz.

## Variables
- Tracking variables for current question index, timer, and interval.

## Event Listeners
- Event listeners for starting the quiz, handling user choices, submitting highscores, etc.

## Functions
- Functions to start and end the quiz, update timer, display questions, handle user choices, save highscores, etc.

The code structure is organized with clear comments and follows best practices for a code quiz application.
