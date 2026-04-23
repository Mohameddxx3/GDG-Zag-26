// Assignment_3,4,5 ===============================
let div = document.createElement("div");
div.textContent = 10;
document.body.appendChild(div);

let counter = setInterval(function () {

    let num = Number(div.textContent);

    if (num > 0) {
        div.textContent = num - 1;
    } 
    
    if (num === 5) {
        window.open("https://elzero.org", "", "width=400,height=500");
    }

    if (num === 0) {
        clearInterval(counter); 
        window.location.href = "https://elzero.org";
    }

}, 1000);

