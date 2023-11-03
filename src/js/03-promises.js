import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  closeOnClick: true,
  position: 'topRight',
  progressBar: false,
  timeout: 5000,
  transitionIn: 'bounceInUp',
});

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const fields = e.target.elements;

  const delay = fields.delay.value;
  const step = fields.step.value;
  const amount = fields.amount.value;

  setTimeout(() => {
    for (let i = 1; i <= amount; i++) {
      getPromisResult(i, step * i);
    }
  }, delay);
});

// ------------------------------- Helpers
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function getPromisResult(num, step) {
  createPromise(num, step)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
