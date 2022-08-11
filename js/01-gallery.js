import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryEl = document.querySelector(".gallery")


const resizeImage = event => {
      if (event.target.nodeName !== "IMG") {
    return;
  }
    event.preventDefault()
  const modal = basicLightbox.create(
    `<img width="1400" height="900" src="${event.target.dataset.source}"> `
  ).show();
    
}

const closeModal = event => {
    if (event.key !== 'Escape' && basicLightbox.visible()) {
    return;
    }
// ПЕРЕВІРКУ ЗРОБИВ ЗАЛИШИЛОСЬ ДОДАТИ ФУНКЦІОНАЛ ЗАКРИТТЯ ПО КНОПЦІ ЕСКЕЙП
    
     
console.log(event)
}


galleryEl.addEventListener('click', resizeImage)
galleryEl.addEventListener('keydown', closeModal)

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

