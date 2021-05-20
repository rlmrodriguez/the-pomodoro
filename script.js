const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const focusMins = document.getElementById('f_minutes');
const focusSecs = document.getElementById('f_seconds');

const breakMins = document.getElementById('b_minutes');
const breakSecs = document.getElementById('b_seconds');

let startPomodoro;

function timer() {
  if (focusSecs.innerText != 0) {
    focusSecs.innerText--;
  } else if (focusMins.innerText != 0 && focusSecs.innerText == 0) {
    focusSecs.innerText = 59;
    focusMins.innerText--;
  }

  if (focusMins.innerText == 0 && focusSecs.innerText == 0) {
    if (breakSecs.innerText != 0) {
      breakSecs.innerText--;
    } else if (breakMins.innerText != 0 && breakSecs.innerText == 0) {
      breakSecs.innerText = 59;
      breakMins.innerText--;
    }
  }

  if (
    focusMins.innerText == 0 &&
    focusSecs.innerText == 0 &&
    breakMins.innerText == 0 &&
    breakSecs.innerText == 0
  ) {
    focusMins.innerText = 25;
    focusSecs.innerText = '00';

    breakMins.innerText = 5;
    breakSecs.innerText = '00';

    document.getElementById('counter').innerText++;
  }

  document.title = `${
    focusMins.innerText == 0 && focusSecs.innerText == 0
      ? breakSecs.innerText + ':' + breakMins.innerText + ' - Break'
      : focusMins.innerText + ':' + focusSecs.innerText + ' - Focus'
  }`;
}

function stopInterval() {
  clearInterval(startPomodoro);
}

start.addEventListener('click', function () {
  if (startPomodoro === undefined) {
    startPomodoro = setInterval(timer, 1000);
  } else {
    alert('The Pomodoro Timer is already running.');
  }
});

stop.addEventListener('click', function () {
  stopInterval();
  startPomodoro = undefined;
});

reset.addEventListener('click', function () {
  focusMins.innerText = 25;
  focusSecs.innerText = '00';

  breakMins.innerText = '05';
  breakSecs.innerText = '00';

  document.title = 'The Pomodoro';
  document.getElementById('counter').innerText = 0;
  stopInterval();
  startPomodoro = undefined;
});

stop.addEventListener('click', function () {
  stopInterval();
  startPomodoro = undefined;
});
