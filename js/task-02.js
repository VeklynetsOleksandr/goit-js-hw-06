const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const containerItems = document.querySelector('#ingredients')

const makeIngredientsOptions = (options) => {
  return options.map(option => {
  const itemRef = document.createElement('li')
  itemRef.textContent = option
  itemRef.classList.add('item')
    
  return itemRef;
})
}

const elements = makeIngredientsOptions(ingredients);
containerItems.append(...elements)
