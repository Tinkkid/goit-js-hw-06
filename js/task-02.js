// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfElements = document.querySelector("#ingredients");

const listEl = ingredients.map(ingredient => {
  const markupEl = document.createElement('li');
  markupEl.classList.add('item');
  markupEl.textContent = ingredient;
  console.log(markupEl);
  return markupEl;
});

listOfElements.append(...listEl);

