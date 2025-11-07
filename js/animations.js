// animations.js - GSAP animation timelines

// Hero text reveal animation
function animateHero() {
    const titleLines = document.querySelectorAll('.title-line');
    const subtitle = document.querySelector('.hero-subtitle');
    const buttons = document.querySelectorAll('.btn');

    // Stagger title lines
    gsap.set(titleLines, { opacity: 0, y: 30 });
    gsap.set(subtitle, { opacity: 0, y: 20 });
    gsap.set(buttons, { opacity: 0, y: 20 });

    const tl = gsap.timeline({ delay: 1 });

    tl.to(titleLines, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power4.out'
    })
    .to(subtitle, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power4.out'
    }, '-=0.3')
    .to(buttons, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power4.out'
    }, '-=0.3');
}

// Section fade-in animations
function animateSections() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        gsap.set(section, { opacity: 0, y: 50 });

        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
                gsap.to(section, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power4.out'
                });
            },
            onLeaveBack: () => {
                gsap.to(section, {
                    opacity: 0,
                    y: 50,
                    duration: 0.5,
                    ease: 'power2.in'
                });
            }
        });
    });
}

// Parallax background effect
function animateBackground() {
    const bgLayers = document.querySelectorAll('.bg-layer');

    bgLayers.forEach((layer, index) => {
        gsap.to(layer, {
            yPercent: -50 * (index + 1),
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

// Project cards hover animation
function animateProjectCards() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        const image = card.querySelector('.project-image');

        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                rotationY: 5,
                rotationX: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(image, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(image, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Skill cards hover glow
function animateSkillCards() {
    const cards = document.querySelectorAll('.skill-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                boxShadow: '0 20px 60px rgba(123, 92, 255, 0.3)',
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                boxShadow: '0 8px 32px rgba(123, 92, 255, 0.1)',
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Floating particle background
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        hero.appendChild(particle);
    }
}

function animateParticles() {
    const particles = document.querySelectorAll('.particle');

    particles.forEach(particle => {
        gsap.to(particle, {
            x: 'random(-100, 100)',
            y: 'random(-100, 100)',
            duration: 'random(3, 6)',
            ease: 'none',
            repeat: -1,
            yoyo: true
        });
    });
}

// Initialize all animations
function initAnimations() {
    createParticles();
    animateHero();
    animateSections();
    animateBackground();
    animateProjectCards();
    animateSkillCards();
    animateParticles();
}