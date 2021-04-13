"use strict";

var sPoint1 = document.getElementById('demoAnker1');

var fnShowPosition = function fnShowPosition(paramPosition) {
  var flLat = paramPosition.coords.latitude;
  var flLong = paramPosition.coords.longitude;
  sPoint1.innerHTML = "Lattitude: " + flLat + "<br />Longitude: " + flLong;
  console.log(paramPosition.coords.latitude);
};

var fnGetLocation = function fnGetLocation() {
  if (navigator.geolocation) {
    console.log("fnGetLocation() works");
    navigator.geolocation.getCurrentPosition(fnShowPosition);
  } else {
    sPoint1.innerHTML = "Geolocation isn't avaiable at your broser/settings";
  }
};

fnGetLocation();