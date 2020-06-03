
let discoverButton = document.getElementById("discover-button");
let calendar = document.getElementById('set-bday');


//GET DATA FROM CALENDAR

function getDate() {
    let fullDate = calendar.value.split('-')
    return fullDate
} // RETURNS AN ARRAY WITH A STRING FOR EACH PART OF THE CALENDAR


function getNum() {
    let birth = getDate()
    let result = ''
    birth.forEach(e => {
        result += (e[e.length - 1])
    })
    return result // RETURNS THE LAST 3 NUMBERS OF EACH INPUT IN THE CALENDAR
}


// BUTTON FUNCTIONS

discoverButton.onclick = () => {
    let lastNum = getNum()
    getData(lastNum)
}


function submitDate() {
    return sendDate
}

event.submitDate() // PASS THE VALUE TO THE FETCH API

// CALL TO API

function getData(num) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${num}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            let wrapper = document.getElementById('wrapper-artista')
            let card = document.createElement('div')
            card.innerHTML = `<div class="card-result">
                <img class="card-img-top" src=${data.picture_big} alt="Card image cap">
                <div class="card-body">
                <h2>${data.name}</h2>
                <h5> 
                    <a href=${data.link}>${data.link}<a/>
                </h5>
                <p class="card-text">Follow the link above to discover the artist playlist.</p>
                </div>`
            wrapper.appendChild(card)
        })
        .catch(error => console.log(error))

}