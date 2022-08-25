var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "300",
    width: "300",
    videoId: "pVcMsjyKlaM",
    events: {},
  });
}

const PLAYLIST_ID = [
  {
    name: "Miles Teller - Great Balls of Fire",
    videoId: "pVcMsjyKlaM",
  },
  {
    name: 'OneRepublic - I Aint Worried',
    videoID: '42oK5vjD2UU'
  },
 
];

const playList = document.querySelector("#playList");

function handlePlayBtnClick() {
  player.playVideo();
  playList.innerText = `List ${currentPlayerList + 1} - ${PLAYLIST_ID[currentPlayerList].name}`;
}

function handlePauseBtnClick() {
  player.pauseVideo();
}

let currentPlayerList = 0;
function handleNextBtnClick() {
  if (currentPlayerList >= PLAYLIST_ID.length) {
    currentPlayerList = 0;
  } else {
    currentPlayerList += 1;
  }
  player.loadVideoById(PLAYLIST_ID[currentPlayerList].videoId);
  playList.innerText = `List ${currentPlayerList + 1} - ${PLAYLIST_ID[currentPlayerList].name}`;
}

const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const nextButton = document.querySelector("#next");

playButton.addEventListener("click", handlePlayBtnClick);
pauseButton.addEventListener("click", handlePauseBtnClick);
nextButton.addEventListener("click", handleNextBtnClick);
