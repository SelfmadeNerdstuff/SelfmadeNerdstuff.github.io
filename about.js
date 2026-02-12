document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. BILD SLIDER (RESIN PREVIEW)
       ========================================= */
    const imageTrack = document.getElementById('imageTrack');
    const imgNext = document.getElementById('imgNext');
    const imgPrev = document.getElementById('imgPrev');

    // 1a. Daten filtern (Resin & Abgeschlossen)
    // Wir nutzen 'images' aus data.js
    const resinProjects = images.filter(img => img.typ === 'resin' && img.status === 'abgeschlossen');

    // 1b. Bilder in den Slider einfügen
    if (resinProjects.length > 0) {
        resinProjects.forEach(projekt => {
            const imgEl = document.createElement('img');
            imgEl.src = projekt.image;
            imgEl.alt = projekt.titel;
            imgEl.className = 'preview-slide-img';
            imageTrack.appendChild(imgEl);
        });
    } else {
        // Fallback falls keine Resin Bilder da sind
        imageTrack.innerHTML = '<p style="color:white; padding:20px;">Keine Vorschau verfügbar.</p>';
    }

    // 1c. Slider Logik (Endlos scrollen simulieren)
    let imgIndex = 0;
    const imgWidth = 270; // 250px Bild + 20px Gap (aus CSS)
    
    // Automatisch weiterblättern alle 3 Sekunden
    let autoScroll = setInterval(() => {
        moveImages('next');
    }, 3000);

    function moveImages(direction) {
        const maxIndex = resinProjects.length - 1; // Ungefähr, je nach Breite
        
        if (direction === 'next') {
            imgIndex++;
            // Wenn wir am Ende sind, zurück zum Anfang (einfacher Loop)
            if (imgIndex > maxIndex) imgIndex = 0;
        } else {
            imgIndex--;
            if (imgIndex < 0) imgIndex = maxIndex;
        }

        const offset = -(imgIndex * imgWidth);
        imageTrack.style.transform = `translateX(${offset}px)`;
    }

    // Manuelle Pfeile (stoppen Autoplay kurz)
    imgNext.onclick = () => {
        clearInterval(autoScroll);
        moveImages('next');
        autoScroll = setInterval(() => moveImages('next'), 3000); // Neustart
    };

    imgPrev.onclick = () => {
        clearInterval(autoScroll);
        moveImages('prev');
        autoScroll = setInterval(() => moveImages('next'), 3000);
    };


    /* =========================================
       2. TEXT SLIDER (LAYOUTS)
       ========================================= */
    const slides = document.querySelectorAll('.text-slide');
    const textNext = document.getElementById('aboutNext');
    const textPrev = document.getElementById('aboutPrev');
    const dotsContainer = document.getElementById('sliderDots');

    let textIndex = 0;

    // Dots erstellen
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = index === 0 ? 'dot active' : 'dot';
        dot.onclick = () => goToTextSlide(index);
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateTextSlider() {
        // Alle ausblenden
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Aktuellen einblenden
        slides[textIndex].classList.add('active');
        dots[textIndex].classList.add('active');
    }

    function goToTextSlide(index) {
        textIndex = index;
        updateTextSlider();
    }

    textNext.onclick = () => {
        textIndex++;
        if (textIndex >= slides.length) textIndex = 0;
        updateTextSlider();
    }

    textPrev.onclick = () => {
        textIndex--;
        if (textIndex < 0) textIndex = slides.length - 1;
        updateTextSlider();
    }
});