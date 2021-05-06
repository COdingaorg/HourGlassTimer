//set time we are counting to
var x = setInterval(function(){
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

    var userSet = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), timerHours, timerMinutes, timerSeconds);

    //user Time--converted set time to miliseconds--duration in milliseconds
    var userTime = (userSet.getTime())
   
    // getting the target time -- also the end
    const finalTime = deviceTime + userTime;

    //getting the difference
    var distance = finalTime - deviceTime;

   // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //show time remaining
  var countTime = `<p id="countTimer">Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds} </p>`;
  

 
    //getting timer s to control height of our hour glass content
    var timerS = Math.floor(distance/1000);

    $('#display').append(countTime);
  var percAdd = timerS+'%';
  var percSub = (100-timerS)+'%';
    $('#upperGlass div').css('height',percAdd);
    $('#lowerGlass div').css('height',percSub);
})
})
},1000)