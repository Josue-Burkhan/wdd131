const headers = document.querySelectorAll('.faq-header');
//Nav mobil
const navigation = document.querySelector('.navigation');
const menuBut = document.querySelector('#menu');
const faq = document.querySelector('.faq');

menuBut.addEventListener('click', () => {
  navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
  faq.style.marginTop = faq.style.marginTop === '130px' ? '0' : '130px';
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


document.getElementById("last-modified").textContent = document.lastModified;
document.getElementById("username-header").textContent = `User: ${localStorage.getItem("username")}`;