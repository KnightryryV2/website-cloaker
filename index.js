// totally didnt copy this shit from this stack overflow url 
// https://stackoverflow.com/questions/77512444/how-can-i-make-a-popup-about-blank-window-with-an-embedded-page-in-it
function cloak() {
    url = prompt("Please enter the URL.")
    var win = window.open('about:blank') // <-- include the URL 
    url = prompt("Please enter the URL.")
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url
    win.document.body.appendChild(iframe)  
}