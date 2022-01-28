let nama = localStorage.getItem("sessionNama") || '';
let users = JSON.parse(localStorage.getItem("arrusers") || "[]");

function inputMood(selectorDay, valueMood) { // radio 1-5, HTML hari id="senin"  MAIN FUNCTION
    //testing
    // let inputMood = radioMood
    let index = selectorDay;
 
    for (let i = 0; i < users.length; i++) {
       if (nama === users[i].username) {
          users[i].mood[index] = valueMood;
          return users[i].mood;
       }
    };
 }

document.getElementById("mondayNext").addEventListener('click', function(event) {
    event.preventDefault()
    let selectorDay = 0
    let valueMood = document.getElementById('mon').value;
    inputMood(selectorDay, valueMood);
    localStorage.setItem("arrusers", JSON.stringify(users));
})

document.getElementById("tuesdayNext").addEventListener('click', function(event) {
    event.preventDefault()
    let selectorDay = 1
    let valueMood = document.getElementById('tue').value;
    inputMood(selectorDay, valueMood);
    localStorage.setItem("arrusers", JSON.stringify(users));
})

document.getElementById("wednesdayNext").addEventListener('click', function(event) {
    event.preventDefault()
    let selectorDay = 2
    let valueMood = document.getElementById('wed').value;
    inputMood(selectorDay, valueMood);
    localStorage.setItem("arrusers", JSON.stringify(users));
})

document.getElementById("thursdayNext").addEventListener('click', function(event) {
    event.preventDefault()
    let selectorDay = 3
    let valueMood = document.getElementById('thu').value;
    inputMood(selectorDay, valueMood);
    localStorage.setItem("arrusers", JSON.stringify(users));
})

document.getElementById("FridayNext").addEventListener('click', function(event) {
    event.preventDefault()
    let selectorDay = 4
    let valueMood = document.getElementById('fri').value;
    inputMood(selectorDay, valueMood);
    localStorage.setItem("arrusers", JSON.stringify(users));
})

document.getElementById("saturdayNext").addEventListener('click', function(event) {
    event.preventDefault()
    let selectorDay = 5
    let valueMood = document.getElementById('sat').value;
    inputMood(selectorDay, valueMood);
    localStorage.setItem("arrusers", JSON.stringify(users));
})

document.getElementById("sundayNext").addEventListener('click', function(event) {
    event.preventDefault()
    let selectorDay = 6
    let valueMood = document.getElementById('sun').value;
    inputMood(selectorDay, valueMood);
    localStorage.setItem("arrusers", JSON.stringify(users));
})