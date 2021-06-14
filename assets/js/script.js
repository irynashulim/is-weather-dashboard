
    var myFunction = function () {
        var searchCity = document.querySelector("#searchCity");
        var searchCity = searchCity.value;

fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + ",US&exclude=daily&APPID=14cdabdb32efcde0130d8641f715b866")
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response);

  
    var cityName = response.sys.name;
    var icon = response.weather[0].icon;
    var temp = response.main.temp;
    var humidity = response.main.humidity;
    var wind = response.wind.speed;

    var weatherInfo = document.querySelector("#weather-info");
    weatherInfo.innerHTML = " ";
    weatherInfo.innerHTML = "<h2>" + searchCity + "<img src=>" + icon + "</img>"  + "</h2>";


})
    };




