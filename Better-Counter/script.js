const decrease = document.querySelector('#dec-btn');
const reset = document.querySelector('#res-btn');
const increase = document.querySelector('#inc-btn');
const text = document.querySelector('h2');

let counter = 0;
text.textContent = counter;

function analyze(n) {
    if (n < 0) {
        text.style.color = 'orange';
    } else if (n > 0) {
        text.style.color = 'green';
    } else {
        text.style.color = 'black';
    }
}

decrease.addEventListener('click', () => {
    counter--;
    text.textContent = counter;
    analyze(counter);
})

increase.addEventListener('click', () => {
    counter++;
    text.textContent = counter;
    analyze(counter);
})

reset.addEventListener('click', () => {
    counter = 0;
    text.textContent = counter;
    analyze(counter);
})