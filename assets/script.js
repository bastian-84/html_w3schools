const sPoint1 = document.getElementById('demoAnker1');

let fnShowPosition = (paramPosition) => {
    let flLat = paramPosition.coords.latitude;
    let flLong = paramPosition.coords.longitude;
    
    sPoint1.innerHTML = `Lattitude: ` + flLat + `<br />Longitude: ` + flLong;
    console.log(paramPosition.coords.latitude);
}

let fnGetLocation = () => {
    if(navigator.geolocation){
        console.log(`fnGetLocation() works`);
        navigator.geolocation.getCurrentPosition(fnShowPosition);
    }else{
        sPoint1.innerHTML = `Geolocation isn't avaiable at your broser/settings`;
    }
}
fnGetLocation();

