import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', openModal);
// galleryEl.addEventListener('click', onClickJustImage);
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

// function onClickJustImage(event) {
//   event.preventDefault();
//   const isImage = event.target.classList.contains('gallery__image');
//   if (!isImage) {
//     return;
//   }

//   console.log(isImage);
// }

function openModal(event) {
  event.preventDefault();
  const isImage = event.target.classList.contains('gallery__image');
  if (!isImage) {
    return;
  }

  // console.log(event.target.dataset.source);
  const imgOriginal = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imgOriginal}" width="800" height="600">
    `);
  instance.show(event);
  document.body.addEventListener(
    'keydown',
    event => {
      if (event.key === 'Escape') {
        instance.close();
        console.log(event.key);
      }
    },
    { once: true },
  );
}
