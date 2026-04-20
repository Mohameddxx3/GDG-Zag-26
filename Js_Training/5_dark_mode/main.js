let icon = document.getElementById("icon");
icon.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))
        icon.src = "icon/sun.png";
    else
        icon.src = "icon/moon.png";

    // let x = document.styleSheets[0].rules[1].style;
    // x.setProperty("--main-color","#000106");
    // x.setProperty("--second-color","#fff");
}