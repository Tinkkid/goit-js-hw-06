const counter = {
   value: 0,
   increment () {
      this.value += 1;
   },
   decrement () {
      this.value -= 1;
   },
};

const createDeсreaseBtn = document.querySelector('button[data-action="decrement"]');
const createIncreaseBtn = document.querySelector('button[data-action="increment"]');
const changeValue = document.querySelector('#value');

createDeсreaseBtn.addEventListener('click', () => {
   counter.decrement();  
   changeValue.textContent = counter.value;
});

createIncreaseBtn.addEventListener('click', () => {
   counter.increment();  
   changeValue.textContent = counter.value;
});