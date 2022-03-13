const counterElement = document.querySelector('#counter');

let counter = 0;
let timerID;

// Старт
const btnStart = document.querySelector('#start');
btnStart.onclick = function() {
  console.log('Start');
  timerID = setInterval(function() {
    counter ++;
    counterElement.innerText = counter;
  }, 1000);
}

// Пауза
const btnPause = document.querySelector('#pause');
btnPause.onclick = function() {
  console.log('Pause');
  clearInterval(timerID);
}

// Сброс
const btnReset = document.querySelector('#reset');
btnReset.onclick = function() {
  console.log('Reset');
  counter = 0;
  counterElement.innerText = counter;
  clearInterval(timerID);
}