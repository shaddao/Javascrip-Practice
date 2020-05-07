const button = document.querySelector('button');
let body = document.querySelector('body');

const colors = ['blue', 'pink', 'yellow', 'orange', 'brown', 'red', 'violet', 'aqua'];

let i = 0;
button.addEventListener('click', changeColor);

function changeColor() {
    if (i == 0) {
        body.style.background = colors[i];
        i++;
    }
    else if (i == colors.length - 1) {
        body.style.background = colors[colors.length - 1];
        i = 0;
    }
    else if (i > 0) {
        body.style.background = colors[i];
        i++;
    }
}
