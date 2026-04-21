let btns = document.getElementsByClassName("btn");
let photo = document.getElementById("photo");

btns[0].onclick = function(){
    btns[0].className = "btn active" ;
    btns[1].className = "btn" ;
    btns[2].className = "btn" ;
    photo.src = "images/image1.png" ;
}
btns[1].onclick = function(){
    btns[0].className = "btn" ;
    btns[1].className = "btn active" ;
    btns[2].className = "btn" ;
    photo.src = "images/image2.png" ;
}
btns[2].onclick = function(){
    btns[0].className = "btn" ;
    btns[1].className = "btn" ;
    btns[2].className = "btn active" ;
    photo.src = "images/image3.png" ;
}
