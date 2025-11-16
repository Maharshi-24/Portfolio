/* ========================================
   MINDPLANE Portfolio - Main Initialization
   Orchestrates all modules
   ======================================== */

console.log('🚀 MINDPLANE Portfolio Loading...');

/* ===== MAIN INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', () => {
  console.log('📦 DOM Content Loaded');
  
  // Initialize in sequence
  initializeApp();
});

async function initializeApp() {
  try {
    // 1. Initialize smooth scroll (from scroll.js)
    if (typeof initSmoothScroll !== 'undefined') {
      // Already initialized in scroll.js
      console.log('✅ Smooth scroll ready');
    }
    
    // 2. Initialize audio system (optional, non-blocking)
    if (typeof initAudio !== 'undefined') {
      initAudio().catch(() => {
        console.log('ℹ️ Audio features disabled');
      });
    }
    
    // 3. Start loader animation
    if (typeof animateLoader !== 'undefined') {
      animateLoader();
    }
    
    // 4. Initialize navbar behavior immediately
    if (typeof initNavbarBehavior !== 'undefined') {
      initNavbarBehavior();
    }

    // 5. Initialize scroll animations after loader (reduced time)
    setTimeout(() => {
      if (typeof initScrollAnimations !== 'undefined') {
        initScrollAnimations();
      }

      if (typeof initMicroInteractions !== 'undefined') {
        initMicroInteractions();
      }

      if (typeof attachSoundEvents !== 'undefined') {
        attachSoundEvents();
      }
    }, 2000); // Reduced from 3000ms

    // 6. Setup form handler
    setupContactForm();

    // 7. Setup scroll-to-top button
    setupScrollToTop();
    
    console.log('✅ App initialized successfully');
  } catch (error) {
    console.error('❌ Initialization error:', error);
  }
}

/* ===== CONTACT FORM HANDLER ===== */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    
    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Log form data (replace with actual submission logic)
    console.log('📧 Form submitted:', formData);
    
    // Show success message
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ Message Sent!';
    submitBtn.style.backgroundColor = '#10b981';
    
    // Reset form
    setTimeout(() => {
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.style.backgroundColor = '';
    }, 3000);
    
    // TODO: Replace with actual form submission
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
  });
  
  console.log('✅ Contact form initialized');
}

/* ===== EMAIL VALIDATION ===== */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* ===== SCROLL TO TOP BUTTON ===== */
function setupScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-top');
  
  if (!scrollTopBtn) return;
  
  // Show/hide based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });
  
  console.log('✅ Scroll-to-top button initialized');
}

/* ===== PERFORMANCE MONITORING ===== */
window.addEventListener('load', () => {
  // Log performance metrics
  if (window.performance && window.performance.timing) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
  }
});

/* ===== ERROR HANDLING ===== */
window.addEventListener('error', (e) => {
  console.error('❌ Runtime error:', e.error);
});

/* ===== PREVENT CONSOLE SPAM ===== */
// Suppress GSAP warnings in production
if (typeof gsap !== 'undefined') {
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false
  });
}

console.log('✅ Main script loaded');

