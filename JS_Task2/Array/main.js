// assignment_1 ----------------------------------------------------

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0,3)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// assignment_2 ----------------------------------------------------

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

// assignment_3 ----------------------------------------------------

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(arrTwo , arrOne).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// assignment_4 ----------------------------------------------------

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log((words[2][0][2] + words[2][0][3] + words[2][0][4] + words[2][0][5]).toUpperCase()); // ZERO

// assignment_5 ----------------------------------------------------

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) console.log("Found");

if (haystack.indexOf(needle) !== -1) console.log("Found");

if (haystack.lastIndexOf(needle) !== -1) console.log("Found");

// assignment_6 ----------------------------------------------------

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr1 , arr2 ).sort().slice(arr2.length).join("").toLowerCase();

console.log(allArrs); // fxy