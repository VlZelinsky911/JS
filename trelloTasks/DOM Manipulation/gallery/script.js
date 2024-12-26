const gallery = document.getElementById('gallery');
const addImageForm = document.getElementById('addImageForm');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
const prevButton = lightbox.querySelector('.prev');
const nextButton = lightbox.querySelector('.next');
const closeButton = lightbox.querySelector('.close');

let images = [];
let currentIndex = -1;

addImageForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const imageUrl = document.getElementById('imageUrl').value;
	const imageDescription = document.getElementById('imageDescription').value;

	images.push({ url: imageUrl, description: imageDescription});
	renderGallery();

	addImageForm.reset();
});

function renderGallery() {
    gallery.textContent = '';
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.description;
        img.addEventListener('click', () => openLightbox(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.addEventListener('click', () => deleteImage(index));

        item.appendChild(img);
        item.appendChild(deleteButton);
        gallery.appendChild(item);
    });
}


function deleteImage(index) {
    images.splice(index, 1);
    renderGallery();
}

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.style.display = 'flex';
}

function updateLightbox() {
    if (currentIndex >= 0 && currentIndex < images.length) {
        lightboxImage.src = images[currentIndex].url;
        lightboxImage.alt = images[currentIndex].description;
    }
}


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
});

closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
