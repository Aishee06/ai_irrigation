// script.js
function predictIrrigationRequirement() {
    var temperature = document.getElementById('temperature').value;
    var humidity = document.getElementById('humidity').value;
    var precipitation = document.getElementById('precipitation').value;
    var soilMoisture = document.getElementById('soil-moisture').value;

    // Send weather data to server for prediction
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            temperature: temperature,
            humidity: humidity,
            precipitation: precipitation,
            soil_moisture: soilMoisture
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('prediction-result').innerText = "Predicted Irrigation Requirement: " + data.prediction.toFixed(2) + " mm";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
