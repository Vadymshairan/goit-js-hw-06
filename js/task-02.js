const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulEl = document.querySelector('#ingredients');

// const element = ingredients.map(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   itemEl.classList.add('item');
//   // console.log(itemEl);

//   return itemEl;
// });

// console.log(element);
// // console.log(arrayItems);
// ulEl.append(...element);

const makeItemsList = options => {
  return options.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const elements = makeItemsList(ingredients);
console.log(elements);

ulEl.append(...elements);
