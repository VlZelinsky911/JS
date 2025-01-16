document.getElementById("searchButton").addEventListener("click", () => {
	const city = document.getElementById("cityInput").value.trim();
	if(city){
	window.location.href = `main.html?city=${encodeURIComponent(city)}`;
	}else{
		alert("Будь ласка, введіть назву міста!")
	}})
	
	document.addEventListener("DOMContentLoaded", ()=> {
	  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
		const apiKey = "9650f972cc9668381c9ca4584729ba96";
		const cities = ["Kyiv", "Odesa", "Lviv", "Dnipro"];
		
		const container = document.getElementById("weather-cards");

		const createCard = (city, data) => {
			const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("uk-UA", {
				hour: "2-digit",
				minute: "2-digit",
			});
			const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("uk-UA", {
				hour: "2-digit",
				minute: "2-digit",
			});
		
			return `
				<div class="carts">
					<h2>${city}</h2>
					<p>Температура: ${Math.ceil((data.main.temp))}°C</p>
					<p>Стан: ${data.weather[0].description}</p>
					<p>Вологість: ${data.main.humidity}%</p>
					<p>Вітер: ${data.wind.speed} м/с</p>
					<p>Тиск: ${data.main.pressure} гПа</p>
					<p>Схід: ${sunrise}</p>
					<p>Захід: ${sunset}</p>
				</div>
			`;
		};
		
		const fetchWeatherData = async (city) => {
			try{
				const response = await fetch(
					`${apiUrl}?q=${city}&units=metric&lang=uk&appid=${apiKey}`
				);
				const data = await response.json();
				if(response.ok){
				container.innerHTML += createCard(city, data);
				}else{
					console.error("Помилка завантаження даних:", data.message);
				}
			} catch(error){
				console.error("Помилка:", error);
			}
		};

		cities.forEach((city) => fetchWeatherData(city));
	});