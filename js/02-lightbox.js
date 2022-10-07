import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryMainDiv = document.querySelector(".gallery");
// console.log(galleryMainDiv);
const galleryMarkup = createGalleryMarkup(galleryItems);
console.log(galleryMarkup);

galleryMainDiv.insertAdjacentHTML("beforeend", galleryMarkup);
// galleryMainDiv.addEventListener("click", onPictureClick);
function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
