document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. ZUFÄLLIGER BILDER-TRACK (Galerie-Vorschau)
    // =========================================
    const track = document.getElementById('randomTrack');

    if (track) {
        let finishedProjects = images.filter(img => img.status === 'abgeschlossen');
        finishedProjects.sort(() => Math.random() - 0.5);

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