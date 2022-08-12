const photos = ["0.jpg", "1.jpg", "2.jpg"];

const chosenPhoto = photos[Math.floor(Math.random() * photos.length)];

const picture = document.querySelector(".picturebox");

body.style.backgroundImage = `url("photo/${chosenPhoto}")`;
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center center";
body.style.backgroundRepeat = "no-repeat";