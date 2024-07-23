// Initialize Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js config loaded');
});

// Interactive Progress Bars
document.querySelectorAll('.progress-bar').forEach(bar => {
    const value = bar.getAttribute('data-value');
    bar.style.width = value;
});
