function ShowwetherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey ='8d5f78a12ef2e547dd71aa3451ad6573';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIkey}`
    fetch(apiUrl)
.then(Response=> Response.json())
.then(data =>{
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>Weather is ${data.name}</h2>
    <p>Temperature: ${data.main.temp}&#8451</p>
    <p>Weather: ${data.weather[0].description}</p>`
}) 
.catch(error => {
          console.error('Erreur lors de la récupération des données météo :', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Échec de la récupération des données météo. Veuillez réessayer.</p>`;
        });
}
document.getElementById('weatherForm').addEventListener('submit',ShowwetherDetails );
