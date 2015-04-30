var timerDisplay = document.querySelector("#timer");
var startButton = document.querySelector("#start");
var resetButton = document.querySelector("#reset");
var pauseButton = document.querySelector("#pause");

var startTime = 0;

startButton.addEventListener("click", function(event){
  event.preventDefault()
  timer = setInterval(function() {
    timerDisplay.innerHTML = "Time Elapsed: " + startTime + " seconds"; startTime++
  }, 1000);
})

resetButton.addEventListener("click", function(event){
  timer.innerHTML = "Stop Watch";
  clearInterval( timer );
  startTime = 0 ;
})

pauseButton.addEventListener("click", function( event ){
   clearInterval( timer );
 })
