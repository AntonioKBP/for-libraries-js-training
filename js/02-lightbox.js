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
      return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

function onPictureClick(event) {
  event.preventDefault();
  // console.log(event.target);
  if (event.target.tagName !== "IMG") return;

  // console.log(event.target);
  //   const instance = basicLightbox.create(
  //     `<img src=${event.target.dataset.source}>`
  //   );

  //   instance.show();
  //   window.addEventListener("keydown", onPress);
  //   function onPress(event) {
  //     // console.log(event);
  //     if (event.code === "Escape") {
  //       instance.close();
  //     }
  //   }
}
var lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});

// console.log(lightbox.closeOnOverlayClick);

// let gallery = new SimpleLightbox(".gallery__item");
// gallery.on("show.simplelightbox", function () {
//   // Do something…
// });
// {/* <script>
//     var lightbox = $('.gallery .col-md-6 .gallery-img a').simpleLightbox({
//         captionPosition: top
//     });
// </script> */}
