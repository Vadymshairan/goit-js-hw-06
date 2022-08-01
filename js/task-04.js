let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);
const counterValueEll = document.querySelector('#value');
// console.log(counterValueEll.textContent);

decrementBtn.addEventListener('click', () => (counterValueEll.textContent = counterValue -= 1));

// function onDecrementBtnClick(params) {
//   counterValue -= 1;
// }

incrementBtn.addEventListener('click', () => (counterValueEll.textContent = counterValue += 1));
// function onIncrementBtnClick(params) {}
