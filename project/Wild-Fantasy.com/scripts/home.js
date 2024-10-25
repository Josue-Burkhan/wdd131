const headers = document.querySelectorAll('.faq-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const currentActive = document.querySelector('.faq-header.active');

    if (currentActive && currentActive !== header) {
      currentActive.classList.remove('active');
      currentActive.nextElementSibling.classList.remove('show');
    }

    header.classList.toggle('active');
    const content = header.nextElementSibling;
    content.classList.toggle('show');
  });
});




  var firebaseConfig = {
    apiKey: "AIzaSyBPPlphgf0VaJ9d_lTOegBrgwMvDBXmD8A",
    authDomain: "wild-fantasy.firebaseapp.com",
    projectId: "wild-fantasy",
    storageBucket: "wild-fantasy.appspot.com",
    messagingSenderId: "321776452580",
    appId: "1:321776452580:web:37fa3ca2ebe0c6f5227df1"
  };
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();

  var likeButton = document.getElementById("likeButton");
  var likeCountRef = database.ref("likes");

  likeCountRef.on("value", function(snapshot) {
    document.getElementById("likeCount").textContent = snapshot.val();
  });

  likeButton.addEventListener("click", function() {
    likeCountRef.transaction(function(currentLikes) {
      return (currentLikes || 0) + 1;
    });
  });

/*
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPPlphgf0VaJ9d_lTOegBrgwMvDBXmD8A",
  authDomain: "wild-fantasy.firebaseapp.com",
  databaseURL: "https://wild-fantasy-default-rtdb.firebaseio.com",
  projectId: "wild-fantasy",
  storageBucket: "wild-fantasy.appspot.com",
  messagingSenderId: "321776452580",
  appId: "1:321776452580:web:37fa3ca2ebe0c6f5227df1",
  measurementId: "G-Y0GW3JCW59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/