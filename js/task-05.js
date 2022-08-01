const inputEll = document.querySelector('#name-input');
console.log(inputEll);
const outputEll = document.querySelector('#name-output');
console.log(outputEll);

inputEll.addEventListener('input', onInputChange);

function onInputChange(event) {
  outputEll.textContent = event.currentTarget.value;
  console.dir(event.currentTarget.value);
  if (event.currentTarget.value === '') {
    return (outputEll.textContent = 'Anonymous');
  }
}
