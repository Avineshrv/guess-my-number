'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
const inputGuess = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
let score = 20;
let highScore = 0;

const wrongGuess = function (message) {
  if (score > 1) {
    document.querySelector('.message').textContent = message;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = message;
    document.querySelector('.score').textContent = 0;
  }
};

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

checkButton.addEventListener('click', function () {
  const guess = Number(inputGuess.value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    wrongGuess(`${guess < secretNumber ? 'Too Low' : 'Too High'}`);
  }
});

const againButton = document.querySelector('.again');
againButton.addEventListener('click', function () {
  displayMessage('Start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  inputGuess.value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber, '2');
});
