
const valueElement = document.querySelector('#value');

let counterValue = 0;

const buttons = document.querySelectorAll('#counter button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;

    if (action === 'increment') {
      counterValue += 1;
    } else if (action === 'decrement') {
      counterValue -= 1;
    }

    valueElement.textContent = counterValue;
  });