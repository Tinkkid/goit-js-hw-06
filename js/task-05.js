const refs = {
  input: document.querySelector("#name-input"),
  spanData: document.querySelector("#name-output"),
};

refs.input.addEventListener('input', changeData);

function changeData(event) {
  if (event.currentTarget.value === '') {
    refs.spanData.textContent = "Anonymous!";
  }
  else { refs.spanData.textContent = event.currentTarget.value};
};
