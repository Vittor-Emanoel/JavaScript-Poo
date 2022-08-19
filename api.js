const cord = document.querySelector(".cord");

const btn = document.querySelector(".form-btn");
btn.addEventListener("click", pegaLocalização());

function pegaLocalização() {
  navigator.geolocation.getCurrentPosition((success) => {
    const { latitude, longitude } = success.coords;

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${api}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });
}

const api = "9a2d0dcb377a2b9768789a742be3acc8";
