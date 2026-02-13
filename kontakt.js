// =========================================
// KONTAKTFORMULAR LOGIK (Web3Forms)
// =========================================

const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

// Wir prüfen erst, ob das Formular auf der Seite existiert (Sicherheitscheck)
if (contactForm) {

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Stoppt das normale Neuladen der Seite

        // 1. Feedback geben: Button ändern & sperren
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Wird gesendet...";
        submitBtn.style.opacity = "0.7";
        submitBtn.disabled = true;

        // 2. Daten sammeln
        const formData = new FormData(contactForm);

        try {
            // 3. Daten im Hintergrund senden (AJAX an Web3Forms)
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                // ERFOLG:
                contactForm.reset();            // Formular leeren
                submitBtn.style.display = 'none'; // Button weg
                successMessage.style.display = 'block'; // Text da
            } else {
                // Fehler vom Server (z.B. falscher Key)
                alert("Hoppla, da gab es ein Problem beim Senden: " + data.message);
                resetButton(originalText);
            }
        } catch (error) {
            // Netzwerkfehler (z.B. kein Internet)
            console.error('Fehler:', error);
            alert("Verbindungsfehler. Bitte prüfe deine Internetverbindung.");
            resetButton(originalText);
        }
    });

    // Hilfsfunktion: Button wiederherstellen, falls was schiefgeht
    function resetButton(text) {
        submitBtn.innerText = text || "Absenden";
        submitBtn.style.display = 'inline-block'; // Sicherstellen, dass er sichtbar ist
        submitBtn.style.opacity = "1";
        submitBtn.disabled = false;
    }
}