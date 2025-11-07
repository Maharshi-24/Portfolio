// sounds.js - Sound effects management

// Sound files (placeholders - replace with actual .wav/.mp3 files)
const sounds = {
    hover: new Audio('sounds/hover.wav'),
    whoosh: new Audio('sounds/whoosh.wav'),
    click: new Audio('sounds/click.wav')
};

// Preload sounds
function preloadSounds() {
    Object.values(sounds).forEach(sound => {
        sound.preload = 'auto';
        sound.volume = 0.3; // Low volume
    });
}

// Play sound function
function playSound(soundName) {
    if (sounds[soundName]) {
        sounds[soundName].currentTime = 0; // Reset to start
        sounds[soundName].play().catch(e => {
            console.log('Sound play failed:', e);
        });
    }
}

// Initialize sound events
function initSounds() {
    preloadSounds();

    // Button hover sounds
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => playSound('hover'));
        btn.addEventListener('click', () => playSound('click'));
    });

    // Section transition sounds
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => playSound('whoosh')
        });
    });

    // Elements with data-sound attribute
    const soundElements = document.querySelectorAll('[data-sound]');
    soundElements.forEach(el => {
        const soundType = el.dataset.sound;
        el.addEventListener('click', () => playSound(soundType));
    });
}