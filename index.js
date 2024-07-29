document.getElementById('weather-form').addEventListener('submit', function(e) {

    const location = document.getElementById('location').value;
    const apiKey = ' https://openweathermap.org/faq#error401';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
    .then(response => response.json())
        const weatherDataMap = new Map([
            ['temperature', `${data.main.temp} °C`],
            ['description', data.weather[0].description],
            ['humidity', `${data.main.humidity}%`]
        ]);
        const updateUI = (key, value) => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = `${capitalizeFirstLetter(key)}: ${value}` }}
        weatherDataMap.forEach((value, key) => {
            updateUI(key, value);
        });
    });