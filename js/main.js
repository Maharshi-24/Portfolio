// main.js - Main initialization file

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initLoader();
    initCursorGlow();
    initMagneticButtons();
    initSounds();
    initAnimations();
    initScroll();
});

// Loader initialization
function initLoader() {
    const loader = document.querySelector('.loader');
    const loaderText = document.querySelector('.loader-text');
    const mainContent = document.querySelector('.main-content');

    // Animate loader text
    gsap.to(loaderText, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });

    // Fade out loader after animation
    setTimeout(() => {
        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                loader.style.display = 'none';
                gsap.to(mainContent, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                });
            }
        });
    }, 3000);
}

// Cursor glow effect
function initCursorGlow() {
    const cursorGlow = document.querySelector('.cursor-glow');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursorGlow, {
            x: mouseX - 10,
            y: mouseY - 10,
            opacity: 1,
            duration: 0.1,
            ease: 'power2.out'
        });
    });

    // Hide cursor glow when mouse leaves window
    document.addEventListener('mouseleave', () => {
        gsap.to(cursorGlow, {
            opacity: 0,
            duration: 0.3
        });
    });
}

// Magnetic buttons effect
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

// Progress bar update
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-fill');
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    gsap.to(progressBar, {
        width: `${scrollPercent}%`,
        duration: 0.1,
        ease: 'none'
    });
}

window.addEventListener('scroll', updateProgressBar);