const time = document.querySelector(".clockbox #time");
const date = document.querySelector(".clockbox #date");


function getClock(){
    const date = new Date();
    
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const day = String(date.getDate());

    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    
    date.innerText = `${year}-${month}-${day}`;
    time.innerText = `${hour}:${minute}:${second}`;
}

getClock();

setInterval(getClock,1000);