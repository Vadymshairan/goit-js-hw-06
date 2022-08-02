const fontSizeControlRef = document.querySelector('#font-size-control');
// console.log(fontSizeControlRef);
const textRef = document.querySelector('#text');
// console.log((textRef.style);

fontSizeControlRef.addEventListener('input', onInputControl);

function onInputControl(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
