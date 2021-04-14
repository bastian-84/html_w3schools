// ====================================================== //
// ================== HTML geo location ================= //
// ====================================================== //

const sPoint1 = document.getElementById('demoAnker1');

let fnShowPosition = (paramPosition) => {
    let flLat = paramPosition.coords.latitude;
    let flLong = paramPosition.coords.longitude;

    sPoint1.innerHTML = `Lattitude: ` + flLat + `<br />Longitude: ` + flLong;
    console.log(paramPosition.coords.latitude);
}

let fnGetLocation = () => {
    if(navigator.geolocation){      // Wenn geolocation is TRUE
        console.log(`fnGetLocation() works`);
        navigator.geolocation.getCurrentPosition(fnShowPosition);
    }else{
        sPoint1.innerHTML = `Geolocation isn't avaiable at your broser/settings`;
    }
}
/* fnGetLocation(); */

// ##################################################################### //
// ###################### HTML Drag and drop image ##################### //
// ##################################################################### //
let fnAllowDrop = (paramEv) => {
    paramEv.preventDefault();
}
let fnDrag = (paramEv) => {
    paramEv.dataTransfer.setData("placeHolderString", paramEv.target.id);
}
let fnDrop = (paramEv) => {
    paramEv.preventDefault();
    let data = paramEv.dataTransfer.getData("placeHolderString");
    paramEv.target.appendChild(document.getElementById(data));
}

// ##################################################################### //
// ############################ Web Storage ############################ //
// ##################################################################### //
if(typeof(Storage) !== 'undefined'){    // Wenn supported...
    // Store
    localStorage.setItem('lastname', 'Redfield');
    // Retrieve
    document.getElementById('sResult1').innerHTML = localStorage.getItem('lastname');
}else{
    document.getElementById('sResult1').innerHTML = 'Your browser does not support Web Storage.';
}

// ##################################################################### //
// ##################### Web Storage mit clickcount #################### //
// ##################################################################### //
const sResult2 = document.getElementById('sResult2');

let fnClickCounter = () => {
    if(typeof(Storage) !== 'undefined'){
        if(localStorage.clickcount){    // wenn clickcount ist vorhanden
            localStorage.clickcount = Number(localStorage.clickcount) +1;
        }else{
            localStorage.clickcount = 1;
        }
        sResult2.innerHTML = 'Clicked [' + localStorage.clickcount + '] times.';
    }else{
        sResult2.innerHTML = 'Your browser does not support Web Storage.';
    }
}

const sButton1 = document.getElementById('button1');
sButton1.addEventListener('click', fnClickCounter);
