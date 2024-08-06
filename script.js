function playButtonClickSound() {
    var buttonClickSound = document.getElementById('buttonClickSound');
    buttonClickSound.play();
    showHearts();
}

function showMessage() {
    playButtonClickSound();
    document.getElementById('card').style.display = 'none';
    document.getElementById('secondPage').style.display = 'flex';
    document.getElementById('backgroundMusic').play();
}

function showSlideshow() {
    playButtonClickSound();
    document.getElementById('secondPage').style.display = 'none';
    document.getElementById('slideshowPage').style.display = 'flex';
    slideIndex = 0; // Reset the slide index to 0
    showSlide(slideIndex); // Show the first slide
}

function showHearts() {
    var heartContainer = document.getElementById('heartContainer');
    heartContainer.innerHTML = ''; // Clear previous hearts
    for (let i = 0; i < 50; i++) { // Increased number of hearts
        var heart = document.createElement('div');
        heart.innerHTML = Math.random() < 0.33 ? '🤍' : Math.random() < 0.5 ? '🩷' : '💗';
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 0.5}s`;
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
}

let slideIndex = 0;
const totalSlides = document.getElementsByClassName('slide').length;

function showSlide(index) {
    let slides = document.getElementsByClassName('slide');
    let finalSlide = document.querySelector('.final-slide');

    // Hide all slides and the final message
    for (let slide of slides) {
        slide.style.display = 'none';
    }
    finalSlide.style.display = 'none';

    // Show the current slide
    if (index < totalSlides) {
        slides[index].style.display = 'block';
        document.getElementById('nextButton').style.display = 'block'; // Show the next button
    } else if (index === totalSlides) {
        finalSlide.style.display = 'block'; // Show the final slide
        document.getElementById('nextButton').style.display = 'none'; // Hide the next button on the final slide
    }

    showHearts(); // Show hearts on each slide change
}

function nextSlide() {
    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = totalSlides; // Ensure index does not exceed total slides
    }
    showSlide(slideIndex); // Show the next slide
}

// Show the form page
function showFormPage() {
    document.querySelector('.slideshow-page').style.display = 'none';
    document.getElementById('formPage').style.display = 'flex'; // Use 'flex' to match layout
}

// Event Listeners
document.getElementById('surpriseButton').addEventListener('click', showMessage);
document.getElementById('nextSurpriseButton').addEventListener('click', showSlideshow);
document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('giftButton').addEventListener('click', showFormPage);

// Initial setup
showSlide(slideIndex); // Ensure the first slide is displayed on load
