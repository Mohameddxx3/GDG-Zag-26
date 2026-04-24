let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let name3 = document.getElementById("name3");
let select = document.getElementById("select");

if (sessionStorage.getItem("name1")) {
    name1.value = sessionStorage.getItem("name1");
}
if (sessionStorage.getItem("name2")) {
    name2.value = sessionStorage.getItem("name2");
}
if (sessionStorage.getItem("name3")) {
    name3.value = sessionStorage.getItem("name3");
}
if (sessionStorage.getItem("select")) {
    select.value = sessionStorage.getItem("select");
}

function x() {
    window.sessionStorage.setItem("name1", name1.value );
    window.sessionStorage.setItem("name2", name2.value );
    window.sessionStorage.setItem("name3", name3.value );
    window.sessionStorage.setItem("select", select.value );
}
name1.onchange = x;
name2.onchange = x;
name3.onchange = x;
select.onchange = x;
