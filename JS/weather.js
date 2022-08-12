const API_KEY = "78f194fb029e01ad0b4a96a01a2d0d79";



function onGeoOk(position){
    console.log(position)
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector(".weatherbox");
        const temp = Math.round(data.main.temp);
        weather.innerText = `${data.name} ${data.weather[0].main}, ${temp}℃ `
        const takeOff = document.createElement("h3");
        if(data.visibility < 550 || data.weather[0].main === 'Clouds'){
            takeOff.innerText = 'NG, Take Off Disallowed';
        }else{takeOff.innerText = 'Clear to Take Off';}
        weather.appendChild(takeOff);
    });
}


function onGeoNG(){
    alert("Can't find where you are...");
    
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoNG);