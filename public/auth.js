const { auth } = require("@googleapis/docs");

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPasswoed(email, password).then( cred => {
        console.log(cred.user)
    })
})