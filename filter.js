document.addEventListener('DOMContentLoaded', () => {
    
    // Wir warten kurz, bis gallery.js fertig ist (Sicherheitshalber)
    setTimeout(initFilterSystem, 100);

    function initFilterSystem() {
        const bubbleList = document.getElementById('bubbleList');
        const filterContainer = document.getElementById('filterContainer');
        const mobileBtn = document.getElementById('mobileFilterBtn');
        const applyBtn = document.getElementById('applyFilterBtn');
        
        // 1. Alle aktuell sichtbaren Projekte auf der Seite finden
        // (gallery.js hat sie bereits gefiltert nach Typ z.B. Resin oder FDM)
        const projectCards = document.querySelectorAll('.project-card');
        
        if (projectCards.length === 0) return; // Nichts zu filtern

        // 2. Alle einzigartigen Kategorien sammeln
        const categoriesSet = new Set();
        
        projectCards.forEach(card => {
            const cats = card.dataset.kategorie.split(','); // "anime, tabletop" -> ["anime", " tabletop"]
            cats.forEach(cat => {
                const cleanCat = cat.trim();
                if (cleanCat.length > 0) {
                    categoriesSet.add(cleanCat);
                }
            });
        });

        // Alphabetisch sortieren
        const uniqueCategories = Array.from(categoriesSet).sort();

        // 3. Bubbles erstellen
        uniqueCategories.forEach(cat => {
            const btn = document.createElement('div');
            btn.className = 'filter-bubble';
            // Ersten Buchstaben groß schreiben für die Optik
            btn.innerText = cat.charAt(0).toUpperCase() + cat.slice(1);
            btn.dataset.filter = cat; // Klein geschrieben speichern für Logik
            
            btn.addEventListener('click', () => {
                btn.classList.toggle('active'); // An/Aus schalten
                applyFilters(); // Sofort filtern
            });

            bubbleList.appendChild(btn);
        });

        // 4. Die Filter-Logik
        function applyFilters() {
            // Welche Bubbles sind gerade aktiv?
            const activeFilters = Array.from(document.querySelectorAll('.filter-bubble.active'))
                                       .map(b => b.dataset.filter);

            projectCards.forEach(card => {
                // Wenn KEIN Filter aktiv ist -> Zeige alle
                if (activeFilters.length === 0) {
                    card.style.display = 'flex';
                    return;
                }

                // Prüfen: Hat die Karte EINE der aktiven Kategorien?
                const cardCats = card.dataset.kategorie;
                const isMatch = activeFilters.some(filter => cardCats.includes(filter));

                if (isMatch) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // 5. Mobile Menü Steuerung
        if (mobileBtn) {
            mobileBtn.addEventListener('click', () => {
                filterContainer.classList.add('open');
                // Body scrollen verhindern
                document.body.style.overflow = 'hidden';
            });
        }

        if (applyBtn) {
            applyBtn.addEventListener('click', () => {
                filterContainer.classList.remove('open');
                document.body.style.overflow = ''; // Scrollen wieder erlauben
            });
        }
    }
});