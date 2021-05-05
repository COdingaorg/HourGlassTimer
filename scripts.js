//set time we are counting to
$(document).ready(function () {
  var deviceDate = new Date().toLocaleDateString();
  var deviceTime = new Date().toLocaleTimeString();
  var dateArray = deviceDate.split('/').reverse().join(' ');

  $('input#timeInput').submit(function (event) {
    event.preventDefault();
    console.log('Before')
    var timerHours = $('#hours').val();
    var timerMinutes = $('input#minutes').val();
    var timerSeconds = $('input#seconds').val();
    var timerSet = timerHours + ' ' + timerMinutes + ' ' + timerSeconds;
    var userSet = new Date(dateArray);
    console.log('timerHours');

  })
  // var userDate = new Date()
  // var userTime = $('input#hours').val();
  // var time = 87;
  // var percAdd = time+'%';
  // var percSub = (100-time)+'%';
  //   $('#upperGlass div').css('height',percAdd);
  //   $('#lowerGlass div').css('height',percSub);
})