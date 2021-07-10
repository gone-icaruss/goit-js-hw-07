// const input = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");
// function onInputChange() {
//     return (nameOutput.textContent = input.value);
// }
// input.addEventListener("input", onInputChange);

const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
function onInputChange() {
    if (input.value === '') {
        return nameOutput.innerHTML;
    }
    return (nameOutput.textContent = input.value);
}
input.addEventListener("input", onInputChange);






