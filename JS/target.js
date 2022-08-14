targets = [
    {
        Location: 'Paris',
        Mission: '목표물 탈취',
        Etc: 'SIP-22, Parachute',
        lat: 48.8566,
        lon: 2.3522,
    },

    {
        Location: "Seoul",
        Mission: '대통령 호위' ,
        Etc: 'BH1-22 2EA',
        lat: 37.5665,
        lon: 126.9780,
    },
    {
        Location: "Cape Town",
        Mission: '폭격',
        Etc: 'B-52H 23EA',
        lat: -33.9249,
        lon: 18.4241,
    },
    {
        Location: "North Pole",
        Mission: '엄호',
        Etc: 'Classic-52G 21EA',
        lat: 0,
        lon: -135,
    },
    {
        Location: "Columbia",
        Mission: 'Nicolas와 조우',
        Etc: 'Glock-61',
        lat: 4.5709,
        lon: -74.2973,
    },
]


const roleTargetButton = document.querySelector("#targetbutton")
const loc = document.querySelector("#location");
const mission = document.querySelector("#mission");
const etc = document.querySelector("#etc");
const distance = document.querySelector("#distance");

function roleTarget(){
    const chosenTarget = targets[Math.floor(Math.random() * targets.length)];
    loc.innerText = chosenTarget.Location;
    mission.innerText = chosenTarget.Mission;
    etc.innerText = chosenTarget.Etc;
    distance.innerText = `${chosenTarget.Distance}Km`;
}

function distanceCalculator(){ 
    const R = 6371; // Radius of the earth in km
    const rad = Math.PI/180
    for(let i = 0; i < targets.length;i++){
        let lat2 = targets[i].lat
        let lon2 = targets[i].lon
        const dLat = (lat2-currentLat)*rad;
        const dLon = (lon2-currentLon)*rad; 
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(currentLat*rad) * Math.cos(lat2*rad) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const d = R * c; // Distance in km
        targets[i].Distance = Math.floor(d);
    }
}


roleTargetButton.addEventListener("click",roleTarget);
