let x = document.getElementsByClassName("result")[0];
let y = document.querySelector('[name="dollar"]');

y.oninput = function() {
    let i= Number(y.value);
    if (!i) i = 0;
    let j=(i*15.6).toFixed(2) ;
    x.textContent=`{${i}} USD Dollar = {${j}} Egyptian Pound`;
}

