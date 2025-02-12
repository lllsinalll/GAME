'use strict';

let secretNum = Math.trunc(Math.random() * 50) + 1;
let score = 6;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = 'Please Put a Number';
  } else if (guess == secretNum) {
    document.querySelector('.message').textContent = '🎉Correct!';
    document.querySelector('.label-highscore').textContent =
      '🥇 highscore :' + score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNum;
  } else if (guess > secretNum) {
    if (score > 0) {
      score--;
      document.querySelector('.message').textContent = '📈too high!';
      document.querySelector('.label-score').textContent = '❤ Lives:' + score;
    } else {
      document.querySelector('.message').textContent = 'You lost :(';
    }
  } else if (guess < secretNum) {
    if (score > 0) {
      score--;
      document.querySelector('.message').textContent = '📉too low!';
      document.querySelector('.label-score').textContent = '💖 Lives:' + score;
    } else {
      document.querySelector('.message').textContent = 'You lost :(';
    }
  }

  if (score <= 0) {
    document.querySelector('.message').textContent = 'You lost :(';
    document.querySelector('.check').disabled = true; // Disable the check button when score is 0
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.trunc(Math.random() * 50) + 1;
  score = 6;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-score').textContent = '💖 Lives:  ' + score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.check').disabled = false; // Re-enable the check button when starting a new game
});
