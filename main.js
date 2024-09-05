async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Por favor, digite o nome da cidade.');
        return;
    }

    try {
        const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt&units=metric'; 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt&units=metric`);
        
        if (!response.ok) {
            throw new Error('Cidade não encontrada.');
        }
        
        const data = await response.json();
        
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const cityName = data.name;

        document.getElementById('weather-result').innerHTML = `
            <h2>Previsão do Tempo para ${cityName}</h2>
            <p>Descrição: ${weatherDescription}</p>
            <p>Temperatura: ${temperature}°C</p>
        `;
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `
            <p>Erro: ${error.message}</p>
        `;
    }
}