import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  // do something…
});

gallery.on("error.simplelightbox", function (e) {
  console.log(e); // some usefull information
});

// with jQuery nearly the same
let gallery = $(".gallery a").simpleLightbox();
gallery.on("show.simplelightbox", function () {
  // do something…
});
