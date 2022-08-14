import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery")
const modal = basicLightbox.create(
    `<img width="1400" height="900" src=""> `, {

	onShow: modal => {document.addEventListener('keydown', closeModal)},

	onClose: modal => {document.removeEventListener('keydown', closeModal)}
}
  );

const resizeImage = event => {
      if (event.target.nodeName !== "IMG") {
    return;
  }
    event.preventDefault()
  modal.element().querySelector('img').src = event.target.dataset.source;
  modal.show();
}


function closeModal(event){
  if (event.key === 'Escape') {
      modal.close()
    return;
    }
  
}


galleryEl.addEventListener('click', resizeImage)

const itemGallaryMarkup = createItemGallaryMarkup(galleryItems)
galleryEl.innerHTML = itemGallaryMarkup;

function createItemGallaryMarkup(items) {
    return items.map( ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
}

