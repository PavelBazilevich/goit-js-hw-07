import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery")

const resizeImage = event => {
      if (event.target.nodeName !== "IMG") {
    return;
  }
    event.preventDefault()
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt",
  captionPosition: "bottom",
        captionDelay: 250,
    });
}

galleryEl.addEventListener('click', resizeImage)

const itemGallaryMarkup = createItemGallaryMarkup(galleryItems)
galleryEl.innerHTML = itemGallaryMarkup;

function createItemGallaryMarkup(items) {
    return items.map( ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join('');
}