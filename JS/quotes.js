quotes = [
    {
        line: "인생은 감사를 통해 부해진다",
        author: "Dietrich Bonhoeffer"
    },
    {
        line: "진리를 알지니 진리가 너희를 자유롭게 하리라",
        author: "요 8:32"
    },
    {
        line: "내게 능력주시는 자 안에서 내가 모든 것을 할 수 있느니라",
        author: "빌 4:13"
    },
    {
        line: "너는 하나님과 화목하고 평안하라 그리하면 복이 네게 임하리라",
        author: "욥 22:21"
    },
    {
        line: "악을 버리고 선을 행하며 화평을 찾아 따를지어다",
        author: "시 34:14"
    },
    {
        line: "이와 같이 행함이 없는 믿음은 그 자체가 죽은 것이라",
        author: "약 2:17"
    },
    {
        line: "욕심이 잉태하면 죄를 낳고 죄가 장성하면 사망을 낳느니라",
        author: "약 1:15"
    },
    {
        line: "하나님의 나라는 말에 있지 아니하고 오직 능력에 있음이라",
        author: "고전 4:20"
    },
    {
        line: "누구든지 주의 이름을 부르는 자는 구원을 받으리라",
        author: "롬 10:13"
    },
    {
        line: "인내는 연단을, 연단은 소망을 이루는 줄 앎이로다",
        author: "롬 5:4"
    }
];

const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

const quote = document.querySelector(".quotebox #quote");
const author = document.querySelector(".quotebox #author");

quote.innerText = chosenQuote.line;
author.innerText = chosenQuote.author;
