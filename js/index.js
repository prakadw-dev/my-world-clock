function updateTime() {
  // London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment.tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment.tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("H:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
