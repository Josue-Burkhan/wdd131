document.getElementById("last-modified").textContent = document.lastModified;
//Nav mobil
const headers = document.querySelectorAll('.faq-header');
const navigation = document.querySelector('.navigation');
const menuBut = document.querySelector('#menu');
const firstPag = document.querySelector('.first-pag');

menuBut.addEventListener('click', () => {
  navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
  firstPag.style.marginTop = firstPag.style.marginTop === '130px' ? '0' : '130px';
});



//FAQ section
function faqSection () {
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
}




let intervalId;
document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  const greeting = document.getElementById('greeting');
  const welcomeScreen = document.getElementById('welcome-screen');
  const inputMessege = document.getElementById('name-input-container');
  const backgroundWelcome = document.querySelector('.background-welcome-screen');
  const mainContent = document.getElementById('main-content');

  if (username) {
    welcomeScreen.style.display = 'none';
    backgroundWelcome.style.display = 'none';
    mainContent.style.display = 'block';
    clearInterval(intervalId);
    document.getElementById("username-header").textContent = `User: ${localStorage.getItem("username")}`;
  } else {
    document.getElementById('username').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const usernameInput = document.getElementById('username').value;

        if (usernameInput) {
          localStorage.setItem('username', usernameInput);
          greeting.textContent = `Welcome, ${usernameInput}!`;
          greeting.style.display = 'block';
          inputMessege.style.display = 'none';
          greeting.style.fontSize = '3rem';
          greeting.style.textAlign = 'justify';
          document.getElementById("username-header").textContent = `User: ${localStorage.getItem("username")}`;

          setTimeout(() => {
            welcomeScreen.style.display = 'none';
            backgroundWelcome.style.display = 'none';
            mainContent.style.display = 'block';
            clearInterval(intervalId);
          }, 3000);
        }
      }
    });

    intervalId = setInterval(function () {
      lines();
    }, 200);
  }
});

function lines() {
  if (!localStorage.getItem('username')) {
    let sizeW = Math.random() * 22;
    let duration = Math.random() * 3;
    let e = document.createElement("div");
    e.setAttribute("class", "circle");
    document.body.appendChild(e);
    e.style.width = 12 + sizeW + "px";
    e.style.left = Math.random() * innerWidth + "px";
    e.style.animationDuration = 2 + duration + "s";

    setTimeout(function () {
      if (e) {
        document.body.removeChild(e);
      }
    }, 5000);
  }
}


document.getElementById("username-header").textContent = `User: ${localStorage.getItem("username")}`;