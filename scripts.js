//set time we are counting to
$(document).ready(function () {
  $('button#submit').click(function (event) {
    event.preventDefault();
      //setting user time to count down from
      //getting input from form
    var timerHours = parseInt($('input#hours').val());
    var timerMinutes = parseInt($('input#minutes').val());
    var timerSeconds = parseInt($('input#seconds').val());

    //device time
    var deviceTime = new Date().getTime();
    var userSet = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), timerHours, timerMinutes, timerSeconds);

    //user Time
    var userTime = (userSet.getTime())
   
    //getting the difference
    var distance = userTime-deviceTime;

   // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //show time remaining
  var countTime = `<p id="countTimer">Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds} </p>`;
  

 
    //getting timer s to control height of our hour glass content
    var timerS = Math.floor(distance/1000);

    console.log(timerS);
    console.log(distance);
  var percAdd = timerS+'%';
  var percSub = (100-timerS)+'%';
    $('#upperGlass div').css('height',percAdd);
    $('#lowerGlass div').css('height',percSub);
})
})