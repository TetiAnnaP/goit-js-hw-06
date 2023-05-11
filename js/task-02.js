const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

const ingredientsItem = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  return ingredientEl;
});

ingredientsList.append(...ingredientsItem);

// const ingredientsEl = ingredients
//   .map((ingredient) => `<li>${ingredient}</li>`)
//   .join('\n');
