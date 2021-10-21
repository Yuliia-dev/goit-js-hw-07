import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', onClickJustImage);
galleryEl.addEventListener('click', openModal);

const markup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markup);

function createGalleryMarkup(images) {
  return images
    .map(
      image =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`,
    )
    .join('');
}

function onClickJustImage(event) {
  event.preventDefault();
  const isImage = event.target.classList.contains('gallery__image');
  if (!isImage) {
    return;
  }
}

function openModal(event) {
  const imgOriginal = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imgOriginal}" width="800" height="600">
    `);
  instance.show();
  document.body.addEventListener('keydown', event => {
    if (event.key === 'Escape') instance.close();
  });
}
