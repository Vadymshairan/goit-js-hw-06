const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulEl = document.querySelector('#ingredients');
const arrayItems = [];
const itemEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');

  arrayItems.push(itemEl);
});

// console.log(itemEl);
// console.log(arrayItems);
ulEl.append(...arrayItems);
