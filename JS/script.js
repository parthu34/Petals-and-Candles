document.addEventListener('DOMContentLoaded', function () {
    // Close Banner Button
    const closeBannerBtn = document.getElementById('close-banner');
    const smallBanner = document.getElementById('small-banner');

    if (closeBannerBtn && smallBanner) {
        closeBannerBtn.addEventListener('click', function () {
            smallBanner.style.display = 'none';
        });
    }

    // Terms and Conditions Modal
    const termsLink = document.getElementById('terms-link');
    const termsModal = document.getElementById('terms-modal');
    const closeModalBtn = document.getElementById('close-modal');

    if (termsLink && termsModal && closeModalBtn) {
        termsLink.addEventListener('click', function (e) {
            e.preventDefault();
            termsModal.style.display = 'block';
        });

        closeModalBtn.addEventListener('click', function () {
            termsModal.style.display = 'none';
        });

        window.addEventListener('click', function (e) {
            if (e.target == termsModal) {
                termsModal.style.display = 'none';
            }
        });
    }

    // Carousel Auto Scroll
    let currentIndex = 0;
    const carouselImages = document.querySelectorAll('.carousel img');
    const totalImages = carouselImages.length;

    function showNextImage() {
        if (carouselImages.length > 0) {
            carouselImages[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % totalImages;
            carouselImages[currentIndex].style.display = 'block';
        }
    }

    if (totalImages > 0) {
        carouselImages.forEach((img, index) => {
            img.style.display = index === 0 ? 'block' : 'none';
        });

        setInterval(showNextImage, 5000); // Change image every 5 seconds
    }
});
