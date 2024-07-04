let level = 1;
let score = 0;
let timeLeft = 10;

const levelElement = document.getElementById('level');
const scoreElement = document.getElementById('score');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const checkAnswerButton = document.getElementById('check-answer');
const resultElement = document.getElementById('result');
const timerElement = document.getElementById('timer');

function newQuestion() {
    timeLeft = 10;
    levelElement.textContent = `Level: ${level}`;
    scoreElement.textContent = `Score: ${score}`;
    let num1 = Math.floor(Math.random() * (10 * level)) + 1;
    let num2 = Math.floor(Math.random() * (10 * level)) + 1;
    questionElement.textContent = `What is ${num1} + ${num2}?`;
    answerElement.value = '';
    resultElement.textContent = '';
}

function checkAnswer() {
    let userAnswer = parseInt(answerElement.value);
    let num1 = parseInt(questionElement.textContent.split(' ')[2]);
    let num2 = parseInt(questionElement.textContent.split(' ')[4]);
    if (userAnswer === num1 + num2) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = '#4CAF50';
        score += 10 * level;
        levelUp();
    } else {
        resultElement.textContent = 'Try again!';
        resultElement.style.color = '#f44336';
    }
    scoreElement.textContent = `Score: ${score}`;
}

function levelUp() {
    if (score >= level * 100) {
        level++;
        newQuestion();
    } else {
        newQuestion();
    }
}

checkAnswerButton.addEventListener('click', checkAnswer);

function updateTimer() {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    if (timeLeft <= 0) {
        resultElement.textContent = 'Time\'s up! Next question.';
        resultElement.style.color = '#ff9800';
        newQuestion();
    }
    timeLeft--;
}

setInterval(updateTimer, 1000);

// Initialize game
newQuestion();
