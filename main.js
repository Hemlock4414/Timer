let countdown;
let isRunning = false;

function startTimer() {
    if (isRunning) return;

    const days = parseInt(document.getElementById('days').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    let totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) return;

    isRunning = true;
    countdown = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdown);
            document.getElementById('alarmSound').play();
            isRunning = false;
        } else {
            totalSeconds--;
            updateDisplay(totalSeconds);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    document.getElementById('days').value = '';
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('display').textContent = '00:00:00:00';
}

function updateDisplay(totalSeconds) {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('display').textContent =
        String(days).padStart(2, '0') + ':' +
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');
}