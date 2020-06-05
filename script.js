const button = document.querySelector("button");
const name = document.querySelector("#text");
const age = document.querySelector("#number");
const body = document.querySelector("body");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const arr = [];

button.addEventListener("click", function () {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name.value && arr[i].age === age.value) {
            const namee = new Error("Already exists");
            alert(namee);
            name.value = "";
            age.value = "";
            return;
        }
    }
    if (name.value == "" && age.value == "") {
        alert("No name and age");
        return;
    } else if (name.value == "") {
        alert("No name");
        return;
    } else if (age.value == "") {
        alert("No age");
        return;
    } else {
        let n = name.value;
        let a = age.value;
        let app = new Person(n, a);
        arr.push(app);
    }

    let div = document.createElement("div");
    for (let programmer of arr) {
        div.innerText = programmer.name;
        div.innerText += " " + programmer.age;
    }
    body.appendChild(div);
});