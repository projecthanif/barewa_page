// Set the date we're counting down to
const countDownDate = new Date("May 31, 2023 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  const countdownElement = document.getElementById("countdown");
  // countdownElement.innerHTML = days +" Days : " + hours +" Hours : " 
  // + minutes +" Minutes : "  + seconds + " Seconds";

  // If the countdown is finished, clear the interval and display a message
  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "EXPIRED";
  }
}, 1000);
