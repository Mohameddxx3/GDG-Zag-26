// assignment_2 ================================================

function createPopup (){
    let div = document.createElement("div");
    div.innerHTML = "<h1>Welcome</h1> <p>Welcome To Elzero Web School</p>";
    div.style.cssText = " background-color : #eee ; padding : 20px 100px ; border : 1px solid #aaa ; position : relative"

    document.body.appendChild(div);
    document.body.style.cssText = " display : flex ; justify-content : center ; align-items : center ; height : 90vh ; text-align : center "

    let close = document.createElement("div");
    close.textContent = "X";
    close.style.cssText = " color:#fff ; background-color : red ; display : block ; height : 20px ; width : 20px ; position : absolute ; padding : 10px ; border-radius : 50% ; top : -20px ; right : -20px ; cursor : pointer "
    div.appendChild(close);

    close.onclick = function(){
        div.remove();
    }
}

setTimeout( createPopup ,5000 );
