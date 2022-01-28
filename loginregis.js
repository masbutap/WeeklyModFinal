let nama = localStorage.getItem("sessionNama") || '';
let users = JSON.parse(localStorage.getItem("arrusers") || "[]");

function createUser(username, password) { //tombol register
    let object = {
        username: username,
        password: password,
        mood: [0, 0, 0, 0, 0, 0, 0] 
    }
    users.push(object);
    return users;
};

function login(username, password) { // untuk login di HTML, tombol login
    for (let i = 0; i < users.length; i++) { //loop untuk match username dan pw
        if (username === users[i].username && password === users[i].password) {
            nama = username;
            return users[i].mood;
        }
    }
};

let regisBtn = document.getElementById('regisBtn');
let LoginBtn = document.getElementById('login-button');
let inputRegisName = document.getElementById("regisusername")
let inputRegisPw = document.getElementById("regispassword")
let inputLoginName = document.getElementById('loginUserName')
let inputLoginPw = document.getElementById('loginPassword')

regisBtn.addEventListener("click", function(){
    let inputUsername = inputRegisName.value;
    let inputPassword = inputRegisPw.value
    createUser(inputUsername, inputPassword);
    localStorage.setItem("sessionNama", nama);
    localStorage.setItem("arrusers", JSON.stringify(users));
    console.log(arrusers);
  });

  LoginBtn.addEventListener("click", function(){
    let inputUsername = inputLoginName.value;
    let inputPassword = inputLoginPw.value
    login(inputUsername, inputPassword)
    console.log(inputUsername, inputPassword, users);
    localStorage.setItem("sessionNama", nama);
    alert(`anda berhasil login ${nama}`);
  });