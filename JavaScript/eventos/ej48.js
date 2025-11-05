document.addEventListener("DOMContentLoaded", () => {
    const myBut = document.getElementById("first");
    const myBut2 = document.getElementById("second");
    const myBut3 = document.getElementById("third");
    const myButRandom = document.getElementById("random");

    const myImg = document.getElementById("iFirst");
    const myImg2 = document.getElementById("iSecond");
    const myImg3 = document.getElementById("iThird");
    
    const imageContainer = document.getElementById("image-container");

    function scrollToImage(imageElement) {
        if (imageElement) {
            imageElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.error("El elemento de la imagen no se encontró.");
        }
    }
    
    
    if (myBut) {
        myBut.addEventListener('click', () => {
            scrollToImage(document.getElementById("iFirst"));
        });
    }

    if (myBut2) {
        myBut2.addEventListener('click', () => {
            scrollToImage(document.getElementById("iSecond"));
        });
    }

    if (myBut3) {
        myBut3.addEventListener('click', () => {
            scrollToImage(document.getElementById("iThird"));
        });
    }

    
    if (myButRandom) {
        myButRandom.addEventListener('click', () => {
            
            const allImages = Array.from(imageContainer.children);

            for (let i = allImages.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                
                [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
            }

            allImages.forEach(image => {
                imageContainer.appendChild(image);
            });
        });
    }
});