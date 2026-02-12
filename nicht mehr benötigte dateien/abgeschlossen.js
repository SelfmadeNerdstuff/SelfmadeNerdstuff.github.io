let currentImageIndex = 0;

const abgeschlosseneProjekte = images.filter(eintrag => eintrag.status === "abgeschlossen")

function renderImages() {
    const gallery = document.getElementById("galleryContainer");

    for (let i = 0; i < abgeschlosseneProjekte.length; i++) {
        const img = abgeschlosseneProjekte[i];
        gallery.innerHTML += `
        <div class="galleryItem" onclick="openModal(${i})">
            <img src="${img.image}" alt="${img.titel}">
        </div>
        `;
    }
}

function openModal(index) {
    let currentImage = abgeschlosseneProjekte[index]; 
    currentImageIndex = index;

    document.getElementById("imageCounter").innerText = `${index + 1} / ${abgeschlosseneProjekte.length}`;

    let titleElement = document.getElementById("dialogTitle");
    let imageElement = document.getElementById("fullSizeImage");
    let modal = document.getElementById("imageModal");

    titleElement.innerText = currentImage.titel;
    imageElement.src = currentImage.image;
    
    if (!modal.open) {
        modal.showModal(); 
    }
}

function closeModal() {
    let modal = document.getElementById("imageModal");
    modal.close();
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= abgeschlosseneProjekte.length) {
        currentImageIndex = 0; 
    }
    openModal(currentImageIndex);
}

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = abgeschlosseneProjekte.length - 1; 
    }
    openModal(currentImageIndex);
}  

document.addEventListener("keydown", function(e) {
    const modal = document.getElementById("imageModal");
    if (!modal.open) return;

    if (e.key === "ArrowLeft") {
        prevImage();
    }
    if (e.key === "ArrowRight") {
        nextImage();
    }
});

const modal = document.getElementById("imageModal");

modal.addEventListener("click", (event) => {
    const dialogDimensions = modal.getBoundingClientRect();

    if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
    ) {
        modal.close();
    }
});

document.getElementById("prevBtn").addEventListener("click", (e) => e.stopPropagation());
document.getElementById("nextBtn").addEventListener("click", (e) => e.stopPropagation());