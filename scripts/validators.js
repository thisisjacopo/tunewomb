//'use strict'

class Validator {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    checkPassword(){
        if(!this.password){
            return false
        } else if(this.password.lenght < 6) {
            return false
        } else {
            return true
        }
    }
    checkEmail(email, verifyEmail) {
        let emailCheck = RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}")
        if (email === verifyEmail && emailCheck.test(email)) {
            return false
        }
        return true
    }

}



/*class signupValidator extends Validator {
    constructor (firstName, lastName, email, password) {
  super (email, password)
    this.email = email
    this.password = password
    }
}*/



class SignUpValidator extends Validator {
    constructor (email, password, repeatPassword){
        super(email, password);
        this.repeatPassword = repeatPassword
    }

    checkEmailInDB (usersDB){
        let userExists = false;

        if (!usersDB){
            return true;
        }
        else{
            usersDB.forEach(user => {
                if (user.email === this.email){
                    userExists=false
                }
            })
        }
        return userExists;
    }

    checkRepeatPassword () {
        if(this.password === this.repeatPassword) {
            return true;
        } else {
            return false;
        } 
    }
}

class LogInValidator extends Validator {
    constructor (){
        super();
    }

    checkEmailInDB (string){
        if (!userDB){
            return false
        }
        else{
            userDB.forEach(user => {
                if (user.email === string){return true}
            })
        }
        return false
    }

}