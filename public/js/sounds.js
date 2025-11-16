/* ========================================
   MINDPLANE Portfolio - Audio Feedback
   Subtle sound interactions
   ======================================== */

let audioContext;
let soundBuffers = {};
let isAudioInitialized = false;

// Sound file paths (optional - graceful fallback if not present)
const SOUNDS = {
  hover: '/assets/sounds/hover.mp3',
  click: '/assets/sounds/click.mp3'
};

/* ===== INITIALIZE AUDIO CONTEXT ===== */
async function initAudio() {
  try {
    // Create audio context (requires user gesture)
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Preload sounds
    await Promise.all([
      loadSound('hover', SOUNDS.hover),
      loadSound('click', SOUNDS.click)
    ]);
    
    isAudioInitialized = true;
    console.log('✅ Audio system initialized');
  } catch (error) {
    console.log('ℹ️ Audio system not available (optional feature)');
  }
}

/* ===== LOAD SOUND FILE ===== */
async function loadSound(name, url) {
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    soundBuffers[name] = audioBuffer;
  } catch (error) {
    // Graceful fallback - sounds are optional
    console.log(`ℹ️ Sound "${name}" not loaded (optional)`);
  }
}

/* ===== PLAY SOUND ===== */
function playSound(type) {
  if (!isAudioInitialized || !soundBuffers[type]) {
    return; // Graceful fallback
  }
  
  try {
    const source = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();
    
    source.buffer = soundBuffers[type];
    gainNode.gain.value = 0.2; // Subtle volume
    
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    source.start(0);
  } catch (error) {
    // Silent fail - sounds are optional
  }
}

/* ===== ATTACH SOUND EVENTS ===== */
function attachSoundEvents() {
  // Throttle hover sounds to prevent spam
  let lastHoverTime = 0;
  const hoverThrottle = 100; // ms
  
  // Button hover sounds
  const interactiveElements = document.querySelectorAll('.btn, .project-card, .skill-item, .project-link');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      const now = Date.now();
      if (now - lastHoverTime > hoverThrottle) {
        playSound('hover');
        lastHoverTime = now;
      }
    });
    
    element.addEventListener('click', () => {
      playSound('click');
    });
  });
  
  // Form submit sound
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      playSound('click');
    });
  }
  
  // Scroll-to-top button
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      playSound('click');
    });
  }
}

/* ===== UNLOCK AUDIO ON USER GESTURE ===== */
function unlockAudio() {
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

// Unlock audio on first user interaction
document.addEventListener('click', unlockAudio, { once: true });
document.addEventListener('touchstart', unlockAudio, { once: true });

/* ===== EXPORT FUNCTIONS ===== */
window.initAudio = initAudio;
window.attachSoundEvents = attachSoundEvents;

