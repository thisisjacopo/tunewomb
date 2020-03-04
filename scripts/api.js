let discoverButton = document.getElementById("discover-button");
let calendar = document.getElementById('set-bday');


//GET DATA FROM CALENDAR

function getDate() {
    let fullDate = calendar.value.split('-')
    return fullDate
}

let lastNum = ""
let birth = getDate()


/*getDate.forEach(e => {
    console.log(e[e.length-1])
    lastNum+=(e[e.length-1])
})*/

function getNum(){      
    birth.forEach(e => {
        console.log(e[e.length-1])       
        lastNum+=(e[e.length-1])
    })
    return lastNum                      //SHOULD RETURN THE LAST 3 NUMBERS OF EACH INPUT IN THE CALENDAR
}


// BUTTON FUNCTIONS

function submitDate(){
    let calendar = [...document.getElementById('discovery-button').value]
    return calendar
}

discoverButton.addEventListener('click', function (event) {
    console.log('submitted')

    event.submitDate()  // SHOULD PASS THE VALUE TO THE FETCH ADDRESS
    });

// CALL TO API

function getData(){
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${getNum}`)

}
getData()


