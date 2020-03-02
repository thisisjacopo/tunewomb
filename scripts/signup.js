let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("password_confirmation");

let signupButton = document.getElementById("signup-button");
let loginButton = document.getElementsByClassName("login-button");
let form = document.getElementsByClassName("signup-form")[0];
let formFrame = document.getElementsByClassName("container-signup")[0];

class signupValidator {
    constructor (firstName, lastName, email, password) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    }
}

let usersDB = JSON.parse(localStorage.getItem('users'))

signupButton.addEventListener('click', function (event) {
    console.log('submitted')
    event.preventDefault();
          deleteErrors();

    if (checkValidUser()) {
        console.log('User registered correctly.')
        createUser(firstName.value, lastName.nodeValue, email.nodeValue, password.value, confirmPassword.value)
    };
});



function checkValidUser() {
    let signupValidator = new signupValidator(firstName.value, lastName.nodeValue, email.nodeValue, password.value)
    let usersDB = JSONparse(localStorage.getItem('users'));
    let validUser = true;

    console.log(usersDB)

    if (!signUpValidator.checkEmail()) {
        signUpValidator.errorCreator("You're email is not valid, please check the format", email)
        validUser = false
    }
    if (!signUpValidator.checkPassword()) {
        signUpValidator.errorCreator("Please insert a valid password", password)
        validUser = false
    }
    if (!signUpValidator.checkConfirmPassword()) {
        signUpValidator.errorCreator("The password doesn´t match", confirmPassword)
        validUser = false
    }
    if (!signUpValidator.checkEmailInDB(usersDB)) {
        signUpValidator.errorCreator("This email has already been registred with us", email)
        validUser = false
    }

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