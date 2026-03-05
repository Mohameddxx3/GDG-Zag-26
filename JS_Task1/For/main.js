// assignment_1 --------------------------------------------------------

let start = 10;
let end = 100;
let exclude = 40;

for(let i=start;i<=end;i+=start){
    if(i==exclude) continue;
    console.log(i);
}

// assignment_2 --------------------------------------------------------

let start2 = 10;
let end2 = 0;
let stop = 3;

for(let i=start2;i>=end2;i--){
    if(i<10){
        console.log("0"+i);
    }else console.log(i);
    if(i==stop) break;
}

// assignment_3 --------------------------------------------------------

let start3 = 1;
let end3 = 6;
let breaker = 2;

for(let i=start3;i<=6;i++){
    console.log(i);
    for(let j=breaker;j<end3;j+=breaker){
        console.log("-- " + j);
    }
}

// assignment_4 --------------------------------------------------------

let index = 10;
let jump = 2;

for (let i=index;i>2;i-=jump) {
    console.log(i);
}

// assignment_5 --------------------------------------------------------

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let count=letter.length;

for(let i=letter.length - letter.length ; i<friends.length;i++){
    if(friends[i].startsWith(letter.toUpperCase())){
        continue;
    } 
    console.log(`"${count} => ${friends[i]}"`);
    count++;
}

// assignment_6 --------------------------------------------------------

let start6 = 0;
let swappedName = "elZerO";
let result = "";

for(let i = start6; i<swappedName.length ;i++){
    if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
    } else {
    result += swappedName[i].toUpperCase();
    }
}
console.log(result);

// assignment_7 --------------------------------------------------------

let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i=start7;i<mix.length;i++){
    if( typeof mix[i] === "number" && mix[i] !== start7 + true ){
        console.log(mix[i]);
    }
}