let button1 = document.getElementsByTagName("button")[0];
let button2 = document.getElementsByTagName("button")[1];

let quote = "";
let name = "";

async function getquote() {
    let x = await fetch("https://dummyjson.com/quotes/random");
    let data = await x.json();

    quote = data.quote;
    name = data.author;

    document.getElementsByTagName("blockquote")[0].textContent = quote;
    document.getElementsByTagName("span")[0].textContent = name;
}

getquote();

button1.onclick = function () {
    getquote();
};

button2.onclick = function () {
    let tweetText = `${quote} — ${name}`;

    let url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    window.open(url, "Tweet Window", "width=600,height=300");
};