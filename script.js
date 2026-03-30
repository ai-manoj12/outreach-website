function scrollGallery(direction) {
  const gallery = document.querySelector('.gallery');
  const slideWidth = gallery.clientWidth;
  gallery.scrollBy({
    left: direction * slideWidth,
    behavior: 'smooth'
  });
}
