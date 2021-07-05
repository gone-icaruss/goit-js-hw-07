const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientsList = document.getElementById('ingredients');
ingredients.forEach((ingridient) => {
    const ingredientsListItem = document.createElement('li');
    ingredientsList.appendChild(ingredientsListItem);
    ingredientsListItem.textContent = `${ingridient}`;
});
console.log(ingredientsList)

