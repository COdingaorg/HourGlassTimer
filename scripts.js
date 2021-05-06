//set time we are counting to
$(document).ready(function () {
  $('button#submit').click(function (event) {
    event.preventDefault();

    var timerHours = $('input#hours').val();
    var timerMinutes = $('input#minutes').val();
    var timerSeconds = $('input#seconds').val();
    var userSet = `${timerHours}:${timerMinutes}:${timerSeconds}`
    var userDate = `${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}`;
    var deviceTIme = new Date().getTime();
    var userTime = 

    console.log(userDate);


     // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  })
  // var userDate = new Date()
  // var userTime = $('input#hours').val();
  // var time = 87;
  // var percAdd = time+'%';
  // var percSub = (100-time)+'%';
  //   $('#upperGlass div').css('height',percAdd);
  //   $('#lowerGlass div').css('height',percSub);
})