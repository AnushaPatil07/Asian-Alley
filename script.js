const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggle.classList.toggle('active');
});
