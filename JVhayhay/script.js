function converterTemperatura(){
    let temperaturaCelsius = parseFloat(document.getElementByld("temperaturaC").value);

    let temperaturaFahrenheit=(temperaturaCelsius * 9/5)+32;

    alert('A temperatura em Fahrenheit é: ${temperaturaFahrenheit.toFixed(2)}');
}