//let firstName = document.getElementById("first_name");
//let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");

let signupButton = document.getElementById("signup-button");
let loginButton = document.getElementById("login-button");
let form = document.getElementsByClassName("signup-form")[0];
let formFrame = document.getElementsByClassName("container-signup")[0];
let usersDB = JSON.parse(localStorage.getItem('users'))

loginButton.addEventListener('click', function (event) {
    console.log('submitted')

    event.preventDefault();
          deleteErrors();
          checkLogUser();
    });

function checkLogUser(){console.log(usersDB)
        usersDB.forEach(User => {
            console.log(User)
            if ((User.email === email.value) && 
            (User.password === password.value)) {
                console.log('Welcome back!')
            }

        window.location.href="../welcomeback.html"
    }
)}

function deleteErrors() {
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}
deleteErrors()


