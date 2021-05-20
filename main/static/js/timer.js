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
let x = setInterval(function () {
  // Get todays date and time
  let now = new Date().getTime();

  // Find the distance between now an the count down date
  let distance = targetTime - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   // Display the result in an element with id="demo"
  //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //   + minutes + "m " + seconds + "s ";

  //   // If the count down is finished, write some text
  //   if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById("demo").innerHTML = "EXPIRED";
  //   }
  let resultMessage = "Next Session: ";
  if (days != 0) {
    resultMessage += (days + "일 ");
  }
  if (!(days == 0) || (hours != 0)) {
    resultMessage += (hours + "시간 ");
  }
  if (!(days == 0 && hours == 0) || (minutes != 0)) {
    resultMessage += (minutes + "분 ");
  }
  resultMessage += (seconds + "초");
  document.querySelector('.session-timer').innerText = resultMessage;
}, 1000);
