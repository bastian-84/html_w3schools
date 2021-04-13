"use strict";

// ====================================================== //
// ================== HTML geo location ================= //
// ====================================================== //
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
/* fnGetLocation(); */
// ##################################################################### //
// ###################### HTML Drag and drop image ##################### //
// ##################################################################### //


var fnAllowDrop = function fnAllowDrop(paramEv) {
  paramEv.preventDefault();
};

var fnDrag = function fnDrag(paramEv) {
  paramEv.dataTransfer.setData("placeHolderString", paramEv.target.id);
};

var fnDrop = function fnDrop(paramEv) {
  paramEv.preventDefault();
  var data = paramEv.dataTransfer.getData("placeHolderString");
  paramEv.target.appendChild(document.getElementById(data));
};