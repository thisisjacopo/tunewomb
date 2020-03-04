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
    let signupValidatorNew = new signupValidator(firstName.value, lastName.value, email.value, password.value)
    let usersDB = JSON.parse(localStorage.getItem('users'));
    let validUser = true;
    if (!signupValidatorNew.checkEmail()) {
        signupValidatorNew.errorCreator("Please insert a valid email", email)
        validUser = false
    } else if (!signupValidatorNew.checkEmailInDB(usersDB)) {
        signupValidatorNew.errorCreator("This email is already been registered with us", email)
        validUser = false
    } else if (!signupValidatorNew.checkPassword()) {
        signupValidatorNew.errorCreator("Please try insert your password again", password)
        validUser = false
    } else if (!signupValidatorNew.checkRepeatPassword(repeatPassword.value)) {
        signupValidatorNew.errorCreator("Your passwords don´t match", repeatPassword)
        validUser = false
    } else {


    }

    return validUser
}

function deleteErrors() {
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}
deleteErrors()


function createUser(firstName, lastName, email, password) {
    const newUser = new User(firstName, lastName, email, password)
    let bddlocal = []
    if (usersDB !== null) {
        usersDB.forEach(element => {
                bddlocal.push(element)
            }  
        )}


        bddlocal.push(newUser);
        console.log(bddlocal)
        localStorage.setItem('users', JSON.stringify(bddlocal));

        window.location.href = "../welcomeback.html"
    }

    signupButton.addEventListener('click', function (event) {
        event.preventDefault();
              deleteErrors();

        if (checkValidUser()) {

            console.log('User registered correctly.')
            createUser(firstName.value, lastName.value, email.value, password.value, repeatPassword.value)
        };
    });