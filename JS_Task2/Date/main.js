let birthDate = new Date("2006-05-31");
let now = new Date();

let diff = now - birthDate;

let seconds = Math.floor(diff / 1000);
let minutes = Math.floor(diff / (1000 * 60));
let hours   = Math.floor(diff / (1000 * 60 * 60));
let days    = Math.floor(diff / (1000 * 60 * 60 * 24));
let months  = Math.floor(days / 30); 
let years   = Math.floor(days / 365);

console.log(seconds + " Seconds");
console.log(minutes + " Minutes");
console.log(hours + " Hours");
console.log(days + " Days");
console.log(months + " Months");
console.log(years + " Years");