const inputRef = document.querySelector('#validation-input');
const validInput = Number(inputRef.dataset.length);
// console.log(typeof validInput);
// console.log(validInput);

inputRef.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
  const inputNumber = event.currentTarget.value.length;
  //   console.log(typeof inputNumber);
  if (validInput === inputNumber) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');

    console.log('validation passed');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');

    console.log('you shall not pass');
  }
}
