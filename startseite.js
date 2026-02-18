document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. ZUFÄLLIGER BILDER-TRACK (Galerie-Vorschau)
    // =========================================
    const track = document.getElementById('randomTrack');

    if (track) {
        // 1. Alle abgeschlossenen Projekte holen
        let finishedProjects = images.filter(img => img.status === 'abgeschlossen');

        // 2. Zufällig mischen
        finishedProjects.sort(() => Math.random() - 0.5);

        // 3. Bilder einfügen
        finishedProjects.forEach(projekt => {
            const img = document.createElement('img');
            img.src = projekt.image;
            img.alt = projekt.titel;
            img.className = 'preview-slide-img'; 
            
            if (projekt.align) {
                img.style.objectPosition = projekt.align;
            }
            track.appendChild(img);
        });

        // 4. Klonen für die flüssige CSS-Endlos-Animation
        const originalContent = track.innerHTML;
        track.innerHTML += originalContent;
    }

    // =========================================
    // 2. KUNDENREZENSIONEN SLIDER (Testimonials)
    // =========================================
    const testiSlides = document.querySelectorAll('.testimonial-slide');
    const testiNext = document.getElementById('testiNext');
    const testiPrev = document.getElementById('testiPrev');

    if (testiSlides.length > 0) {
        let testiIndex = 0;

        function updateTestiSlider() {
            testiSlides.forEach(slide => slide.classList.remove('active'));
            testiSlides[testiIndex].classList.add('active');
        }

        if (testiNext) {
            testiNext.onclick = () => {
                testiIndex++;
                if (testiIndex >= testiSlides.length) testiIndex = 0;
                updateTestiSlider();
            };
        }

        if (testiPrev) {
            testiPrev.onclick = () => {
                testiIndex--;
                if (testiIndex < 0) testiIndex = testiSlides.length - 1;
                updateTestiSlider();
            };
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // REZENSIONEN ZUFÄLLIG MISCHEN
    // =========================================
    const sliderContent = document.querySelector('.testimonial-slider-content');
    
    if (sliderContent) {
        // Alle einzelnen Rezensionen suchen und in eine Liste (Array) packen
        const slides = Array.from(sliderContent.querySelectorAll('.testimonial-slide'));

        // Die Liste zufällig mischen (Fisher-Yates Algorithmus)
        for (let i = slides.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [slides[i], slides[j]] = [slides[j], slides[i]];
        }

        // Die gemischten Elemente neu in den Container packen
        slides.forEach((slide, index) => {
            // Zuerst bei allen die Sichtbarkeit (Klasse 'active') entfernen
            slide.classList.remove('active'); 
            
            // Element an der neuen, zufälligen Position wieder einfügen
            sliderContent.appendChild(slide); 
            
            // Nur dem allerersten Element der neuen Liste die 'active' Klasse geben, damit es angezeigt wird
            if (index === 0) {
                slide.classList.add('active'); 
            }
        });
    }
});