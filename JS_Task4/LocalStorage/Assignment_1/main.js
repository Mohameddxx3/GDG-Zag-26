let font = document.getElementById("font");
let color = document.getElementById("color");
let size = document.getElementById("size");

if (localStorage.getItem("font")) {
    font.value = localStorage.getItem("font");
}
if (localStorage.getItem("color")) {
    color.value = localStorage.getItem("color");
}
if (localStorage.getItem("size")) {
    size.value = localStorage.getItem("size");
}

function updateStyle() {
    document.body.style.fontFamily = font.value;
    document.body.style.color = color.value;
    document.body.style.fontSize = size.value;

    window.localStorage.setItem("font", font.value );
    window.localStorage.setItem("color", color.value );
    window.localStorage.setItem("size", size.value );
}
updateStyle();
font.onchange = updateStyle;
color.onchange = updateStyle;
size.onchange = updateStyle;
