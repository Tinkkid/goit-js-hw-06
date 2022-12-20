const input = document.querySelector("#validation-input");
console.log(input);
input.addEventListener('blur', handleClickInput);

function handleClickInput(event) {
   let defaultLength = +this.dataset.length;
   let inputLength = this.value.length;
   console.log(defaultLength);
   console.log(inputLength);
   
   if (defaultLength === inputLength) {
     this.classList.add("valid");
   } else {
     this.classList.add("invalid");
   };
}