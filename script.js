const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');

  // Optional: for accessibility
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
});
