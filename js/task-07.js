const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function fontSizeEl() {
  textEl.style.fontSize = `${inputEl.value}px`;
}

inputEl.addEventListener('input', fontSizeEl);
