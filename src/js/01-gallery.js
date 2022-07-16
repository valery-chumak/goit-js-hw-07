import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems.map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');
gallery.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

gallery.addEventListener('click', onGalleryClick);
let instance;
function onGalleryClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    } else {
        const dataSource = event.target.dataset.source;
        instance = basicLightbox.create(`<img src="${dataSource}">`);
        instance.show();
        window.addEventListener("keydown", onEscapeButtonPress);
    }
    function onEscapeButtonPress(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
}

console.log(galleryItems);
