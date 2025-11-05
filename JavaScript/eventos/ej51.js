document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnails img');

    thumbnails.forEach(img => {
      img.addEventListener('dblclick', () => {
        mainImage.src = img.dataset.full;
      });
    });
});