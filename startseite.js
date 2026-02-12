document.addEventListener('DOMContentLoaded', () => {
    
    const track = document.getElementById('randomTrack');

    if (!track) return; // Abbruch, falls Element nicht gefunden wird

    // 1. Alle abgeschlossenen Projekte holen (Resin & FDM)
    // Wir nutzen 'images' aus deiner data.js
    let finishedProjects = images.filter(img => img.status === 'abgeschlossen');

    // 2. Die Liste zufällig mischen (Fisher-Yates Shuffle Light)
    finishedProjects.sort(() => Math.random() - 0.5);

    // 3. Bilder in den Slider einfügen
    finishedProjects.forEach(projekt => {
        const img = document.createElement('img');
        img.src = projekt.image;
        img.alt = projekt.titel;
        img.className = 'preview-slide-img'; // Nutzt das CSS von der Über-mich-Seite
        
        // Optional: Klick macht das Modal auf (wie in der Galerie)
        // img.onclick = () => ... (könnte man später ergänzen)
        
        track.appendChild(img);
    });

    // 4. Automatische Slider-Logik
    let currentIndex = 0;
    const slideWidth = 264; // 250px Bildbreite + 20px Lücke (aus CSS)
    
    // Damit der Slider nicht ins Leere läuft, berechnen wir, wie viele Bilder sichtbar sind
    // Aber für eine einfache Endlos-Schleife reicht ein Reset:
    
    setInterval(() => {
        currentIndex++;
        
        // Wenn wir am Ende der Liste sind, springen wir sanft zurück zum Anfang
        // (Wir ziehen hier pauschal ab, damit rechts nicht plötzlich alles leer ist)
        if (currentIndex > finishedProjects.length - 4) { 
            currentIndex = 0;
        }

        const offset = -(currentIndex * slideWidth);
        track.style.transform = `translateX(${offset}px)`;
        
    }, 2500); // Alle 2.5 Sekunden weiterschalten
});