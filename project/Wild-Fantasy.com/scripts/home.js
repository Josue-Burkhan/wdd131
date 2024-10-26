const headers = document.querySelectorAll('.faq-header');

//Nav mobil
const navigation = document.querySelector('.navigation');
const menuBut = document.querySelector('#menu');
const firstPag = document.querySelector('.first-pag');

menuBut.addEventListener('click', () => {
  navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
  firstPag.style.marginTop = firstPag.style.marginTop === '15%' ? '0' : '15%';
});



//FAQ section
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

let intervalId;
//Animation 
function lines() {
  let sizeW = Math.random() * 22;
  let duration = Math.random() * 3;
  let e = document.createElement("div");
  e.setAttribute("class", "circle");
  document.body.appendChild(e);
  e.style.width = 12 + sizeW + "px";
  e.style.left = Math.random() * innerWidth + "px";
  e.style.animationDuration = 2 + duration + "s";

  setTimeout(function () {
    document.body.removeChild(e);
  }, 5000);
}

intervalId = setInterval(function () {
  lines();
}, 200);

//First messege
document.getElementById('username').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const username = document.getElementById('username').value;
    const greeting = document.getElementById('greeting');
    const welcomeScreen = document.getElementById('welcome-screen');
    const inputMessege = document.getElementById('name-input-container');
    const circles = document.querySelector('.circle');
    const backgroundWelcome = document.querySelector('.background-welcome-screen');

    inputMessege.style.display = 'none';
    circles.style.display = 'none';

    if (username) {
      greeting.textContent = `Welcome, ${username}!`;
      greeting.style.display = 'block';

      greeting.style.fontSize = '3rem';
      greeting.style.textAlign = 'justify';
      clearInterval(intervalId);

      setTimeout(() => {
        welcomeScreen.style.display = 'none';
        backgroundWelcome.style.display = 'none';
        mainContent.style.display = 'block';
      }, 3000);
    }
  }
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

likeCountRef.on("value", function (snapshot) {
  document.getElementById("likeCount").textContent = snapshot.val();
});

likeButton.addEventListener("click", function () {
  likeCountRef.transaction(function (currentLikes) {
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