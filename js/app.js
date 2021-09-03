const API_KEY = `fcf8e43ab80a5b69a52036a5c24aed62`;

const clearOld = (id) => {
    document.getElementById(id).innerText = "";
};

document.getElementById("search-btn").addEventListener("click", function () {
    const cityInput = document.getElementById("city-search");
    const searchCity = cityInput.value;
    cityInput.value = "";

    clearOld("city-name");
    clearOld("temp-result");
    clearOld("envoirment");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayTempareture(data));
});

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};

const displayTempareture = (cityTemp) => {
    setInnerText("city-name", `${cityTemp.name || "Not found"}`);

    setInnerText("temp-result", `${cityTemp.main.temp || "0"}`);
    setInnerText("envoirment", `${cityTemp.weather[0].main || "Not Defiend"}`);
    // set Weather icon
    const imgUrl = `http://openweathermap.org/img/wn/${cityTemp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute("src", imgUrl);
};

 
