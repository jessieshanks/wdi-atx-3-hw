var timer = 0;
var secondInterval;

function updateTimer() {
  $('#timer').text("Time elapsed: "+timer).show();
  timer += 1;
}

function startTimer() {
  secondInterval = setInterval(function(){updateTimer()}, 1000);
}

function stopTimer() {
  clearInterval(secondInterval);
}


$(document).ready(function() {

 $('#start').on('click', function() {
     startTimer();
  })

 $('#reset').on('click', function() {
    stopTimer();
    $('#timer').text("Stop Watch").show();
    timer = 0;
 })

 $('#pause').on('click', function() {
    stopTimer();
 })

})
