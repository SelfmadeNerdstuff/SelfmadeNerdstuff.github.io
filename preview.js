document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Container holen
    const resinContainer = document.getElementById('resinPreview');
    const fdmContainer = document.getElementById('fdmPreview');

    // 2. Daten filtern (Nur abgeschlossene)
    // Wir nehmen an, die Liste ist schon sortiert. Falls nicht, könnte man .reverse() nutzen.
    // .slice(0, 3) nimmt nur die ersten 3 Elemente.
    const resinProjects = images.filter(img => img.typ === 'resin' && img.status === 'abgeschlossen').slice(0, 3);
    const fdmProjects = images.filter(img => img.typ === 'fdm' && img.status === 'abgeschlossen').slice(0, 3);

    // 3. Funktion zum Einfügen der Bilder
    function fillPreview(projects, container) {
        projects.forEach(projekt => {
            const img = document.createElement('img');
            img.src = projekt.image;
            img.alt = projekt.titel;
            img.className = 'preview-image'; 
        
        if (projekt.align) {
                img.style.objectPosition = projekt.align;
            }

            container.appendChild(img);
        });
    }

    // 4. Vorschauen befüllen
    if (resinContainer) fillPreview(resinProjects, resinContainer);
    if (fdmContainer) fillPreview(fdmProjects, fdmContainer);

});