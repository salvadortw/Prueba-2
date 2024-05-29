// Declaramos la API KEY
const API_KEY = 'fd55c2075add444e97d164717242905';
// Declaramos la URL
const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Chonchi&days=10&lang=es`;

// Creamos un nuevo objeto XMLHttpRequest
const xhr = new XMLHttpRequest();

// Función para manejar la respuesta de la solicitud
function onRequestHandler() {
    // Si la solicitud se completa con éxito
    if (this.readyState === 4 && this.status === 200) {
        // Parseamos la respuesta JSON
        const data = JSON.parse(this.response);
        // Llamamos a la función para mostrar el clima
        displayWeather(data);
    }
}

// Agregamos un event listener para manejar la carga de la solicitud
xhr.addEventListener('load', onRequestHandler);
// Abrimos la solicitud GET hacia la URL de la API
xhr.open('GET', `${url}`);
// Enviamos la solicitud
xhr.send();

// Función para mostrar el clima en el HTML
function displayWeather(data) {
    // Obtenemos el contenedor del clima en el HTML
    const weatherContainer = document.getElementById('weather-forecast');
    // Limpiamos el contenido previo
    weatherContainer.innerHTML = '';

    // Iteramos sobre los datos de pronóstico para cada día
    data.forecast.forecastday.forEach(day => {
        // Obtenemos la fecha en formato local
        const date = new Date(day.date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
        // Obtenemos la temperatura máxima y mínima
        const maxTemp = day.day.maxtemp_c.toFixed(1);
        const minTemp = day.day.mintemp_c.toFixed(1);
        // Obtenemos la condición meteorológica y el icono
        const condition = day.day.condition.text;
        const icon = day.day.condition.icon;

        // Creamos un nuevo elemento para mostrar el pronóstico del día
        const forecastElement = document.createElement('div');
        forecastElement.className = 'forecast-day';
        // Agregamos contenido HTML al elemento
        forecastElement.innerHTML = `
            <h3>${date}</h3>
            <img src="https:${icon}" alt="${condition}">
            <p>Condición: ${condition}</p>
            <p>Máx: ${maxTemp} °C</p>
            <p>Mín: ${minTemp} °C</p>
        `;

        // Agregamos el elemento al contenedor de clima en el HTML
        weatherContainer.appendChild(forecastElement);
    });
}
