const input = document.querySelector("#validation-input");
console.log(input);

const lengthOfInput = +input.getAttribute('data-length');
console.log(lengthOfInput);

input.addEventListener('blur', handleClickInput);

function handleClickInput() {
   if (input.value.length === lengthOfInput) {
     input.classList.add('valid');
     input.classList.remove('invalid');
   }
   else {
     input.classList.add('invalid');
     input.classList.remove('valid');
  }
};