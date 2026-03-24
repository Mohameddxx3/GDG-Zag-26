
let x = document.querySelector('.one');
let y = document.querySelector('.two');

let z = x.title;
let a = x.textContent;

x.title=y.title;
y.title=z;

x.textContent = y.textContent;
y.textContent = `${a} 2` ;

