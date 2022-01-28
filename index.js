let nama = localStorage.sessionNama || '';
let users = JSON.parse(localStorage.getItem("arrusers") || "[]");

//testing
// let users = [{ username: 'naruto', password: '123', mood: [0, 0, 0, 0, 0, 0, 0]}, {username: 'sasuke', password: '456', mood: [0, 0, 0, 0, 0, 0, 0]} ]

function createUser(username, password) { //tombol register
   let name = document.getElementById("username");
   let pw = document.getElementById("password");
   let object = {
      username: name,
      password: pw,
      mood: [0, 0, 0, 0, 0, 0, 0] 
   }
   users.push(object);
   return users;
}  // working
// [{ username: 'naruto', password: '123', mood: [0, 0, 0, 0, 0, 0, 0]}, {username: 'sasuke', password: '456', mood: [0, 0, 0, 0, 0, 0, 0]} ]

function login (username, password) { // untuk login di HTML, tombol login
   for (let i = 0; i < users.length; i++) { //loop untuk match username dan pw
      if (username === users[i].username && password === users[i].password) {
         nama = username;
         return users[i].mood;
      }
   }
} // working
// console.log(login('sasuke', '456'));
// console.log(nama);
// [0, 0, 0, 0, 0, 0, 0]

function inputMood(selectorDay, radioMood) { // radio 1-5, HTML hari id="senin"  MAIN FUNCTION
   let index = document.getElementById(selectorDay).value;
   let inputMood = document.getElementById(radioMood).value;

   //testing
   // let inputMood = radioMood
   // let index = selectorDay

   for (let i = 0; i < users.length; i++) {
      if (nama === users[i].username) {
         users[i].mood[index] = inputMood;
         return users[i].mood;
      }
   }
} //working
// [ 0, 0, 0, 4, 0, 0, 0]


function afterInput(selectorDay, input) { // setelah submit input mood per hari
   let index = document.getElementById(selectorDay).value;
   if (input[index] >= 3) { // input mood 3, 4, 5 = doing well
      return `You're doing well`; // nanti dilink ke HTML
   }

   if (input[index] === 1 && input[index - 1] === 1) { // kalau 2 hari berturut2 moodnya 1
      return `We're worried about you. Try contacting our psychologist: +62 6262 6262`; // nanti juga link ke HTML
   } else if (input[index] < 3) { // kalau input mood 1, 2
      return `Page kuesioner` // link ke page kuesioner
   }
}

function question(answer) { // hanya jalan kalau return afterInput() ===  `Page keusioner`
   // Page kuesioner: multiple choice. Yes = true, no = false.
   if (answer) {
      return // cara mengatasi amarah
   } else {
      return // <iframe width="560" height="315" src="https://www.youtube.com/embed/zd44dgITV_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      // tembak link html
   }
}

//testing
// console.log(inputMood(3, 4));

/** function login
 *  [ { 'naruto': [3, 3, 4, 5, 2, 1, 3] } ,
 *    { 'sasuke': [1, 2, 1, 2, 2, 1, 3] }
 *  ]
 * 
 * 
 * 
 * 
*/