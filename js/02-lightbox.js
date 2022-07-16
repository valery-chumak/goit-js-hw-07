import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems.map(item => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join('');
gallery.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    } else {
        const dataSource = event.target.dataset.source;
    }
}
var lightbox = new SimpleLightbox('.gallery__item', { 
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: 'bottom',
    captionDelay: 250
});
console.log(galleryItems);
