const timer = findElement('.timer__value'); 
const buttons = findElement('.timer__buttons');
let seconds = 0;
let interval;

const timerCounter = () => {
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    timer.innerHTML = null;
    timer.textContent = String(hours).padStart(2, 0) + ':' + String(minutes).padStart(2, 0) + ':' + String(seconds).padStart(2, 0);

    if (minutes >= 1) {
        timer.textContent = String(hours).padStart(2, 0) + ':' + String(minutes).padStart(2, 0) + ':' + String(seconds-60*minutes).padStart(2, 0);
    }

    if (hours >= 1) {
        timer.textContent = String(hours).padStart(2, 0) + ':' + String(minutes-60*hours).padStart(2, 0) + ':' + String(seconds-60*minutes).padStart(2, 0);
    }
}

const startTimer = func => {
    interval = setInterval(func, 1000);
}

const clearTimer = inter => {
    clearInterval(inter);
}

const stopTimer = inter => {
    clearInterval(inter);
}

const handleButtons = evt => {
    const clicked = evt.target;
    if (clicked.matches('.timer__play')) {
        clicked.previousElementSibling.previousElementSibling.style.display = 'inline-block';
        clicked.previousElementSibling.style.display = 'inline-block';
        clicked.style.display = 'none';
        startTimer(timerCounter);
    } else if (clicked.matches('.timer__reset')) {
        clicked.nextElementSibling.style.display = 'none';
        clicked.nextElementSibling.nextElementSibling.style.display = 'inline-block';
        clicked.style.display = 'none';
        seconds = 0;
        clearTimer(interval);
        timer.textContent = "00:00:00";
    } else if (clicked.matches('.timer__stop')) {
        clicked.nextElementSibling.style.display = 'inline-block';
        clicked.style.display = 'none'; 
        stopTimer(interval);
    }
}

buttons.addEventListener('click', handleButtons);