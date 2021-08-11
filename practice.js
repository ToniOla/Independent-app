
// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDWgOHBZHDOxRA_IZ13k25C0nt23SN6L94",
  authDomain: "kwittertest-3b11f.firebaseapp.com",
  databaseURL: "https://kwittertest-3b11f-default-rtdb.firebaseio.com",
  projectId: "kwittertest-3b11f",
  storageBucket: "kwittertest-3b11f.appspot.com",
  messagingSenderId: "894291038004",
  appId: "1:894291038004:web:4db5b6523ef536d3c89f61"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


