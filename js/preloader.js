document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const letters = document.querySelectorAll('.loader .letter');

    // Make letters visible with delay
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('visible');
        }, index * 200);
    });

    // Remove preloader after animation
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1200);
});
