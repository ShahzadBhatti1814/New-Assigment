document.getElementById('weather-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const location = document.getElementById('location').value;
    const apiKey = '9976311aac9ad796277985bc12c536fc';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        const weatherDataMap = new Map([
            ['temperature', `${data.main.temp}°C`],
            ['humidity', `${data.main.humidity}%`],
            ['description', data.weather[0].description]
        ]);

        const updateUI = (key, value) => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = `${capitalizeFirstLetter(key)}: ${value}`;
            }
        };

        weatherDataMap.forEach((value, key) => {
            updateUI(key, value);
        });

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const dateElement = document.getElementById('date');
const options = {  day: 'numeric' };
const today = new Date().toLocaleDateString(undefined, options);
dateElement.textContent = today;