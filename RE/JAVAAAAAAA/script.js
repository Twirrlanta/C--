const email = document.querySelector('#Third');
const pass = document.querySelector('#Fourth');
const submit = document.querySelector('.second-btn');

const validateEmail = () => {
    const val = email.value;
    if ((val.length < 3) || (val.length > 10)) {
        email.style.borderColor = 'red';
    } 
    else {
        email.style.borderColor = 'green';
    }
}

submit.addEventListener('click', () => {
    validateEmail();
    validatePassword();
})

const validatePassword = () => {
    const gal = pass.value;
    if ((gal.length < 3) || (gal.length > 10)) {
        pass.style.borderColor = 'red';
    } 
    else {
        pass.style.borderColor = 'green';
    }
}