// assignment_1 ------------------------------------------------

function getDetails(zName, zAge, zCountry) {

    function namePattern(zName) {
        let name ="";
        for(let i=0 ; i < zName.length ; i++){
            if(zName[i] == " "){
                name += " " + zName[i + 1].toUpperCase();
                break;
            }
            name += zName[i];
        }
        return `${name}.`;
    }

    function ageWithMessage(zAge) {
        let age="";
        for(let i=0 ; i < zAge.length ; i++){
            if(zAge[i] ==" "){
                break
            }
            age += zAge[i];
        }
        return `Your Age Is ${age}`;
    } 

    function countryTwoLetters(zCountry) {
        let country="";
            for(let i=0 ; i < 2 ; i++){
                country += zCountry[i].toUpperCase();
            }
            return `You Live In ${country}`
    }

    function fullDetails() {
        let message = `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
        return message;
    }

    return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

// assignment_2 ------------------------------------------------

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe());

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org"));

// assignment_3 ------------------------------------------------

let checker= zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// assignment_4 ------------------------------------------------

function specialMix(...data) {
    let sum = 0;
    let hasNumber = false;

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "number") {
            sum += data[i];
            hasNumber = true;
        }else if (typeof data[i] === "string") {
            let extracted = parseInt(data[i]);
            if (!isNaN(extracted)) {
                sum += extracted;
                hasNumber = true;
            }
        }
    }

    return hasNumber ? sum : "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
