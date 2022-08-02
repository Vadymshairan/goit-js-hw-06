function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor());
const bodyRef = document.querySelector('body');
// console.log((bodyRef.style.backgroundColor = 'teal'));
const btnChangeColorRef = document.querySelector('.change-color');
console.log(btnChangeColorRef);
const spanColorRef = document.querySelector('.color');
console.log(spanColorRef.textContent);

btnChangeColorRef.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanColorRef.textContent = getRandomHexColor();
}
