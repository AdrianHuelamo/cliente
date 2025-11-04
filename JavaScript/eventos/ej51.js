document.addEventListener('DOMContentLoaded', () => {

    const viewerContainer = document.getElementById('viewer-container');
    const mainImage = document.getElementById('main-image');
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    const thumbnails = document.querySelectorAll('.thumbnail');

    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.textAlign = 'center';

    viewerContainer.style.width = '600px';
    viewerContainer.style.height = '400px';
    viewerContainer.style.margin = '20px auto';
    viewerContainer.style.border = '2px solid #ccc';
    viewerContainer.style.backgroundColor = '#fff';
    viewerContainer.style.display = 'flex';
    viewerContainer.style.alignItems = 'center';
    viewerContainer.style.justifyContent = 'center';
    viewerContainer.style.overflow = 'hidden';

    mainImage.style.maxWidth = '100%';
    mainImage.style.maxHeight = '100%';

    thumbnailContainer.style.display = 'flex';
    thumbnailContainer.style.justifyContent = 'center';
    thumbnailContainer.style.gap = '15px';
    thumbnailContainer.style.padding = '10px';

    thumbnails.forEach(thumb => {
        
        thumb.style.width = '100px';
        thumb.style.height = '100px';
        thumb.style.objectFit = 'cover';
        thumb.style.border = '3px solid #ddd';
        thumb.style.borderRadius = '5px';
        thumb.style.cursor = 'pointer';
        thumb.style.transition = 'transform 0.2s ease';

        thumb.addEventListener('mouseover', () => {
            thumb.style.transform = 'scale(1.15)';
        });

        thumb.addEventListener('mouseout', () => {
            thumb.style.transform = 'scale(1)';
        });

        thumb.addEventListener('dblclick', () => {
            const fullImagePath = thumb.dataset.fullsrc;
            mainImage.src = fullImagePath;
        });
    });
});