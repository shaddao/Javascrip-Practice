const boxes = document.querySelectorAll(".boxes");
const body = document.querySelector("body");

const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let bodyHex = "";
for (let i = 0; i < 6; i++) {
    let generate = Math.floor(Math.random() * hexArr.length);
    bodyHex += hexArr[generate];
}
body.style.backgroundColor = `#${bodyHex}`;

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        let boxHex = "";
        const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
        for (let i = 0; i < 6; i++) {
            let generate = Math.floor(Math.random() * hexArr.length);
            boxHex += hexArr[generate];
        }
        box.style.backgroundColor = `#${boxHex}`;
    });
});

setInterval(() => {
    let boxHex = "";
    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    for (let i = 0; i < 6; i++) {
        let generate = Math.floor(Math.random() * hexArr.length);
        boxHex += hexArr[generate];
    }
    body.style.backgroundColor = `#${boxHex}`;
}, 6500);
alert("Click anywhere on the page.");
alert("This is boring but who cares lol");