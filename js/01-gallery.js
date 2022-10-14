import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryMainDiv = document.querySelector(".gallery");
// console.log(galleryMainDiv);
const galleryMarkup = createGalleryMarkup(galleryItems);
// console.log(galleryMarkup);
galleryMainDiv.insertAdjacentHTML("beforeend", galleryMarkup);
galleryMainDiv.addEventListener("click", onPictureClick);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onPictureClick(event) {
  event.preventDefault();
  // console.log(event.target);
  if (event.target.tagName !== "IMG") return;

  // console.log(event.target);
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source}>`
  );

  instance.show();
  window.addEventListener("keydown", onPress);
  function onPress(event) {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();

      window.removeEventListener("keydown", onPress);
    }
  }
}
