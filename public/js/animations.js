/* ========================================
   MINDPLANE Portfolio - GSAP Animations
   Motion over decoration
   ======================================== */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation easings
const EASINGS = {
  smooth: "power3.out",
  snappy: "back.out(1.7)",
  elastic: "elastic.out(1, 0.5)",
  loader: "power4.inOut"
};

/* ===== LOADER ANIMATION ===== */
function animateLoader() {
  const loader = document.getElementById('loader');
  const words = document.querySelectorAll('.loader-text .word');

  // If no words found, skip loader and go straight to hero
  if (words.length === 0) {
    loader.style.display = 'none';
    animateHero();
    animateNavbar();
    return;
  }

  const tl = gsap.timeline({
    onComplete: () => {
      // Hide loader and trigger hero animation
      gsap.to(loader, {
        opacity: 0,
        duration: 0.5,
        ease: EASINGS.loader,
        onComplete: () => {
          loader.style.display = 'none';
          animateHero();
          animateNavbar();
        }
      });
    }
  });

  // Animate each word
  tl.to(words, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: EASINGS.smooth,
    delay: 0.2
  })
  .to(words, {
    opacity: 1,
    duration: 0.8  // Reduced from 1.5s
  });

  console.log('✅ Loader animation started');
}

/* ===== NAVBAR ANIMATION ===== */
function animateNavbar() {
  const navbar = document.getElementById('navbar');
  const navLogo = document.querySelector('.nav-logo');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navbar) return;

  // Initial state
  gsap.set(navbar, { y: -100, opacity: 0 });
  gsap.set(navLogo, { opacity: 0, x: -20 });
  gsap.set(navLinks, { opacity: 0, y: -10 });

  // Animate in
  const tl = gsap.timeline();
  tl.to(navbar, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: EASINGS.smooth
  })
  .to(navLogo, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    ease: EASINGS.smooth
  }, "-=0.3")
  .to(navLinks, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.08,
    ease: EASINGS.smooth
  }, "-=0.3");

  console.log('✅ Navbar animation completed');
}

/* ===== HERO ANIMATION ===== */
function animateHero() {
  const heroElements = [
    '#hero h1',
    '#hero h2',
    '#hero .subtitle',
    '#hero .cta-buttons'
  ];

  gsap.to(heroElements, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: EASINGS.smooth
  });

  console.log('✅ Hero animation completed');
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnimations() {
  // Animate all sections with data-scroll attribute
  const scrollElements = document.querySelectorAll('[data-scroll]');
  
  scrollElements.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: EASINGS.smooth
        });
      }
    });
  });

  // Skills grid stagger animation
  const skillItems = document.querySelectorAll('.skill-item');
  if (skillItems.length > 0) {
    ScrollTrigger.create({
      trigger: '.skills-grid',
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(skillItems, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: EASINGS.smooth
        });
      }
    });
  }

  // Projects grid stagger animation
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length > 0) {
    ScrollTrigger.create({
      trigger: '.projects-grid',
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(projectCards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: EASINGS.smooth
        });
      }
    });
    
    // Set initial state
    gsap.set(projectCards, { opacity: 0, y: 30, scale: 0.95 });
  }

  // Timeline line animation
  const timelineLine = document.getElementById('timeline-line');
  if (timelineLine) {
    ScrollTrigger.create({
      trigger: '.timeline',
      start: "top 70%",
      end: "bottom 30%",
      onEnter: () => {
        gsap.to(timelineLine, {
          height: '100%',
          duration: 1.5,
          ease: EASINGS.smooth
        });
      }
    });
  }

  // Timeline entries stagger
  const timelineEntries = document.querySelectorAll('.timeline-entry');
  if (timelineEntries.length > 0) {
    ScrollTrigger.create({
      trigger: '.timeline',
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.to(timelineEntries, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: EASINGS.smooth
        });
      }
    });
    
    // Set initial state
    gsap.set(timelineEntries, { opacity: 0, x: -20 });
  }

  console.log('✅ Scroll animations initialized');
}

/* ===== NAVBAR SCROLL BEHAVIOR ===== */
function initNavbarBehavior() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!navbar) return;

  let lastScroll = 0;

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for background change
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  console.log('✅ Navbar behavior initialized');
}

/* ===== MICRO-INTERACTIONS ===== */
function initMicroInteractions() {
  // Button hover effects
  const buttons = document.querySelectorAll('.btn, .project-card, .skill-item');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.02,
        duration: 0.3,
        ease: EASINGS.snappy
      });
    });
    
    button.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: EASINGS.smooth
      });
    });
    
    // Click compress effect
    button.addEventListener('mousedown', function() {
      gsap.to(this, {
        scale: 0.98,
        duration: 0.15,
        ease: EASINGS.smooth
      });
    });
    
    button.addEventListener('mouseup', function() {
      gsap.to(this, {
        scale: 1.02,
        duration: 0.3,
        ease: EASINGS.snappy
      });
    });
  });

  // Form input focus effects
  const inputs = document.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      gsap.to(this, {
        scale: 1.01,
        duration: 0.3,
        ease: EASINGS.smooth
      });
    });
    
    input.addEventListener('blur', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: EASINGS.smooth
      });
    });
  });

  // Scroll-to-top button visibility
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    ScrollTrigger.create({
      start: 'top -500',
      end: 99999,
      toggleClass: { className: 'visible', targets: scrollTopBtn }
    });
    
    scrollTopBtn.addEventListener('click', () => {
      if (typeof lenis !== 'undefined') {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  console.log('✅ Micro-interactions initialized');
}

/* ===== EXPORT FUNCTIONS ===== */
// These functions are called from main.js
window.animateLoader = animateLoader;
window.animateNavbar = animateNavbar;
window.initScrollAnimations = initScrollAnimations;
window.initMicroInteractions = initMicroInteractions;
window.initNavbarBehavior = initNavbarBehavior;

