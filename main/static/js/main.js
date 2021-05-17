// Set the date we're counting down to
let now = new Date();
let targetDate = now;
let dayDiff = 0;
if (now.getDay() > 3) {
  dayDiff = 10 - now.getDay();
} else {
  dayDiff = 3 - now.getDay();
}
targetDate.setDate(targetDate.getDate() + dayDiff);
targetDate.setHours(19);
targetDate.setMinutes(0, 0, 0);
console.log(targetDate);
let targetTime = targetDate.getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = targetTime - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   // Display the result in an element with id="demo"
  //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //   + minutes + "m " + seconds + "s ";

  //   // If the count down is finished, write some text
  //   if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById("demo").innerHTML = "EXPIRED";
  //   }
  console.log(
    "다음 세션까지 " +
      days +
      "일" +
      hours +
      "시간" +
      minutes +
      "분" +
      seconds +
      "초"
  );
}, 1000);
