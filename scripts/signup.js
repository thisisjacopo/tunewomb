let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("password_confirmation");

let signupButton = document.getElementById("signup-button");
let loginButton = document.getElementsByClassName("login-button");
let form = document.getElementsByClassName("signup-form")[0];
let formFrame = document.getElementsByClassName("container-signup")[0];
let usersDB = JSON.parse(localStorage.getItem('users'))

function checkValidUser() {
    let signupValidatorNew = new SignUpValidator(firstName.value, lastName.nodeValue, email.nodeValue, password.value)
    let usersDB = JSON.parse(localStorage.getItem('users'));
    let validUser = true;

    console.log(usersDB)

    return validUser
}

function deleteErrors() {
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}

function createUser(firstName, lastName, email, password) {
    const newUser = new User(firstName, lastName, email, password)

    if (usersDB) {
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
}

signupButton.addEventListener('click', function (event) {
    console.log('submitted')

    event.preventDefault();
          deleteErrors();

    if (checkValidUser()) {
        console.log('User registered correctly.')
        createUser(firstName.value, lastName.nodeValue, email.nodeValue, password.value, confirmPassword.value)
    };
});