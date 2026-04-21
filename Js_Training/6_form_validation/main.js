let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submit = document.getElementById("submit");

let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
    let value = name.value;

    if (value.length == 0) {
        nameError.textContent = "Name is required";
        return false;
    } else if (!/^[A-Za-z\u0600-\u06FF]+\s[A-Za-z\u0600-\u06FF]+$/.test(value)) {
        nameError.textContent = "Write full name";
        return false;
    } else {
        nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

function validatePhone() {
    let value = phone.value;

    if (value.length == 0) {
        phoneError.textContent = "Phone is required";
        return false;
    } else if (!/^[0-9]+$/.test(value)) {
        phoneError.textContent = "Numbers only";
        return false;
    } else if (value.length !== 11) {
        phoneError.textContent = "Write full number";
        return false;
    } else {
        phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

function validateEmail() {
    let value = email.value;

    if (value.length == 0) {
        emailError.textContent = "Email is required";
        return false;
    }else if (/[ء-ي]/.test(value)) {
        emailError.textContent = "Arabic not allowed in email";
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        emailError.textContent = "Invalid email";
        return false;
    } else {
        emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

function validateMessage() {
    let value = message.value;
    let count = 30 - value.length;

    if (/[0-9]/.test(value)) {
        messageError.textContent = "No numbers allowed";
        return false;
    } else if (value.length < 30) {
        messageError.textContent = `${count} more characters required`;
        return false;
    } else {
        messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

name.onkeyup = validateName;
phone.onkeyup = validatePhone;
email.onkeyup = validateEmail;
message.onkeyup = validateMessage;

submit.onclick = function(e){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        e.preventDefault();
        submitError.textContent = "Fix errors";
    }
}
