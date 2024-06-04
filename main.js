var interval;
var remainingTime;

function startCountdown() {
    var days = parseInt(document.getElementById('days').value) || 0;
    var hours = parseInt(document.getElementById('hours').value) || 0;
    var minutes = parseInt(document.getElementById('minutes').value) || 0;
    var seconds = parseInt(document.getElementById('seconds').value) || 0;

    remainingTime = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;
    updateCountdownDisplay();

    if (interval) {
        clearInterval(interval);
    }

    interval = setInterval(function() {
        remainingTime--;
        updateCountdownDisplay();

        if (remainingTime <= 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Countdown abgelaufen";
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(interval);
}

function resetCountdown() {
    clearInterval(interval);
    document.getElementById('days').value = '';
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById("countdown").innerHTML = '';
}

function updateCountdownDisplay() {
    var days = Math.floor(remainingTime / (24 * 60 * 60));
    var hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
    var minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    var seconds = remainingTime % 60;

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
}