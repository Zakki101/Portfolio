// buat hover effect logo
const logo = document.getElementById("logo");
const text = document.getElementById("logoText");

let holdTimer;

/* Klik & tahan (mouse / touch) */
logo.addEventListener("mousedown", showText);
logo.addEventListener("mouseup", hideText);
logo.addEventListener("mouseleave", hideText);

/* Touch (Mobile) */
logo.addEventListener("touchstart", showText);
logo.addEventListener("touchend", hideText);
logo.addEventListener("touchcancel", hideText);
function showText() {
    text.style.opacity = "1";
    text.style.visibility = "visible";
}

function hideText() {
    text.style.opacity = "0";
    text.style.visibility = "hidden";
}