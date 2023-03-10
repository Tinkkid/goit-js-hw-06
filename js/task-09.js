function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonEl: document.querySelector(".change-color"),
  body: document.querySelector('body'),
  valueOfColor: document.querySelector('.color'),
};

refs.buttonEl.addEventListener("click", handleChangeColorClick);

function handleChangeColorClick(event) {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.valueOfColor.textContent = randomColor;
};

