// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========================================
// HAMBURGER MENU TOGGLE
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = this.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// ========================================
// DRESS CODE TOGGLE
// ========================================
const dressCodeBtn = document.getElementById('dressCodeBtn');
const dressCodeInfo = document.getElementById('dressCodeInfo');

if (dressCodeBtn && dressCodeInfo) {
    dressCodeBtn.addEventListener('click', function() {
        dressCodeInfo.classList.toggle('show');
    });
}

// ========================================
// SCROLL ANIMATIONS - Intersection Observer
// ========================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections (except hero)
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Add smooth parallax effect to city section
window.addEventListener('scroll', () => {
    const citySection = document.querySelector('.section-city');
    if (citySection) {
        const scrolled = window.pageYOffset;
        const cityOffset = citySection.offsetTop;
        const cityHeight = citySection.offsetHeight;
        
        if (scrolled > cityOffset - window.innerHeight && scrolled < cityOffset + cityHeight) {
            const parallaxSpeed = (scrolled - cityOffset + window.innerHeight) * 0.5;
            citySection.style.backgroundPositionY = parallaxSpeed + 'px';
        }
    }
});

// ========================================
// RSVP FORM INTERACTIVITY
// ========================================

// Show/hide guests field based on attendance selection with animation
const attendingRadios = document.querySelectorAll('input[name="attending"]');
const guestsGroup = document.getElementById('guestsGroup');
const guestNamesGroup = document.getElementById('guestNamesGroup');

if (attendingRadios.length > 0) {
    attendingRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'yes') {
                guestsGroup.style.display = 'block';
                document.getElementById('guests').required = true;
                
                // Add sparkle effect
                const card = this.closest('.attendance-card');
                createSparkles(card);
            } else {
                guestsGroup.style.display = 'none';
                guestNamesGroup.style.display = 'none';
                document.getElementById('guests').required = false;
            }
        });
    });
}

// Create sparkle effect for card selection
function createSparkles(element) {
    const sparkles = ['✨', '⭐', '💫', '✦'];
    for (let i = 0; i < 3; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
        element.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Add sparkle animation CSS dynamically
if (!document.getElementById('sparkle-styles')) {
    const style = document.createElement('style');
    style.id = 'sparkle-styles';
    style.textContent = `
        @keyframes sparkleFloat {
            0% {
                opacity: 1;
                transform: translateY(0) scale(0);
            }
            50% {
                opacity: 1;
                transform: translateY(-20px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-40px) scale(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Show guest names field when number of guests changes
const guestsSelect = document.getElementById('guests');
if (guestsSelect) {
    guestsSelect.addEventListener('change', function() {
        if (this.value && parseInt(this.value) > 1) {
            guestNamesGroup.style.display = 'block';
        } else {
            guestNamesGroup.style.display = 'none';
        }
    });
}

// Add focus animation to form inputs
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// Form submission handler
const rsvpForm = document.getElementById('rsvpForm');
const successMessage = document.getElementById('successMessage');

if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(rsvpForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Log the data (in a real application, this would be sent to a server)
        console.log('RSVP Data:', data);
        
        // Store in localStorage for demonstration
        const rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
        rsvps.push({
            ...data,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('rsvps', JSON.stringify(rsvps));
        
        // Show success message with animation
        const formContainer = document.querySelector('.form-container');
        formContainer.style.opacity = '0';
        formContainer.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            rsvpForm.style.display = 'none';
            successMessage.style.display = 'block';
            formContainer.style.opacity = '1';
            formContainer.style.transform = 'translateY(0)';
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Trigger confetti celebration after scroll
            setTimeout(() => {
                if (typeof confetti !== 'undefined') {
                    // Big celebration confetti burst
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#d4a574', '#8b7355', '#f4e8d8', '#FFD700', '#FFF']
                    });
                    setTimeout(() => {
                        confetti({
                            particleCount: 50,
                            angle: 60,
                            spread: 55,
                            origin: { x: 0, y: 0.6 },
                            colors: ['#d4a574', '#8b7355', '#f4e8d8', '#FFD700', '#FFF']
                        });
                    }, 200);
                    setTimeout(() => {
                        confetti({
                            particleCount: 50,
                            angle: 120,
                            spread: 55,
                            origin: { x: 1, y: 0.6 },
                            colors: ['#d4a574', '#8b7355', '#f4e8d8', '#FFD700', '#FFF']
                        });
                    }, 400);
                }
            }, 500);
        }, 300);
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Legacy animation code removed - now handled by CSS animations and Intersection Observer above

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Floating Wedding Rings Animation
function initFloatingRings() {
    const canvas = document.getElementById('rings');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const rings = Array.from({ length: 8 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 15 + Math.random() * 10,
        speed: 0.2 + Math.random() * 0.5,
        angle: Math.random() * Math.PI * 2,
        opacity: 0.1 + Math.random() * 0.2
    }));

    function drawRings() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        rings.forEach(r => {
            r.y += r.speed;
            r.x += Math.sin(r.angle) * 0.3;
            r.angle += 0.01;
            if (r.y > canvas.height + r.size) {
                r.y = -r.size;
                r.x = Math.random() * canvas.width;
            }
            
            // Draw two interlocking rings
            ctx.strokeStyle = `rgba(212, 165, 116, ${r.opacity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(r.x, r.y, r.size, 0, Math.PI * 2);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.arc(r.x + r.size * 0.8, r.y, r.size, 0, Math.PI * 2);
            ctx.stroke();
        });
        requestAnimationFrame(drawRings);
    }
    drawRings();
    
    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Fade-in Observer for Sections
function initFadeInObserver() {
    const fadeInObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        fadeInObserver.observe(el);
    });
}

// Confetti Animation for RSVP Buttons
function initConfetti() {
    // Only trigger confetti on the main RSVP CTA button on the homepage
    const rsvpButton = document.querySelector('.rsvp-confetti-btn');
    
    if (rsvpButton) {
        rsvpButton.addEventListener('click', function(e) {
            triggerConfetti();
        });
    }
}

function triggerConfetti() {
    if (typeof confetti === 'undefined') return;
    
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
        startVelocity: 30, 
        spread: 360, 
        ticks: 60, 
        zIndex: 9999,
        gravity: 1,
        decay: 0.94
    };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        
        // Use wedding colors for confetti - shoot from bottom center
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: 0.5, y: 0.8 },
            colors: ['#d4a574', '#8b7355', '#f4e8d8', '#FFD700', '#FFF', '#f093fb']
        }));
    }, 250);
}

// Initialize all animations when page loads
window.addEventListener('load', function() {
    initFloatingRings();
    initFadeInObserver();
    initConfetti();
});
