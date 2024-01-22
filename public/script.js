document.getElementById('get-weather').addEventListener('click',function(){
    const cityName = document.getElementById('city-name').value;
    fetch(`/weather?cityName=${cityName}`)
    .then(response => response.json())
    .then(data => {
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        document.getElementById('weather-result').innerHTML = `天気: ${weather}, 気温: ${temp}度`;
    })
    .catch(error => {
        console.log('天気情報の取得に失敗しました', error);
    });
});