

const display = document.getElementById('display');       
const startButton = document.getElementById('start');  
const stopButton = document.getElementById('stop');  
const resetButton = document.getElementById('reset');  

 let intervalId;
 let elapsedTime = 0;


  function formatTime(time){  
    let hours =  Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  }

// Transforma os segundos em um formato hh:mm:ss.
// Math.floor() arredonda os valores para baixo.
// padStart(2, '0') garante que os números tenham sempre dois dígitos.



function updateTime() {
  elapsedTime++
  display.textContent = formatTime(elapsedTime);
}

//A cada segundo, aumenta elapsedTime e atualiza o display.


function start() {
  intervalId = setInterval(updateTime, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;

}


// Inicia um intervalo que executa updateTime() a cada segundo.
// Desativa o botão "Start" para evitar múltiplas execuções.
// Ativa o botão "Stop".

function stop() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
}


//Para o intervalo.
//Reativa o botão "Start" e desativa o "Stop".

function reset() {
  clearInterval(intervalId);
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
  startButton.disabled = false;
  stopButton.disabled = true;
}


//Para o intervalo, zera elapsedTime e atualiza o display. Reativa o botão "Start".

window.onload = function() {
  display.textContent = formatTime(elapsedTime); // Exibe 00:00:00 ao carregar a página
}

// Exibe o tempo no início, assim que a página carrega.

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);


//Associa cada botão a sua respectiva função.





