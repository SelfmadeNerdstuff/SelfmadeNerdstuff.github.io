// =========================================
// KONTAKTFORMULAR LOGIK
// =========================================

const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

// Wir prüfen erst, ob das Formular auf der Seite existiert (Sicherheitscheck)
if (contactForm) {

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stoppt das normale Neuladen der Seite

        // 1. Feedback geben: Button ändern & sperren
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Wird gesendet...";
        submitBtn.style.opacity = "0.7";
        submitBtn.disabled = true;

        // 2. Daten sammeln
        const formData = new FormData(contactForm);

        // 3. Daten im Hintergrund senden (AJAX)
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                // ERFOLG:
                contactForm.reset();            // Formular leeren
                submitBtn.style.display = 'none'; // Button weg
                successMessage.style.display = 'block'; // Text da
            } else {
                // Fehler vom Server (z.B. Spam-Schutz)
                alert("Hoppla, da gab es ein Problem beim Senden. Bitte versuche es später nochmal.");
                resetButton(originalText);
            }
        })
        .catch(error => {
            // Netzwerkfehler (z.B. kein Internet)
            console.error('Fehler:', error);
            alert("Verbindungsfehler. Bitte prüfe deine Internetverbindung.");
            resetButton(originalText);
        });
    });

    // Hilfsfunktion: Button wiederherstellen, falls was schiefgeht
    function resetButton(text) {
        submitBtn.innerText = text || "Absenden";
        submitBtn.style.display = 'inline-block'; // Sicherstellen, dass er sichtbar ist
        submitBtn.style.opacity = "1";
        submitBtn.disabled = false;
    }
}