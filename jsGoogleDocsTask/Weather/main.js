const urlParams = new URLSearchParams(window.location.search);
const city = urlParams.get("city")
if(city){
document.getElementById("cityName").textContent = `Погода в місті ${city}`
getWeatherDate(city);
}else{
alert("Місто не знайдено!")
}

async function getWeatherDate(city) {
const apiKey = "9650f972cc9668381c9ca4584729ba96";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Місто не знайдено");
			}
			const data = await response.json();
			displayWeather(data);
		} catch (error) {
			alert(error.message);
	}
}

function displayWeatherForecast(temperature, humidity, pressure) {
  if (temperature === null || humidity === null || pressure === null) {
    return "Погодні дані неповні. Оновіть усі поля.";
  }

  let forecastMessage = "Прогноз погоди:\n";

  if (temperature > 25 && humidity < 50) {
    forecastMessage += "Сонячно та сухо. Ідеальний день для відпочинку на природі.☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️<br>";
  } else if (humidity > 70) {
    forecastMessage += "Можливо дощ. Візьміть парасольку.<br>🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️";
  } else if (pressure < 750) {
    forecastMessage += "Низький тиск, можливі опади або вітер.<br>💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧";
  } else {
    forecastMessage += "Хмарно з проясненнями. Нормальний день.<br>🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️";
  }
  return forecastMessage;
}

function displayWeather(data) {
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
	const pressure = data.main.pressure;
	const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("uk-UA");
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("uk-UA");

	const forecastDescription = displayWeatherForecast(temperature, humidity, pressure);

  document.getElementById("weatherInfo").innerHTML = `
		<p>${forecastDescription} </p>  
		<p>Температура: ${Math.ceil(temperature)}°C</p>
    <p>Стан: ${description}</p>
    <p>Вологість: ${humidity}%</p>
    <p>Тиск: ${pressure} гПа</p>
    <p>Швидкість вітру: ${windSpeed} м/с</p>
    <p>Схід сонця: ${sunrise}</p>
    <p>Захід сонця: ${sunset}</p>
  `;
}