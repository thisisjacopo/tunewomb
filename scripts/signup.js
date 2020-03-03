//console.log('signup')
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");

let signupButton = document.getElementById("signup-button");
let loginButton = document.getElementById("login-button");
let form = document.getElementsByClassName("signup-form")[0];
let formFrame = document.getElementsByClassName("container-signup")[0];
let usersDB = JSON.parse(localStorage.getItem('users'))

function checkValidUser() {
    //console.log(firstName.value, lastName.value, email.value, password.value);
    let signupValidatorNew = new signupValidator(firstName.value, lastName.value, email.value, password.value)
    let usersDB = JSON.parse(localStorage.getItem('users'));
    let validUser = true;

    if(!signupValidatorNew.checkEmail()){
        signupValidatorNew.errorCreator("Please insert a valid email", email)
        validUser=false
    } else if (!signupValidatorNew.checkEmailInDB(usersDB)){
        //console.log('check email in db');
        signupValidatorNew.errorCreator("This email is already been registered with us", email)
        validUser=false
    } else if(!signupValidatorNew.checkPassword()){
        signupValidatorNew.errorCreator("Please try insert your password again", password)
        validUser=false
    } else if(!signupValidatorNew.checkRepeatPassword(repeatPassword.value)){
        signupValidatorNew.errorCreator("Your passwords don´t match", repeatPassword)
        validUser=false
    } else {
    return validUser
}
}

function deleteErrors() {
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}
deleteErrors()


function createUser(firstName, lastName, email, password) {
    const newUser = new User(firstName, lastName, email, password)

    if (usersDB) {
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
}

/*
function createUser (name, email, password) {
    const newUser = new User (name, email, password)

    if (usersDB){
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
} 
*/

signupButton.addEventListener('click', function (event) {
    //console.log('submitted')

    event.preventDefault();
          deleteErrors();

    if (checkValidUser()) {
        console.log('User registered correctly.')
        createUser(firstName.value, lastName.value, email.value, password.value, repeatPassword.value)
    };
});

loginButton.addEventListener('click', function (event) {
    //console.log('submitted')

    event.preventDefault();
          deleteErrors();

    if (checkValidUser()) {
        sersDB(email.value, password.value)
        console.log('Welcome back.')
    };
});