document.addEventListener("DOMContentLoaded", () => {
    const myBut = document.getElementById("first");
    const myBut2 = document.getElementById("second");
    const myBut3 = document.getElementById("third");
    const myButRandom = document.getElementById("random");

    const myImg = document.getElementById("iFirst");
    const myImg2 = document.getElementById("iSecond");
    const myImg3 = document.getElementById("iThird");

    const allImages = [myImg, myImg2, myImg3];

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
            scrollToImage(myImg);
        });
    }

    if (myBut2) {
        myBut2.addEventListener('click', () => {
            scrollToImage(myImg2);
        });
    }

    if (myBut3) {
        myBut3.addEventListener('click', () => {
            scrollToImage(myImg3);
        });
    }

    if (myButRandom) {
        myButRandom.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * allImages.length);
            scrollToImage(allImages[randomIndex]);
        });
    }
});