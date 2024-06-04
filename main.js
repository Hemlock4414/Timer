let timer;
let totalTime = 0;

function startTimer() {
  let days = document.getElementById('days').value || 0;
  let hours = document.getElementById('hours').value || 0;
  let minutes = document.getElementById('minutes').value || 0;
  let seconds = document.getElementById('seconds').value || 0;
  
  totalTime = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;
  
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  console.log(totalTime);
  
  if (totalTime <= 0) {
    clearInterval(timer);
    document.getElementById('timer').innerText = 'Countdown abgelaufen!';
  } else {
    totalTime--;
    
    let days = Math.floor(totalTime / 86400);
    let hours = Math.floor((totalTime % 86400) / 3600);
    let minutes = Math.floor((totalTime % 3600) / 60);
    let seconds = totalTime % 60;
    
    document.getElementById('timer').innerText = `${days} Tage, ${hours} Stunden, ${minutes} Minuten, ${seconds} Sekunden`;
  }
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById('timer').innerText = '';
  totalTime = 0;
}

function stopTimer() {
  clearInterval(timer);
}