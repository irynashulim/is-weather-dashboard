var searchCity = document.querySelector("#searchCity"); 
var weatherInfo = document.querySelector("#weather-info");
var cityListEl = document.querySelector(".city-list");
// weatherFetch function for top right block
    var weatherFetch = function (searchCity) {
    var citySearches = [] {
        var citySearches = [];
        if (searchCity,value) {
            citySearches.push(searchCity.value);
        }
        var storedCity = localStorage.getItem("citylist")
        if (storedCity) {
            citySearches = citySearches.concat(JSON.parse(storedCity));
            citySearches = citySearches.slice(0, 10);
        }
        localStorage.setItem('citylist', JSON.stringify(citySearches))
        $(cityListEl).empty();
        for (var i = 0; i < citySearches.length; i++) {
    }
        var cityName = response.name;
    var icon = response.weather[0].icon;
    var iconImg = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
    var temp = response.main.temp;
    var humidity = response.main.humidity;
    var wind = response.wind.speed;
   var uvIndex = response;
    var searchCity = searchCity.value;
fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial&exclude=current&APPID=14cdabdb32efcde0130d8641f715b866")
.then(function(response) {
    return response.json();
})
.then(function(response) {
    weatherInfo.innerHTML = " ";
    weatherInfo.innerHTML = "<h2>" + cityName + " "+ "<img src=" + iconImg + ">" + "</h2>" + 
    "<p>" + "Temp: " + temp + " °F" + "</p>" + 
    "<p>" + "Wind: " + wind + " MPH" + "</p>" + 
    "<p>" + "Humidity: " + humidity + " %" + "</p>" + 
    "<p>" + "UV Index: " + uvIndex + "</p>";
});
};

// fiveDayFetch function for bottom right block
var fiveDayFetch = function(searchCity) {
fetch ("https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&units=imperial&exclude=current&appid=14cdabdb32efcde0130d8641f715b866")
.then(function(fiveDayResponse) {
    return fiveDayResponse.json();
})
.then(function(fiveDayResponse) {
// day One
    var dayOne = document.querySelector("#day-one");
    var dateOne = fiveDayResponse.list[4].dt_txt;
    var iconOne = fiveDayResponse.list[4].weather[0].icon;
    var iconImgOne = "https://openweathermap.org/img/wn/" + iconOne + "@2x.png"
    var tempOne = fiveDayResponse.list[4].main.temp;
    var humidityOne = fiveDayResponse.list[4].main.humidity;
    var windOne = fiveDayResponse.list[4].wind.speed;

    dayOne.innerHTML = " ";
    dayOne.innerHTML = "<h3>" + dateOne+ " "+ "<img src=" + iconImgOne + ">" + "</h3>" + 
    "<p>" + "Temp: " + tempOne + " °F" + "</p>" + 
    "<p>" + "Wind: " + windOne + " MPH" + "</p>" + 
    "<p>" + "Humidity: " + humidityOne + " %" + "</p>"
// day Two
    var dayTwo = document.querySelector("#day-two");
    var dateTwo = fiveDayResponse.list[12].dt_txt;
    var iconTwo = fiveDayResponse.list[12].weather[0].icon;
    var iconImgTwo = "https://openweathermap.org/img/wn/" + iconTwo + "@2x.png"
    var tempTwo = fiveDayResponse.list[12].main.temp;
    var humidityTwo = fiveDayResponse.list[12].main.humidity;
    var windTwo = fiveDayResponse.list[12].wind.speed;

    dayTwo.innerHTML = " ";
    dayTwo.innerHTML = "<h3>" + dateTwo+ " "+ "<img src=" + iconImgTwo + ">" + "</h3>" + 
    "<p>" + "Temp: " + tempTwo + " °F" + "</p>" + 
    "<p>" + "Wind: " + windTwo + " MPH" + "</p>" + 
    "<p>" + "Humidity: " + humidityTwo + " %" + "</p>"
// day Three
    var dayThree = document.querySelector("#day-three");
    var dateThree = fiveDayResponse.list[20].dt_txt;
    var iconThree = fiveDayResponse.list[20].weather[0].icon;
    var iconImgThree = "https://openweathermap.org/img/wn/" + iconThree + "@2x.png"
    var tempThree = fiveDayResponse.list[20].main.temp;
    var humidityThree = fiveDayResponse.list[20].main.humidity;
    var windThree = fiveDayResponse.list[20].wind.speed;

    dayThree.innerHTML = " ";
    dayThree.innerHTML = "<h3>" + dateThree+ " "+ "<img src=" + iconImgThree + ">" + "</h3>" + 
    "<p>" + "Temp: " + tempThree + " °F" + "</p>" + 
    "<p>" + "Wind: " + windThree + " MPH" + "</p>" + 
    "<p>" + "Humidity: " + humidityThree + " %" + "</p>"
// day Four
    var dayFour = document.querySelector("#day-four");
    var dateFour = fiveDayResponse.list[28].dt_txt;
    var iconFour = fiveDayResponse.list[28].weather[0].icon;
    var iconImgFour = "https://openweathermap.org/img/wn/" + iconFour + "@2x.png"
    var tempFour = fiveDayResponse.list[28].main.temp;
    var humidityFour = fiveDayResponse.list[28].main.humidity;
    var windFour = fiveDayResponse.list[28].wind.speed;

    dayFour.innerHTML = " ";
    dayFour.innerHTML = "<h3>" + dateFour+ " "+ "<img src=" + iconImgFour + ">" + "</h3>" + 
    "<p>" + "Temp: " + tempFour + " °F" + "</p>" + 
    "<p>" + "Wind: " + windFour + " MPH" + "</p>" + 
    "<p>" + "Humidity: " + humidityFour + " %" + "</p>"
// day Five
    var dayFive = document.querySelector("#day-five");
    var dateFive = fiveDayResponse.list[36].dt_txt;
    var iconFive = fiveDayResponse.list[36].weather[0].icon;
    var iconImgFive = "https://openweathermap.org/img/wn/" + iconFive + "@2x.png"
    var tempFive = fiveDayResponse.list[36].main.temp;
    var humidityFive = fiveDayResponse.list[36].main.humidity;
    var windFive = fiveDayResponse.list[36].wind.speed;

    dayFive.innerHTML = " ";
    dayFive.innerHTML = "<h3>" + dateFive+ " "+ "<img src=" + iconImgFive + ">" + "</h3>" + 
    "<p>" + "Temp: " + tempFive + " °F" + "</p>" + 
    "<p>" + "Wind: " + windFive + " MPH" + "</p>" + 
    "<p>" + "Humidity: " + humidityFive + " %" + "</p>"
});
};


//setting local storage
var cityList = JSON.parse(localStorage.getItem("city-list")) || [];
function renderCity(cityList) {
    $("#saved-search").empty();
    for (var i = 0; i < cityList.length; i++) {
        var cityEl = $("<button>");
        cityEl.text(cityList[i]);
        cityEl.addClass("saved-city-btn");
        $("#saved-search").append(cityEl);
    }
}
$("#add-city").on("click", function(event) {
    event.preventDefault();
    cityList.push(searchCity)
    console.log(cityList);
    for (i = 0; i<cityList.length; i++) {
        var inputCity = cityList[i];
    };
    renderCity(cityList);
    var savedCity = JSON.stringify(cityList);
    localStorage.setItem("city-list", savedCity);
    $("#searchCity").val("");
});






