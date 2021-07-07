const getDataLength = document.querySelector('#validation-input');
const datasetLength = parseInt(getDataLength.dataset.length);
getDataLength.addEventListener('change', function (event) {
    console.log(event.target.value.length);
    console.log(event.target.value.length === datasetLength);
    if (event.target.value.length === datasetLength) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
});