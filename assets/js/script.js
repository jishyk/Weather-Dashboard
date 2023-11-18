function updateWeatherDisplay(data) {
    for (let i = 0; i < 5; i++) {
        document.getElementById(`day${i + 1}Min`).innerHTML = `Min: ${Number(data.list[i].main.temp_min).toFixed(1)}°`;
        document.getElementById(`day${i + 1}Temper`).innerHTML = `Actual Temperature: ${Number(data.list[i].main.temp).toFixed(1)}°`;
        document.getElementById(`day${i + 1}Max`).innerHTML = `Max: ${Number(data.list[i].main.temp_max).toFixed(1)}°`;
        document.getElementById(`day${i + 1}Hum`).innerHTML = `Humidity: ${Number(data.list[i].main.humidity).toFixed(1)}%`;
        document.getElementById(`day${i + 1}Win`).innerHTML = `Wind-Speed: ${Number(data.list[i].wind.speed).toFixed(1)} MPH`;
        document.getElementById(`img${i + 1}`).src = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
    }
}

function fetchWeatherData(cityName) {
    const apiKey = '280b7b1765f40f664461ec695705a874';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;
}

