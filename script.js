function showMessage() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    hiddenMessage.style.display = 'block';

    setTimeout(() => {
        const card = document.getElementById('card');
        const secondPage = document.getElementById('secondPage');
        card.style.display = 'none';
        secondPage.style.display = 'flex';
    }, 3000); // Show the hidden message for 3 seconds before switching to the second page
}

function showSlideshow() {
    const secondPage = document.getElementById('secondPage');
    const slideshowPage = document.getElementById('slideshowPage');
    secondPage.style.display = 'none';
    slideshowPage.style.display = 'flex';
    startSlideshow();
}

let slideIndex = 0;

function startSlideshow() {
    const slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    if (slideIndex === slides.length) {
        setTimeout(showFinalMessage, 3000); // Show final message after the last slide
    } else {
        setTimeout(startSlideshow, 3000); // Change image every 3 seconds
    }
}

function showFinalMessage() {
    const finalMessage = document.querySelector('.final-message');
    finalMessage.style.display = 'block';
}
