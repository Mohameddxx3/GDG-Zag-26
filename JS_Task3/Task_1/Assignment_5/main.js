for(let i=0 ;i<5;i++){
    let x = document.images[i];
    if(x.hasAttribute("alt")){
        x.alt="old";
    }else
        x.alt="Elzero New";
    
    console.log(x)
}