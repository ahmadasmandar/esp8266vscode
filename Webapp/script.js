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


$(document).ready(function(){
  var database = firebase.database();
  var ledStatus;

  database.ref().on("value", function(snap){
    ledStatus = snap.val().ledStatus;
    if(ledStatus == 1){
      $(".lightStatus").text("The light is on");
    } else {
      $(".lightStatus").text("The light is off");
    }
  });

  $(".lightButton").click(function(){
    var firebaseRef = firebase.database().ref().child("ledStatus");

    if(ledStatus == 1){
      firebaseRef.set(0);
      ledStatus = 0;
    } else {
      firebaseRef.set(1);
      ledStatus = 1;
    }
  });
});
