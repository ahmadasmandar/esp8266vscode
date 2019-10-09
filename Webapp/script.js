// Initialize Firebase
//The project has been deleted in firebase
//fill in your own config info
var firebaseConfig = {
  apiKey: "AIzaSyB3llw-duS5ucD5TyDP6JNiBP3ta4AwGWs",
  authDomain: "esptut-88be5.firebaseapp.com",
  databaseURL: "https://esptut-88be5.firebaseio.com",
  projectId: "esptut-88be5",
  storageBucket: "esptut-88be5.appspot.com",
  messagingSenderId: "1087808364492",
  appId: "1:1087808364492:web:b0aa09b257f885fb158769"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function() {
  var database = firebase.database();
  var ledStatus;
  var readName;
  let tex_area_text = document.querySelector("#text-area");
  // read the value of a key
  database.ref().on("value", getLedStatue);
  // end of reading and changing the value of the h1 class
  function getLedStatue(snap) {
    ledStatus = snap.val().ledStatus;
    let nameFire = snap.val().name;

    if (ledStatus == 1) {
      $("#lighstat").text("The light is on");
      document.querySelector("#led-img").src = "led-on.svg";
    } else {
      $("#lighstat").text("The light is off");
      document.querySelector("#led-img").src = "led-off.svg";
    }
    tex_area_text.innerHTML = nameFire;
  }
  $("#btn-on").on("click", function() {
    var firebaseRef = firebase
      .database()
      .ref()
      .child("ledStatus");

    if (ledStatus == 1) {
      // set the new values
      firebaseRef.set(0);
      ledStatus = 0;
    } else {
      // set the new values
      firebaseRef.set(1);
      ledStatus = 1;
    }
  });

  $("#second").on("click", function() {
    // read the value of a key
    database.ref().on("value", function(snap) {
      readName = snap.val().name;
    });
    // get the name of the child to make ready to change
    var firebaseRef = firebase
      .database()
      .ref()
      .child("name");
    if (readName == "Hallo i am true") {
      // set the new values
      firebaseRef.set("Hallo I am  flase");
    } else {
      firebaseRef.set("Hallo i am true");
    }
  });
  $("#success").on("click", printHello);

  function printHello() {
    alert("Hello World!");
  }
});

let plantImage = document.querySelector("#plant-img");
let change = document.querySelector("#change-button");

change.addEventListener("click", function() {
  plantImage.src = "plant-krank.svg";
  plantImage.style.backgroundColor = "#ff3d00";
  plantImage.style.borderRadius = "5px";
});
// document.querySelector("#success").addEventListener("click",printHello);
