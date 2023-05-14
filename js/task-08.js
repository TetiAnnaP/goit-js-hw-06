const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (
    event.currentTarget.email.value === '' ||
    event.currentTarget.password.value === ''
  ) {
    alert('Input cannot be empty');
  } else {
    console.log({ email, password });
    formEl.reset();
  }
}
