const API_KEY = "78f194fb029e01ad0b4a96a01a2d0d79";
const ngWeather = ['thunderstorm','shower rain','rain','snow','mist'];

let currentLat;
let currentLon;

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    currentLat = lat;
    currentLon = lng;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector(".weatherbox");
        const temp = Math.round(data.main.temp);
        weather.innerText = `${data.name} ${data.weather[0].main}, ${temp}℃ `
        const takeOff = document.createElement("h3");
        console.log(data.visibility)
        if(data.visibility < 550 || ngWeather.includes(data.weather[0].main)){
            takeOff.innerText = 'NG, Take Off Disallowed';
            takeOff.style.color="red";
        }else{
            takeOff.innerText = 'Clear to Take Off';
    takeOff.style.color="mediumblue";
    }
        weather.appendChild(takeOff);
    });
    distanceCalculator();
}


function onGeoNG(){
    alert("Can't find where you are...");
    
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoNG);