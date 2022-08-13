const photos = ["0.jpg", "1.jpg", "2.jpg"];
const chosenPhoto = photos[Math.floor(Math.random() * photos.length)];
const pictureBox = document.querySelector(".picturebox");
const picture = document.createElement("img")
picture.src = `photo/${chosenPhoto}`;
pictureBox.appendChild(picture);