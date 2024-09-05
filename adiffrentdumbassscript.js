var url = "https://sites.google.com/view/un35/home"; 
var fullscreenBtn = document.getElementById("fullscreen-btn");
fullscreenBtn.addEventListener("click", function() { var elem = document.documentElement; 
if (elem.requestFullscreen) { elem.requestFullscreen(); } else if (elem.webkitRequestFullscreen) { /* Safari */ elem.webkitRequestFullscreen(); } else if (elem.msRequestFullscreen) { /* IE11 */ elem.msRequestFullscreen(); } window.open(url, "_blank"); });