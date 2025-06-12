async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '3124fd306273844f14cd50a4dc6c9581';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('weatherResult').innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>City not found</p>`;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data.</p>`;
  }
}