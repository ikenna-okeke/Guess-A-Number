'use strict';
const randomNumber = Math.trunc((Math.random() * 20) + 1);
const mark = document.querySelector('.mark').textContent;
let count = 10;
let highscore = 0;

const messs = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const numbb = Number(document.querySelector('.numbb').value)
    if (!numbb) {
        messs('Input a value');
    }
    if (numbb === randomNumber) {
        if (count > highscore)
            highscore = count;
        document.querySelector('.highscore').textContent = `Highscore:${count}`;
        document.querySelector('.mark').textContent = randomNumber;
        messs('YOU CORRECT');
    }

    if (numbb !== randomNumber) {
        if (count > 0) {
            messs(numbb > randomNumber ? 'TOO HIGH A GUESS' : 'TOO LOW A GUESS');
            count--;
            document.querySelector('.score').textContent = count;
        } else {
            messs('YOU LOST THE GAME');
        }
    }

})

document.querySelector('.guess').addEventListener('click', function () {
    Math.trunc((Math.random() * 20) + 1);
    count = 10;
    document.querySelector('.score').textContent = count;
    document.querySelector('.mark').textContent = '?';

})
