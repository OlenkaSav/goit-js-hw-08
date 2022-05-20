import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}).join('');
};

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery2 = new SimpleLightbox('.gallery a', {  captionDelay: 250, captionsData: "alt"});
gallery2.on('show.simplelightbox', function () {

});
console.log(galleryItems);
