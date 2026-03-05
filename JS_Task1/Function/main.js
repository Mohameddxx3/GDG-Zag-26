// assignment_1 ---------------------------------

function sayHello(theName, theGender) {
    if(theGender == "Male"){
        theGender= "Mr";
    }else if(theGender == "Female"){
        theGender= "Miss";
    }else{
        theGender="";
    }
    console.log(`Hello ${theGender} ${theName}`) ;
}

sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// assignment_2 ---------------------------------

function calculate(firstNum, secondNum, operation) {
    if(secondNum == undefined){
        console.log("Second Number Not Found");
    }else if(operation == "subtract"){
        console.log (firstNum - secondNum);
    }else if(operation == "multiply"){
        console.log (firstNum * secondNum);
    }else if(operation == "add" || operation == undefined){
        console.log(firstNum + secondNum);
    }
}

calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
calculate(20, 30); // 50
calculate(20); // Second Number Not Found

// assignment_3 ---------------------------------

function ageInTime(theAge) {
    if( theAge < 10 || theAge > 100){
        console.log("Age Out Of Range");
    }else{
        console.log(`${theAge *12} Months `);
        console.log(`${theAge *12*4} Weeks `);
        console.log(`${theAge *12*4*7} Days `);
        console.log(`${theAge *12*4*7*24} hour `);
        console.log(`${theAge *12*4*7*24*60} minute `);
        console.log(`${theAge *12*4*7*24*60*60} second `);
    }
}
ageInTime(110); // Age Out Of Range
ageInTime(38);

// assignment_4 ---------------------------------

function checkStatus(a, b, c) {
    let name, age, status;

    if (typeof a === "string") name = a;
    else if (typeof a === "number") age = a;
    else status = a;

    if (typeof b === "string") name = b;
    else if (typeof b === "number") age = b;
    else status = b;

    if (typeof c === "string") name = c;
    else if (typeof c === "number") age = c;
    else status = c;

    console.log(`Hello ${name}, Your Age Is ${age}, You Are ${status ? "Available For Hire" : "Not Available For Hire"}`);
}

checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// assignment_5 ---------------------------------

function createSelectBox(startYear, endYear) {
    document.write("<select>");
    for(let i=0;startYear + i <= endYear;i++){
        document.write(`<option value="${startYear + i}">${startYear + i}</option>`);
    }
    document.write("</select>");
}
createSelectBox(2000, 2021);

// assignment_6 ---------------------------------

function multiply(...numbers){
    let result=1;
    for(let i=0 ; i<numbers.length; i++){
        if( typeof numbers[i] !=="string"){
            result*=Math.trunc(numbers[i]);
        }
    }
    console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000