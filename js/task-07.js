const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text')

input.addEventListener('input', changeStyleFont);

console.log(input);

function changeStyleFont(event) {
   spanText.style.fontSize = this.value + 'px';
}