const categoriesEl = document.querySelectorAll(`.item`);

categoriesEl.forEach(category => {
    console.log('Категория:', category.querySelector('h2').textContent);
    console.log('Категория:', category.querySelectorAll('li').length)
})