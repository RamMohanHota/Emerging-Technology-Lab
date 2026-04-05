let timerDisplay = document.createElement("p");

document.body.appendChild(timerDisplay);

let time = 10;

let countdown = setInterval(function () {
    timerDisplay.textContent = time;
    time--;

    if (time < 0) {
        clearInterval(countdown);
        timerDisplay.textContent = "khel khatam";
    }
}, 1000);
    