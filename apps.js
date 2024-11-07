const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const type = document.querySelector("#type");
const input = document.querySelector("#inp");
const images = document.querySelector("img");

const URL = "8fe1842d1e02737d0a9a39ad456a9eaf";

const data = async (sarch) => {
    let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sarch}&appid=${URL}&units=metric`);
    console.log("this data fetching", data);
    let jsondata = await getdata.json();
    console.log("this is value", jsondata.weather[0].main);

    if (jsondata.cod == 400) {
        alert("this is an invalid request");
        images.src = "defafult.jpeg";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
    } else if (jsondata.cod == 404) {
        alert("City not found");
        images.src = "defafult.jpeg";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
    }

    city.innerHTML = jsondata.name;
    temp.innerHTML = Math.floor(jsondata.main.temp) + "°C";
    type.innerHTML = jsondata.weather[0].main;

    if (type.innerHTML == "Clear") {
        images.src = "clear.webp";
    } else if (type.innerHTML == "Clouds") {
        images.src = "cloud.webp";
    } else if (type.innerHTML == "Rain") {
        images.src = "rain.webp";
    } else if (type.innerHTML == "Snow") {
        images.src = "snow.png";
    } else if (type.innerHTML == "Thunderstorm") {
        images.src = "thunderstorm.jpeg";
    } else if (type.innerHTML == "Drizzle") {
        images.src = "drizzle.jpg";
    } else if (type.innerHTML == "Mist") {
        images.src = "mist.jpeg";
    } else if (type.innerHTML == "Smoke") {
        images.src = "smoke.jpg";
    } else if (type.innerHTML == "Haze") {
        images.src = "haze.jpg";
    } else if (type.innerHTML == "Dust") {
        images.src = "dust.webp";
    } else if (type.innerHTML == "Fog") {
        images.src = "fog.webp";
    } else if (type.innerHTML == "Sand") {
        images.src = "sand.jpeg";
    } else if (type.innerHTML == "Ash") {
        images.src = "ash.jpg";
    } else if (type.innerHTML == "Squall") {
        images.src = "squall.jpg";
    } else if (type.innerHTML == "Tornado") {
        images.src = "tornado.avif";
    } else {
        images.src = "default.jpeg";
    }

    input.value = "";
}

const getWeatherData = () => {
    if (input.value === "") {
        alert("Please enter city");
        return;
    }

    let sarch = input.value;
    data(sarch);
}

