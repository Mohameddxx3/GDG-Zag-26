// head ------------------------------------

let head = document.createElement("header") ;
head.style.cssText="display:flex ; justify-Content:space-between ;align-Items:center;padding:20px;background-Color:#f6f6f6";

//logo
let logo = document.createElement("div") ;
logo.className = "logo" ;
logo.textContent = "Elzero";
head.appendChild(logo);
logo.style.cssText="color:green ; font-size:25px ; font-weight:bold ";

//menu
let menu = document.createElement("ul") ;
let items = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < items.length; i++) {
    let li = document.createElement("li");
    li.textContent = items[i];
    menu.appendChild(li);
}
head.appendChild(menu);
menu.style.cssText="color:#aaa ; display:flex ; list-style:none;gap:15px  ";

document.body.appendChild(head);

// content --------------------------------------

let content = document.createElement("div") ;
content.className="content";
content.style.cssText = "display: grid;grid-template-columns: repeat(3, 1fr);gap: 20px;padding: 20px;background-color: #eee";

for(let i=1 ; i<=15;i++){
    let product = document.createElement("div") ;
    product.className="product";
    product.style.cssText = "background-color: white;padding: 20px;text-align: center";
    
    let num = document.createElement("span") ;
    num.textContent=i;
    product.appendChild(num);
    num.style.cssText = "display: block;font-size: 25px;font-weight: bold";
    
    product.append("product");

    content.appendChild(product);
}

document.body.appendChild(content);

//foot -------------------------------------

let foot = document.createElement("footer") ;
foot.className = "footer";
foot.textContent= "CopyRight 2021";
foot.style.cssText=" background-color:green ; text-align:center ; padding:15px ; color:white ";

document.body.appendChild(foot);