const cord = document.querySelector(".cord");

const btn = document.querySelector(".form-btn");
btn.addEventListener("click", pegaLocalização());

const pegaLocalização = () => {
  navigator.geolocation.getCurrentPosition((success) => {
    const { latitude, longitude } = success.coords;

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${api}&lang=pt_br`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.current.weather);
        cord.textContent = data.current.weather.icon;

      });
  });
}

const api = "9a2d0dcb377a2b9768789a742be3acc8";


  const [weatherForecast, setWeatherForecast] = useState(null);



  const handleSearch = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=216f85b50529409c975122741221908&q=${city}&lang=pt`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setWeatherForecast(data);
      });
  };
