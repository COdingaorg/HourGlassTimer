$(document).ready(function () {
  $('button#submit').click(function (event) {
    event.preventDefault();
    //device time--also the start time in miliseconds
    var deviceTime = new Date().getTime();

    //setting user time-- also the duration
    //getting input from form
    var timerHours = parseInt($('input#hours').val());
    var timerMinutes = parseInt($('input#minutes').val());
    var timerSeconds = parseInt($('input#seconds').val());
    
    //user Time--converted set time to miliseconds--duration in milliseconds
    var userTime = (Math.floor(timerHours*3600000))+(Math.floor(timerMinutes*60000))+(Math.floor(timerSeconds*1000));

    var days = Math.floor(userTime / (1000 * 60 * 60 * 24));
      var hours = Math.floor((userTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((userTime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((userTime % (1000 * 60)) / 1000);

      var countTime = `<p id="countTimer">Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds} </p>`;
      console.log(countTime);

    console.log(userTime)
  
})
})