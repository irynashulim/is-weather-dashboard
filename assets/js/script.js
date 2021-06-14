
    var myFunction = function () {
        var searchCity = document.querySelector("#searchCity");
        var searchCity = searchCity.value;

fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + ",US&units=imperial&exclude=current&APPID=14cdabdb32efcde0130d8641f715b866")
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response);

  
    var cityName = response.name;
    var icon = response.weather[0].icon;
    var iconImg = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
    var temp = response.main.temp;
    var humidity = response.main.humidity;
    var wind = response.wind.speed;
    var uvIndex = response;

    var weatherInfo = document.querySelector("#weather-info");
    weatherInfo.innerHTML = " ";
    weatherInfo.innerHTML = "<h2>" + cityName + " "+ "<img src=" + iconImg + ">" + "</h2>" + 
    "<p>" + "Temp: " + temp + " F" + "</p>" + 
    "<p>" + "Wind: " + wind + " MPH" + "</p>" + 
    "<p>" + "Humidity: " + humidity + " %" + "</p>" + 
    "<p>" + "UV Index: " + uvIndex + "</p>";

    
    searchCity.value = " ";


})
searchCity.value = " ";
    };




