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

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            updateWeatherDisplay(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to retrieve weather data. Please try again.');
        });
}

function getInfo() {
    const newName = document.getElementById("cityInput").value.trim();
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = `--${newName}--`;

    if (newName) {
        fetchWeatherData(newName);
    }
}

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             updateWeatherDisplay(data);
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             alert('Failed to retrieve weather data. Please try again.');
//         });
// }

// function getInfo() {
//     const newName = document.getElementById("cityInput").value.trim();
//     const cityName = document.getElementById("cityName");
//     cityName.innerHTML = `--${newName}--`;

//     if (newName) {
//         fetchWeatherData(newName);
//     }
// }

// const d = new Date();
// const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function checkDay(day) {
//     return (day + d.getDay()) % 7;
// }

// for (let i = 0; i < 5; i++) {
//     document.getElementById(`day${i + 1}`).innerHTML = weekDay[checkDay(i)];
// }
