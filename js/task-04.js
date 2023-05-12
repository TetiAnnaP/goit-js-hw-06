const value = document.querySelector('#value');
const buttons = document.querySelectorAll('button');

let counterValue = 0;

buttons[0].addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

buttons[1].addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
