// const counterRef = document.querySelector('#counter')
// console.log(counterRef)
// const counterValue = document.querySelector('#value');
// const btnDecrement = document.querySelector('#counter button[data-action="decrement"]');
// const btnIncrement = document.querySelector('#counter button[data-action="increment"]');
// const increment = () => Number(counterValue.textContent -= btnDecrement.textContent);
// const decrement = () => Number(counterValue.textContent -= btnIncrement.textContent);
// btnDecrement.addEventListener('click', decrement);
// btnIncrement.addEventListener('click', increment);





let counterValue = 0;
const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};
const decrementValue = document.querySelector(
    'button[data-action="decrement"]',
);
const incrementValue = document.querySelector(
    'button[data-action="increment"]',
);
const value = document.querySelector('#value');
incrementValue.addEventListener('click', increment);
decrementValue.addEventListener('click', decrement);