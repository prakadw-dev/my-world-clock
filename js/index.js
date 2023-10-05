function updateTime() {
  // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment.tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment.tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  //Bali
  let baliElement = document.querySelector("#bali");
  if (baliElement) {
    let baliDateElement = baliElement.querySelector(".date");
    let baliTimeElement = baliElement.querySelector(".time");
    let baliTime = moment.tz("Asia/Makassar");

    baliDateElement.innerHTML = baliTime.format("MMMM Do, YYYY");
    baliTimeElement.innerHTML = baliTime.format("H:mm:ss [<small>]A[</small>]");
  }
  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment.tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("H:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>

  <a href="index.html" id="back-page">Back to homepage</a>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
