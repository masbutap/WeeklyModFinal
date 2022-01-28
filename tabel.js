let nama = localStorage.getItem("sessionNama") || '';
let users = JSON.parse(localStorage.getItem("arrusers") || "[]");


function showTable(username) { 
    for (let i = 0; i < users.length; i++) { 
        if (username === users[i].username) {
            nama = username;
            return users[i].mood;
        }
    }
}

let resultmood = showTable(nama);
document.getElementById("tabMon").innerHTML = resultmood[0]
document.getElementById("tabTue").innerHTML = resultmood[1]
document.getElementById("tabWed").innerHTML = resultmood[2]
document.getElementById("tabThu").innerHTML = resultmood[3]
document.getElementById("tabFri").innerHTML = resultmood[4]
document.getElementById("tabSat").innerHTML = resultmood[5]
document.getElementById("tabSun").innerHTML = resultmood[6]

