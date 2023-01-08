const submitBtn = document.querySelector('.submit-btn');
const name1 = document.querySelector('#name');
const email1 = document.querySelector('#email');
const password1 = document.querySelector('#password');
const number1 = document.querySelector('#number');
const tac1 = document.querySelector('#terms-and-cond');
const notification1 = document.querySelector('#notification');

submitBtn.addEventListener('click', () => {
    if(name1.value.length < 3){
        showAlert('name must be 3 letters long');
    } else if(!email1.value.length){
        showAlert('enter your email');
    } else if(password1.value.length < 8){
        showAlert('password should be 8 letters long');
    } else if(!number1.value.length){
        showAlert('enter your phone number');
    } else if(!Number(number1.value) || number1.value.length < 10){
        showAlert('invalid number, please enter valid one');
    } else if(!tac1.checked){
        showAlert('you must agree to our terms and conditions');
    } else{
            name1.value = '';
            email1.value = '';
            number1.value = '';
            password1.value = '';
            tac1.value = '';
            notification1.value = '';
            
    }
    
})

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}