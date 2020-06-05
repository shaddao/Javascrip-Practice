setInterval(setClock, 1000);
setInterval(DisplayCurrentTime, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}

function DisplayCurrentTime() {
    var date = new Date();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time = hours + ": " + minutes + ": " + seconds;
    var digital = document.getElementById("digital");
    digital.innerHTML = time;
}

setClock();
DisplayCurrentTime();

const thanks = "Thanks web dev simplified!";
