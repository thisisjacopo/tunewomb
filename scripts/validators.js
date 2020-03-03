//'use strict'
console.log('otracosa')
class Validator {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    checkPassword(){
        console.log('password', this.password)
        if(!this.password){
            return false
        } else if(this.password.length < 6) {
            return false
        } else {
            return true
        }
    }

    checkRepeatPassword(confirmPassword){
        console.log('check', this.password, confirmPassword)
        if (this.password !== confirmPassword){
            return false
        }
         else {
            return true
        }
    }

    checkEmail() {
        let emailCheck = RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}")
        if (!emailCheck.test(this.email)) {
            return false
        }
        return true
    }

    errorCreator (message, location) {
        let div = document.createElement("div")
        div.setAttribute("class", "error")
        div.innerHTML = message
        form.insertBefore(div, location)
    }

    deleteErrors (){
        let errors = [...document.getElementsByClassName("error")]
        errors ? errors.forEach(error => error.remove()) : null;
    }

}


class User {
    constructor(firstName,lastName, email, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
  }


class signupValidator extends Validator {
  constructor (firstName, lastName, email, password) {
  super (email, password)
    this.firstName = firstName
    this.lastName = lastName
    }

    checkEmailInDB (usersDB){
        console.log('usersDB', usersDB)
        let answer = true;

        if (!usersDB){
            return true;
        }
        else{
            usersDB.forEach(user => {
                console.log(user.email, this.email)
                if (user.email === this.email){ 
                    answer=false
                }
            })
        }
        return answer;
    }
}

class LogInValidator extends signupValidator {
    constructor (email, password){
        super(email, password)
    }

    checkEmailInDB (string){
        console.log('checking email')
        if (!userDB) {
            return false
        } else {
            userDB.forEach(user => {
                if (user.email === string){
                    return true
                }
            })
        }
        return false
}
}
