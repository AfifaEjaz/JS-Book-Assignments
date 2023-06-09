// task1
var picture1 = document.getElementById("image1")
var picture2 = document.getElementById("image2")
var picture3 = document.getElementById("image3")
var picture4 = document.getElementById("image4")



function openOnImageClick1() {
  var heading = document.getElementById("clickmeh1")
  var span = document.getElementsByClassName("close")[0];
  span.style.display = "block"
  picture1.style.display = "block"
  console.log("yes")
}

function openOnImageClick2() {
  var heading = document.getElementById("clickmeh2")
  var span = document.getElementsByClassName("close")[0];
  span.style.display = "block"
  picture2.style.display = "block"
  console.log("yes")
}


function closee() {
  var span = document.getElementsByClassName("close")[0];
  span.style.display = "none"
  picture1.style.display = "none";
  picture2.style.display = "none";
  picture3.style.display = "none";
  picture4.style.display = "none";
}


function openOnImageClick3() {
  var heading = document.getElementById("clickmeh3")
  var span = document.getElementsByClassName("close")[0];
  span.style.display = "block"
  picture3.style.display = "block"
  console.log("yes")
}


function openOnImageClick4() {
  var heading = document.getElementById("clickmeh4")
  var span = document.getElementsByClassName("close")[0];
  span.style.display = "block"
  picture4.style.display = "block"
  console.log("yes")
}

// task2
var arr = ["27px", "37px", "47px", "57px", "67px", "77px", "87px"]
var para = document.getElementById("paragraph")
var i = 0

function zoomIN() {
  para.style.fontSize = arr[i++]
  console.log("working")
}

function zoomOUT() {
  para.style.fontSize = arr[i--]
  console.log("working")
}