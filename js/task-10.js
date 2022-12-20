function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector('input'),
  addedBoxes: document.querySelector('#boxes')
};

function createBoxes(amount) {
  const collectionOfBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${30 + 10 * i}px`;
    newBox.style.height = `${30 + 10 * i}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    collectionOfBoxes.push(newBox);
  }
  return collectionOfBoxes;
};

refs.createBtn.addEventListener('click', () => {
  const elementToadd = createBoxes(refs.input.value);
  refs.addedBoxes.append(...elementToadd);
});

refs.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  refs.addedBoxes.innerHTML = '';
}

