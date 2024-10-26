const headers = document.querySelectorAll('.faq-header');

//Nav mobil
const navigation = document.querySelector('.navigation');
const menuBut = document.querySelector('#menu');
const faq = document.querySelector('.faq');

menuBut.addEventListener('click', () => {
  navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
  faq.style.marginTop = faq.style.marginTop === '25%' ? '0' : '25%';
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