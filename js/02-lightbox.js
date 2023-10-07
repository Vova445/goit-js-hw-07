import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

//створюємо всі картки
const markup = galleryItems .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />    
    </a>
  </li>`;
  }).join("");
gallery.insertAdjacentHTML("beforeend", markup);

const simpleLightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});