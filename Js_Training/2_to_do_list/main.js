
let input = document.getElementById("input-box");
let button =document.querySelector("button");
let tasks = document.querySelector(".tasks");

button.onclick = function(){
    let task = input.value;
    if(task != ""){
        let li =document.createElement("li")
        let text =document.createTextNode(task);
        li.appendChild(text);
        tasks.appendChild(li);
        saveData();

        // li.onclick = function(){
        //     li.classList.toggle("checked");
        //     saveData();
        // }

        let span =document.createElement("span");
        // span.innerHTML = "\u00d7";
        span.textContent = "×";
        li.appendChild(span);
        saveData();

        // span.onclick = function(){
        //     li.remove();
        //     saveData();
        // }

        
    }
    else
        alert("You Must Write Something!");
    
    input.value ="";
}


    tasks.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});



function saveData(){
    localStorage.setItem("data" , tasks.innerHTML );
}
function showData(){
    tasks.innerHTML =  localStorage.getItem("data");
}
showData();


