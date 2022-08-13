const timePrint = document.querySelector("#time");
const datePrint = document.querySelector("#date");


function getClock(){
    const date = new Date();
    const bDay = new Date(2022,0,29);

    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const day = String(date.getDate());

    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    
    datePrint.innerText = `${year}-${month}-${day}`;
    timePrint.innerText = `${hour}:${minute}:${second}`;
}

getClock();

setInterval(getClock,1000);