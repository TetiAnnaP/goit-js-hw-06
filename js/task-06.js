const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.getAttribute('data-length');
const style = document.querySelector('style');

function setvalid() {
  if (
    inputEl.value.length === Number(inputEl.dataset.length) &&
    !inputEl.classList.contains('invalid')
  ) {
    inputEl.classList.add('valid');
  } else if (
    inputEl.value.length === Number(inputEl.dataset.length) &&
    inputEl.classList.contains('invalid')
  ) {
    inputEl.classList.replace('invalid', 'valid');
  } else if (
    inputEl.value.length !== Number(inputEl.dataset.length) &&
    inputEl.classList.contains('valid')
  ) {
    inputEl.classList.replace('valid', 'invalid');
  } else {
    inputEl.classList.add('invalid');
  }
}

inputEl.addEventListener('blur', setvalid);
