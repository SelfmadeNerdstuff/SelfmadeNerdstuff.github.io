document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.getElementById('planningContainer');
    const planningProjects = images.filter(img => img.status === 'planung');

    if (planningProjects.length === 0) {
        container.innerHTML = '<p style="color:white;">Aktuell ist die Warteschlange leer.</p>';
    } else {
        planningProjects.forEach((projekt, index) => {
            const card = document.createElement('div');
            card.className = 'project-card planning-card';
            
            card.onclick = () => openModal(index);

            const typText = projekt.typ ? projekt.typ.toUpperCase() : '';

            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${projekt.image}" 
                         alt="${projekt.titel}" 
                         loading="lazy" 
                         style="object-position: ${projekt.align || 'center'}">
                    <span class="material-bubble">${typText}</span>
                </div>
            `;
            container.appendChild(card);
        });
    }

    /* --- MODAL LOGIK --- */
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalType = document.getElementById('modalType');
    const modalCounter = document.getElementById('imageCounter');
    const closeModalBtn = document.getElementById('closeModal');
    
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let currentIndex = 0;

    window.openModal = function(index) {
        currentIndex = index;
        updateModalContent();
        modal.showModal();
    }

    function updateModalContent() {
        const projekt = planningProjects[currentIndex];

        modalImg.src = projekt.image;
        modalTitle.innerText = projekt.titel;
        
        if(projekt.typ) {
            modalType.style.display = "inline-block";
            modalType.innerText = projekt.typ.toUpperCase();
        } else {
            modalType.style.display = "none";
        }

        modalCounter.innerText = `${currentIndex + 1} / ${planningProjects.length}`;
    }

    nextBtn.onclick = () => {
        currentIndex++;
        if (currentIndex >= planningProjects.length) {
            currentIndex = 0;
        }
        updateModalContent();
    }

    prevBtn.onclick = () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = planningProjects.length - 1;
        }
        updateModalContent();
    }

    closeModalBtn.onclick = () => modal.close();
    
    modal.addEventListener('click', (event) => {
        const rect = modal.getBoundingClientRect();
        const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) modal.close();
    });
});