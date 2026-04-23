// assignment_1 ================================================

let x = window.prompt("Print Number From – To" , "Example:5-20");

let y = x.split("-", 2);

let start = Number(y[0]);
let end = Number(y[1]);

if(start < end){
    for(let i = start; i <= end; i++){
        console.log(i);
    }
}else{
    for(let i = end; i <= start; i++){
        console.log(i);
    }
}


