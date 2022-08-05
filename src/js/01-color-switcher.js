const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(event) {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  // console.log(event.target);
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

stopBtn.addEventListener('click', onBtnStopClick);

function onBtnStopClick(event) {
  // console.log(event.target);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(intervalId);
}
