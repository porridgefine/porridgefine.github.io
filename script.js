// ========================================
// Language Toggle Functionality
// ========================================

let currentLang = 'en'; // Default language is English

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has a saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        if (currentLang === 'zh') {
            switchToLanguage('zh');
        }
    }
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Toggle between English and Chinese
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    switchToLanguage(currentLang);
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', currentLang);
}

// Switch to specified language
function switchToLanguage(lang) {
    const langIcon = document.getElementById('langIcon');
    const langText = document.getElementById('langText');
    
    // Update button text and icon
    if (lang === 'zh') {
        langIcon.textContent = '🇬🇧';
        langText.textContent = 'English';
    } else {
        langIcon.textContent = '🇨🇳';
        langText.textContent = '中文';
    }
    
    // Update all elements with data-en and data-zh attributes
    const elements = document.querySelectorAll('[data-en][data-zh]');
    elements.forEach(element => {
        const text = lang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-zh');
        element.textContent = text;
    });
    
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
}

// ========================================
// Smooth Animations on Scroll
// ========================================

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// ========================================
// Easter Egg: Dino Click Animation
// ========================================

const profileIcon = document.querySelector('.profile-icon');
if (profileIcon) {
    let clickCount = 0;
    profileIcon.addEventListener('click', function() {
        clickCount++;
        
        // Add shake animation
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'bounce 2s infinite';
        }, 10);
        
        // Easter egg: After 5 clicks, show a message
        if (clickCount === 5) {
            const messages = {
                en: '🦖 Rawr! Thanks for playing with me!',
                zh: '🦖 吼吼！谢谢你和我玩！'
            };
            alert(messages[currentLang]);
            clickCount = 0;
        }
    });
}

// ========================================
// Dynamic Year in Footer
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `© ${currentYear} porridge. Made with 🦖 and ❤️`;
    }
});
