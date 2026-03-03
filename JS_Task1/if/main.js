// assignment_1 ---------------------------------------

let num=9;

if(num<10){
    console.log("00"+num);
}else if(num<100) {
    console.log("0"+num);
}else{
    console.log(""+num);
}

// assignment_2 ---------------------------------------

let num1 = 9;
let str = "9";
let str2 = "20";

if(num1==str){
    console.log("{num1} Is The Same Value As {str}")
}
if(num1==str && num1!==str){
    console.log("{num1} Is The Same Value As {str} But Not The Same Type")
}
if(num1!=str2 && typeof num1 != typeof str2){
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
}
if(str!=str2 && typeof str == typeof str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}

// assignment_3 ---------------------------------------

let num01 = 10;
let num2 = 30;
let num3 = "30";

if (
  (num3 > num01 && typeof num3 !== typeof num2 &&
   console.log(`${num3} Is Larger Than ${num01} And Type ${typeof num3} Not The Same Type As ${typeof num2}`)) ||

  (num3 > num01 && num3 == num2 && typeof num3 !== typeof num2 &&
   console.log(`${num3} Is Larger Than ${num01} And Value Is The Same As ${num2} And Type ${typeof num3} Not The Same Type As ${typeof num2}`)) ||

  (num3 != num01 && typeof num3 !== typeof num01 && typeof num3 !== typeof num2 &&
   console.log(`${num3} Value And Type Is Not The Same As ${num01} And Type Is Not The Same As ${num2}`))
) {}

// assignment_4 ---------------------------------------

let num001 = 15;
let num02 = 10;
let num03 = 15;
let num4 = 41;

// Condition 1

if (num001 > num02) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num001 > num02 && num001 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num001 > num02 && num001 === num03) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num001 + num02) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num001 + num03) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num001 + num02 + num03) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num001 + num03) + num02 === 21) {
  console.log("True");
} else {
  console.log("False");
}

