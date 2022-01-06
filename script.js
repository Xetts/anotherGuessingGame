'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;

const secretNumber = Math.floor(Math.random() * 20);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! 😑';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
  } else {
    document.querySelector('.message').textContent = `You're right!`;
  }
});

console.log(secretNumber);
