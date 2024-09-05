// totally didnt copy this shit from this stack overflow url 
// https://stackoverflow.com/questions/77512444/how-can-i-make-a-popup-about-blank-window-with-an-embedded-page-in-it
function cloak() {
    var url = prompt("Please enter the URL.")
    var fullscreenBtn = document.getElementById("fullscreen-btn");
    fullscreenBtn.addEventListener("click", function() { var elem = document.documentElement; 
    if (elem.requestFullscreen) { elem.requestFullscreen(); } else if (elem.webkitRequestFullscreen) { /* Safari */ elem.webkitRequestFullscreen(); } else if (elem.msRequestFullscreen) { /* IE11 */ elem.msRequestFullscreen(); } window.open(url, "_blank"); });
}