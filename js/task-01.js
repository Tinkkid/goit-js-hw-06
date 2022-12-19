// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item

const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

numberOfCategories.forEach((list) => {
  const numberOfEachCategories = list.children[1];
  const nameOfCategory = list.children[0];
   console.log(`Category: ${nameOfCategory.textContent}`);
   console.log(`Elements: ${numberOfEachCategories.children.length}`);
});


