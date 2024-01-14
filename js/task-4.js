const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const inputFields = event.target.elements;
  const inputData = {};

  for (const input of inputFields) {
    if (input.type !== 'submit') {
      const inputValue = input.value.trim();
      if (inputValue === '') {
        alert('All form fields must be filled in');
        return;
      }
      inputData[input.name] = inputValue;
    }
  }

  console.log(inputData);
  loginForm.reset();
});
