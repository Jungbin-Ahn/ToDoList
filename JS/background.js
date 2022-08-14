const bg = document.querySelector("img");
const thirdbox = document.querySelector(".thirdbox")

if(localStorage.getItem("username") === null){
    bg.style.filter = "brightness(20%)";
    thirdbox.style.filter = "brightness(20%)"
}else{
    bg.style.filter = "brightness(100%)";
    thirdbox.style.filter = "brightness(100%)"
}