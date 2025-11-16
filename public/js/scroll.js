/* ========================================
   MINDPLANE Portfolio - Smooth Scroll
   Lenis.js Integration
   ======================================== */

let lenis;

function initSmoothScroll() {
  // OPTION 1: Native smooth scroll (FAST - NO DELAY)
  // Just use CSS scroll-behavior: smooth
  document.documentElement.style.scrollBehavior = 'smooth';

  // Handle anchor links with native smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  console.log('✅ Native smooth scroll initialized (no delay)');

  // OPTION 2: Lenis smooth scroll (CINEMATIC - HAS DELAY)
  // Uncomment below if you want the cinematic scroll effect
  /*
  lenis = new Lenis({
    duration: 0.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.2,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on('scroll', () => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.update();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: 0, duration: 1.5 });
      }
    });
  });

  console.log('✅ Lenis smooth scroll initialized');
  */
}

// Auto-initialize when DOM loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSmoothScroll);
} else {
  initSmoothScroll();
}

