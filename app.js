const button = document.querySelector('button');
const body = document.querySelector('body');
const span = document.querySelector('span');


button.addEventListener('click', changeColor);

function changeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = `#${randomColor}`;
    span.textContent = `#${randomColor.toUpperCase()}`
}