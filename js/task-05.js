

// const input = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");
// function onInputChange() {
//     if (input.value === '') {
//         return nameOutput.innerHTML;
//     }
//     return (nameOutput.textContent = input.value);
// }
// input.addEventListener("input", onInputChange);






const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
spanRef.textContent = 'незнакомец';
const updateValue = event => {
    if (event.target.value === '') {
        spanRef.textContent = 'незнакомец';
        return;
    }
    spanRef.textContent = event.target.value;
};
inputRef.addEventListener('input', updateValue);