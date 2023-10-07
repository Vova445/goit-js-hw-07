import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  }).join("");
gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onGallery);
function onGallery(evt) {
  evt.preventDefault();
  if (evt.target.className !== "gallery__image") {
    return;
  } 
  else {
    const modal = basicLightbox.create(`
      <div class="modal">
        <img src=${evt.target.dataset.source} width="800" height="600">
      </div>
    `);
    modal.show();
    window.addEventListener("keydown", onModalKeydown);
    function onModalKeydown(evt) {
      if (evt.code === "Escape") {
       modal.close();
        window.removeEventListener("keydown", onModalKeydown);
      }
    }
  }
}
