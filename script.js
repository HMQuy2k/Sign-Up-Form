// check if confirm password field is the same with password field

const passIN = document.querySelector('#password');
const passConfirm = document.querySelector('#confirmp');
const errorText = document.querySelector('input + span');

passConfirm.addEventListener('input', (e) => {
    if (passConfirm.value !== passIN.value) {
        passIN.setCustomValidity("Password not matching")
        errorText.textContent = "Password not matching";
    } else {
        passIN.setCustomValidity("")
        errorText.textContent = "";
    }
})