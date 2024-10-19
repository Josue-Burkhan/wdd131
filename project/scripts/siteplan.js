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