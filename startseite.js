document.addEventListener('DOMContentLoaded', () => {
    
    const track = document.getElementById('randomTrack');

    if (!track) return; // Abbruch, falls Element nicht gefunden wird

    // 1. Alle abgeschlossenen Projekte holen (Resin & FDM)
    let finishedProjects = images.filter(img => img.status === 'abgeschlossen');

    // 2. Die Liste zufällig mischen
    finishedProjects.sort(() => Math.random() - 0.5);

    // 3. Bilder in den Slider einfügen
    finishedProjects.forEach(projekt => {
        const img = document.createElement('img');
        img.src = projekt.image;
        img.alt = projekt.titel;
        img.className = 'preview-slide-img'; 
        
        // HIER WAR DAS PROBLEM: Der Align-Befehl fehlte.
        // Jetzt prüfen wir: Hat das Bild eine Ausrichtung (z.B. 'top')?
        if (projekt.align) {
            img.style.objectPosition = projekt.align;
        }
        
        track.appendChild(img);
    });

    // 4. Automatische Slider-Logik (Klonen für flüssigen Endlos-Effekt)
    // Wir klonen die Bilder, damit der Slider niemals "leer" läuft
    const originalContent = track.innerHTML;
    track.innerHTML += originalContent;

});