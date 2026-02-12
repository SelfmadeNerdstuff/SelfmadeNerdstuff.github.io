document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. BILD SLIDER (RESIN PREVIEW) - Automatisch
       ========================================= */
    const imageTrack = document.getElementById('imageTrack');

    if (imageTrack) {
        // 1a. Daten filtern (Resin & Abgeschlossen)
        const resinProjects = images.filter(img => img.typ === 'resin' && img.status === 'abgeschlossen');

        // 1b. Bilder in den Slider einfügen
        if (resinProjects.length > 0) {
            resinProjects.forEach(projekt => {
                const imgEl = document.createElement('img');
                imgEl.src = projekt.image;
                imgEl.alt = projekt.titel;
                imgEl.className = 'preview-slide-img';
                
                // Align beachten (wie auf der Startseite)
                if (projekt.align) {
                    imgEl.style.objectPosition = projekt.align;
                }

                imageTrack.appendChild(imgEl);
            });

            // 1c. Klonen für die Endlos-Animation (CSS Marquee)
            // Wir verdoppeln den Inhalt, damit keine Lücke entsteht
            const originalContent = imageTrack.innerHTML;
            imageTrack.innerHTML += originalContent;

        } else {
            imageTrack.innerHTML = '<p style="color:white; padding:20px;">Keine Vorschau verfügbar.</p>';
        }
    }


    /* =========================================
       2. TEXT SLIDER (LAYOUTS) - Manuell mit Pfeilen
       ========================================= */
    const slides = document.querySelectorAll('.text-slide');
    const textNext = document.getElementById('aboutNext');
    const textPrev = document.getElementById('aboutPrev');
    const dotsContainer = document.getElementById('sliderDots');

    if (slides.length > 0) {
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

        if (textNext) {
            textNext.onclick = () => {
                textIndex++;
                if (textIndex >= slides.length) textIndex = 0;
                updateTextSlider();
            }
        }

        if (textPrev) {
            textPrev.onclick = () => {
                textIndex--;
                if (textIndex < 0) textIndex = slides.length - 1;
                updateTextSlider();
            }
        }
    }
});