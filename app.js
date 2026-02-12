const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');

// 1. Menü öffnen/schließen beim Klick auf den Burger
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Menü schließen, wenn man DANEBEN klickt
document.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
    }
}); 