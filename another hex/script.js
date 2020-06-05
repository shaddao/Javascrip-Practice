const button = document.querySelector('button');
const hexText = document.querySelector('p');
const body = document.querySelector('body');

const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];


let bodyHex = '';


button.addEventListener('click', changeHex);
body.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        changeHex();
    }
})

function changeHex() {
    for (let i = 0; i < 6; i++) {
        let generate = Math.floor(Math.random() * hexArr.length);
        bodyHex += hexArr[generate];
    }
    body.style.backgroundColor = `#${bodyHex}`;
    hexText.textContent = `#${bodyHex}`;
    bodyHex = '';
}