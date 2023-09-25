const firebaseConfig = {
    apiKey: "AIzaSyAAnzk8wC3L8o4cTCCLChip0jLOKzgMYBQ",
    authDomain: "ak22-phs-csc-xxx.firebaseapp.com",
    databaseURL: "https://ak22-phs-csc-xxx-default-rtdb.firebaseio.com",
    projectId: "ak22-phs-csc-xxx",
    storageBucket: "ak22-phs-csc-xxx.appspot.com",
    messagingSenderId: "475905928992",
    appId: "1:475905928992:web:84c42b6a8e4b8c50623145",
    measurementId: "G-GG8DV9RP6R"
  };
  
  
  //for initialize firebase

firebase.initializeApp(firebaseConfig);


var database = firebase.database(); // For Realtime Database

// Reference to the form and success message
var messageForm = document.getElementById("messageForm");
var successMessage = document.getElementById("successMessage");


// Function to submit the message
function submitMessage(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the message from the form
    var message = document.getElementById("message").value;

// Push the message data to Firebase Realtime Database (or Firestore)
var messagesRef = database.ref("messages"); // Replace "messages" with your desired database path
messagesRef.push({
  message: message
});

// Show the success message
successMessage.style.display = "block";

// Clear the form
setTimeout(() => {
    successMessage.style.display = "none";
}, 3000);

messageForm.reset();
}

// Add a submit event listener to the form
messageForm.addEventListener("submit", submitMessage);