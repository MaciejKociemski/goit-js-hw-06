const myInput = document.querySelector('#name-input' );
const mySpan = document.querySelector('#name-output');

myInput.addEventListener('input', newInput);

function newInput(event) {
    //console.log(e.currentTarget);
    mySpan.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        mySpan.textContent = 'Anonymous'
    }
}