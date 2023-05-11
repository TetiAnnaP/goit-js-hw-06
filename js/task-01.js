const categories = document.querySelectorAll('.item');
console.log('Number of categories', categories.length);

const categoriesTitles = categories.forEach((category) => {
  console.log('Category', category.firstElementChild.textContent);
  const categoryElements = category.querySelectorAll('li');
  console.log('Elements', categoryElements.length);
});
