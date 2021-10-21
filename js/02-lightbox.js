import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', onClickJustImage);
galleryEl.addEventListener('click', openModal);

const markup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markup);

function createGalleryMarkup(images) {
  return images
    .map(
      image =>
        `<a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>`,
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

function openModal() {
  let lightbox = new SimpleLightbox('.gallery a');

  lightbox.on('show.simplelightbox');
}
