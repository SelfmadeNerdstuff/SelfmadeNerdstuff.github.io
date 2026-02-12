document.addEventListener('DOMContentLoaded', () => {
    
    // 1. URL Parameter & Elemente holen
    const params = new URLSearchParams(window.location.search);
    const filterTyp = params.get('typ'); 
    const container = document.getElementById('galleryContainer');
    const pageTitle = document.getElementById('pageTitle');
    const pageIntro = document.getElementById('pageIntro');

    // 2. Filtern
    let visibleProjects = [];
    if (filterTyp) {
        visibleProjects = images.filter(img => img.typ === filterTyp && img.status === 'abgeschlossen');
        if (filterTyp === 'resin') {
            pageTitle.innerText = 'Resin Projekte';
            pageIntro.innerText = 'Hier siehst du meine detaillierten Kunstharz-Arbeiten.';
        } else if (filterTyp === 'fdm') {
            pageTitle.innerText = 'FDM Projekte';
            pageIntro.innerText = 'Hier sind meine FDM-Druckwerke.';
        }
    } else {
        visibleProjects = images.filter(img => img.status === 'abgeschlossen');
        pageTitle.innerText = 'Alle Projekte';
    }

    // 3. Karten erstellen
    container.innerHTML = ''; 

    if (visibleProjects.length === 0) {
        container.innerHTML = '<p style="color:white; grid-column: 1/-1; text-align: center;">Keine Projekte gefunden.</p>';
    }

    visibleProjects.forEach((projekt, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => openModal(index);

        const dauerText = projekt.dauer ? `<img src="./img/sanduhr.png" class="sanduhr-icon" alt="Dauer"> ${projekt.dauer}` : '';

        card.innerHTML = `
            <div class="card-header-bar">
                <span class="card-name">${projekt.titel}</span>
                <span class="card-time">${dauerText}</span>
            </div>
            <div class="card-image-wrapper">
                <img src="${projekt.image}" 
                     alt="${projekt.titel}" 
                     loading="lazy" 
                     style="object-position: ${projekt.align || 'center'}">
            </div>
        `;
        container.appendChild(card);
    });

    /* =========================================
       MODAL LOGIK (GALERIE)
       ========================================= */
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalTime = document.getElementById('modalTime');
    const closeModalBtn = document.getElementById('closeModal');
    
    // NEU: Den Zähler holen
    const imageCounter = document.getElementById('imageCounter');

    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let currentProjectImages = [];
    let currentImageIndex = 0;

    window.openModal = function(index) {
        const projekt = visibleProjects[index];

        // Bilder-Liste bauen: Hauptbild + Galerie
        currentProjectImages = [projekt.image]; 
        if (projekt.galerie && projekt.galerie.length > 0) {
            currentProjectImages = currentProjectImages.concat(projekt.galerie);
        }

        currentImageIndex = 0;

        // Infos setzen
        modalTitle.innerText = projekt.titel;
        modalDesc.innerText = projekt.introText ? projekt.introText : "Keine Beschreibung verfügbar.";
        
        if (projekt.dauer) {
            modalTime.style.display = "inline-flex";
            modalTime.querySelector('span').innerText = projekt.dauer;
        } else {
            modalTime.style.display = "none";
        }

        // --- NAVIGATION & ZÄHLER LOGIK ---
        if (currentProjectImages.length > 1) {
            // Mehr als 1 Bild: Pfeile & Zähler anzeigen
            nextBtn.style.display = "flex"; 
            prevBtn.style.display = "flex";
            
            imageCounter.style.display = "block"; // Zähler sichtbar machen
            updateCounter(); // Text aktualisieren (z.B. "1 / 3")
        } else {
            // Nur 1 Bild: Alles verstecken
            nextBtn.style.display = "none";
            prevBtn.style.display = "none";
            imageCounter.style.display = "none"; 
        }

        updateModalImage();
        modal.showModal();
    }

    function updateModalImage() {
        modalImg.src = currentProjectImages[currentImageIndex];
        // Jedes Mal, wenn das Bild wechselt, auch den Zähler aktualisieren
        if (currentProjectImages.length > 1) {
            updateCounter();
        }
    }

    // Hilfsfunktion für den Zähler-Text
    function updateCounter() {
        imageCounter.innerText = `${currentImageIndex + 1} / ${currentProjectImages.length}`;
    }

    nextBtn.onclick = () => {
        currentImageIndex++;
        if (currentImageIndex >= currentProjectImages.length) currentImageIndex = 0; 
        updateModalImage();
    }

    prevBtn.onclick = () => {
        currentImageIndex--;
        if (currentImageIndex < 0) currentImageIndex = currentProjectImages.length - 1; 
        updateModalImage();
    }

    closeModalBtn.onclick = () => modal.close();
    
    modal.addEventListener('click', (event) => {
        const rect = modal.getBoundingClientRect();
        const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) modal.close();
    }); 
});