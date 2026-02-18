// Funktion zum Laden von Header und Footer
async function loadIncludes() {
    try {
        // 1. Header laden
        const headerResponse = await fetch('header.html');
        const headerText = await headerResponse.text();
        document.getElementById('header-placeholder').innerHTML = headerText;

        // 2. Footer laden
        const footerResponse = await fetch('footer.html');
        const footerText = await footerResponse.text();
        document.getElementById('footer-placeholder').innerHTML = footerText;

        // 3. Burger-Menü erst initialisieren, wenn der Header auch wirklich existiert!
        initBurgerMenu();
    } catch (error) {
        console.error('Fehler beim Laden von Header/Footer:', error);
    }
}

// Deine bewährte Burger-Menü Funktion
function initBurgerMenu() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');

    if (burgerMenu && navLinks) {
        // Menü öffnen/schließen beim Klick auf den Burger
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Menü schließen, wenn man DANEBEN klickt
        document.addEventListener('click', (event) => {
            if (!burgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
}

// Startschuss: Lade alles, sobald die Seite geöffnet wird
document.addEventListener('DOMContentLoaded', loadIncludes);