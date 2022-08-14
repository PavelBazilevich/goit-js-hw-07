import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery")

function createItemGallaryMarkup(items) {
    return items.map( ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join('');
};
galleryEl.innerHTML = createItemGallaryMarkup(galleryItems);

function oneClick(event) { event.preventDefault() };

galleryEl.addEventListener('click', oneClick);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "bottom", captionDelay: 250,});
  