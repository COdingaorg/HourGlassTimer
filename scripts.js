$(document).ready(function () {
  //show time on page
  var dateShow = new Date();
  $('#showTIme').append(dateShow);
  
  $('button#submit').click(function (event) {
    event.preventDefault();
    
    //device time--also the start time in miliseconds
    const deviceTime = new Date().getTime();

    //setting user time-- also the duration
    //getting input from form
    var timerHours = parseInt($('input#hours').val());
    var timerMinutes = parseInt($('input#minutes').val());
    var timerSeconds = parseInt($('input#seconds').val());


    //user Time--converted set time to miliseconds--duration in milliseconds
     //user Time--converted set time to miliseconds--duration in milliseconds
     const userTime = (Math.floor(timerHours*3600000))+(Math.floor(timerMinutes*60000))+(Math.floor(timerSeconds*1000));

    // getting the target time -- also the end
    const finalTime = deviceTime + userTime;

    //getting the difference
    //to get the lapse time, we deduct the start time from the current time
    //eg if it is now 14.58.30, and our start time was 14.57.00, the lapse time is 0.01.30//counting down
    //this should be done at an interval of 1 second
    var x = setInterval(function () {
      var currentTime = new Date().getTime();
      var lapseTime = currentTime - deviceTime;
      
      //now time remaining will be duration minus lapse time
      var remainingTime = userTime - lapseTime;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      //show time remaining
      var countTime = `<h3 id="countTimer">${days} -Days, || ${hours}-Hours, || ${minutes}- Minutes, || ${seconds}-Seconds</h3>`;

      //getting timer s to control height of our hour glass content
      var timerS = (remainingTime/userTime)*100;


      //displaying results on homepage
      $('#display').append(countTime);
      $('#display h3').first().remove()
      $('form label, #title, #submit').hide();
      $('#reset').show();

      var percAdd = timerS + '%';
      var percSub = (100 - timerS) + '%';
      
      var percNum = parseInt(timerS);
      //resizing hour glass content 
      if (percNum <= 50){
        $('#upperGlass div').css('width', '96%')
      }else if (percNum <= 39){
        $('#upperGlass div').css('width', '80%')
      }
      else if (percNum <= 20){
        $('#upperGlass div').css('width', '75%')
      }else if (percNum <= 8){
        $('#upperGlass div').css('width', '70%')
      }      ;

      $('#upperGlass div').css('height', percAdd);
      $('#lowerGlass div').css('height', percSub);
      console.log((percAdd));

      
      //reload page with reset button
      $('#reset').click(function(){
        location.reload(true)
      })

      //clearing and sopping count down once 0 is reached
      if(remainingTime<=0){
        clearInterval(x);
        $('#display p').first().remove()
        $('#display').append('<h2>Time Is Up!</h2>');
      }
    },1000)
  })
})