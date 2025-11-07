// scroll.js - Smooth scrolling and ScrollTrigger setup

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

// Lenis RAF loop
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Section background color shifts
function initSectionColors() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        const colors = [
            'rgba(15, 15, 18, 1)',
            'rgba(20, 15, 25, 1)',
            'rgba(15, 20, 30, 1)',
            'rgba(25, 15, 20, 1)'
        ];

        ScrollTrigger.create({
            trigger: section,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => {
                gsap.to('body', {
                    backgroundColor: colors[index % colors.length],
                    duration: 1,
                    ease: 'power2.inOut'
                });
            },
            onLeaveBack: () => {
                gsap.to('body', {
                    backgroundColor: index === 0 ? 'rgba(15, 15, 18, 1)' : colors[(index - 1) % colors.length],
                    duration: 1,
                    ease: 'power2.inOut'
                });
            }
        });
    });
}

// Split text animation for section titles
function initSplitText() {
    const titles = document.querySelectorAll('.section-title');

    titles.forEach(title => {
        const text = title.textContent;
        const chars = text.split('');

        title.innerHTML = chars.map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`).join('');

        const charsElements = title.querySelectorAll('.char');

        gsap.set(charsElements, { opacity: 0, y: 20 });

        ScrollTrigger.create({
            trigger: title,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(charsElements, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: 'power4.out'
                });
            }
        });
    });
}

// Initialize scroll-related features
function initScroll() {
    initSectionColors();
    initSplitText();
}