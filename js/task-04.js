// const counterRef = document.querySelector('#counter')
// console.log(counterRef)
// const counterValue = document.querySelector('#value');
// const btnDecrement = document.querySelector('#counter button[data-action="decrement"]');
// const btnIncrement = document.querySelector('#counter button[data-action="increment"]');
// const increment = () => Number(counterValue.textContent -= btnDecrement.textContent);
// const decrement = () => Number(counterValue.textContent -= btnIncrement.textContent);
// btnDecrement.addEventListener('click', decrement);
// btnIncrement.addEventListener('click', increment);


const counterValue = 0

function increment() {
    counterValue += 1;
    document.getElementById('increment').innerHTML = counterValue;
}

function decrement() {
    counterValue -= 1;
    document.getElementById('decrement').innerHTML = counterValue;
}