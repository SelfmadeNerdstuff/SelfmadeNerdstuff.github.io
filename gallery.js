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
        // Daten vorbereiten
        const dauerText = projekt.dauer ? `<img src="./img/sanduhr.png" class="sanduhr-icon" alt="Dauer"> ${projekt.dauer}` : '';
        const description = projekt.introText ? projekt.introText : "Keine Beschreibung verfügbar.";
        
        // Alle Bilder sammeln (Hauptbild + Galerie)
        const allImages = [projekt.image];
        if (projekt.galerie && projekt.galerie.length > 0) {
            projekt.galerie.forEach(imgUrl => allImages.push(imgUrl));
        }

        // Karte bauen
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Klick auf die GANZE Karte öffnet Modal (nur Desktop)
        card.onclick = (e) => openModal(index);

        // HTML Struktur
        let imageHtml = `<img src="${allImages[0]}" alt="${projekt.titel}" class="card-main-img" style="object-position: ${projekt.align || 'center'}">`;
        
        // Wenn mehr als 1 Bild -> Pfeile hinzufügen
        if (allImages.length > 1) {
            imageHtml += `
                <button class="card-arrow prev"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="card-arrow next"><i class="fa-solid fa-chevron-right"></i></button>
            `;
        }

        card.innerHTML = `
            <div class="card-header-bar">
                <span class="card-name">${projekt.titel}</span>
                <span class="card-time">${dauerText}</span>
            </div>
            <div class="card-image-wrapper">
                ${imageHtml}
            </div>
            <div class="mobile-description">
                ${description}
            </div>
        `;

        // Event Listener für Mini-Slider (nur wenn Pfeile da sind)
        if (allImages.length > 1) {
            const imgElement = card.querySelector('.card-main-img');
            const prevBtn = card.querySelector('.prev');
            const nextBtn = card.querySelector('.next');
            let currentImgIndex = 0;

            // Funktion zum Bildwechseln
            const switchImage = (direction) => {
                if (direction === 'next') {
                    currentImgIndex++;
                    if (currentImgIndex >= allImages.length) currentImgIndex = 0;
                } else {
                    currentImgIndex--;
                    if (currentImgIndex < 0) currentImgIndex = allImages.length - 1;
                }
                imgElement.src = allImages[currentImgIndex];
            };

            // Klick-Events (stopPropagation ist WICHTIG, damit nicht das Modal aufgeht!)
            nextBtn.onclick = (e) => {
                e.stopPropagation(); 
                switchImage('next');
            };

            prevBtn.onclick = (e) => {
                e.stopPropagation();
                switchImage('prev');
            };
        }

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
    const imageCounter = document.getElementById('imageCounter');
    const nextBtn = document.querySelector('.slider-btn.next'); // Selektor angepasst für Modal-Buttons
    const prevBtn = document.querySelector('.slider-btn.prev');

    let currentProjectImages = [];
    let currentImageIndex = 0;

    window.openModal = function(index) {
        // Wenn Bildschirm kleiner als 768px, Modal NICHT öffnen!
        if (window.innerWidth <= 768) {
            return;
        }

        const projekt = visibleProjects[index];

        // Bilder-Liste bauen
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

        if (currentProjectImages.length > 1) {
            nextBtn.style.display = "flex"; 
            prevBtn.style.display = "flex";
            imageCounter.style.display = "block"; 
            updateCounter(); 
        } else {
            nextBtn.style.display = "none";
            prevBtn.style.display = "none";
            imageCounter.style.display = "none"; 
        }

        updateModalImage();
        modal.showModal();
    }

    function updateModalImage() {
        modalImg.src = currentProjectImages[currentImageIndex];
        if (currentProjectImages.length > 1) {
            updateCounter();
        }
    }

    function updateCounter() {
        imageCounter.innerText = `${currentImageIndex + 1} / ${currentProjectImages.length}`;
    }

    // Modal Navigation
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