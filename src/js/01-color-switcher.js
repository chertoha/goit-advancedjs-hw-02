const INTERVAL_VALUE = 1000;

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

const intervalInstance = createInterval(() => {
  document.body.style.backgroundColor = getRandomHexColor();
  startButton.disabled = true;
}, INTERVAL_VALUE);

startButton.addEventListener('click', intervalInstance.startInterval);
stopButton.addEventListener('click', () => {
  intervalInstance.stopInterval();
  startButton.disabled = false;
});

// ------------------------------------- Helpers
function createInterval(callback, time) {
  let intervalId = null;

  return {
    startInterval: () => {
      intervalId = setInterval(callback, time);
    },

    stopInterval: () => {
      clearInterval(intervalId);
      intervalId = null;
    },
  };
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
