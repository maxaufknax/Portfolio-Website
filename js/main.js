// Main JavaScript functionality for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initAnimations();
    initImageLoading();
    initThemeToggle();
    initContactForm();
    initTabNavigation(); // Add tab navigation initialization
    initAccessibilityFeatures(); // Add accessibility initialization
    
    // Initialize floating elements with a small delay to ensure DOM is ready
    setTimeout(() => {
        initFloatingElements();
    }, 100);
    
    console.log('Portfolio website loaded successfully! 🚀');
});

// Accessibility Features Initialization
function initAccessibilityFeatures() {
    // Load accessibility script if not already loaded
    if (!document.querySelector('script[src*="accessibility.js"]')) {
        const script = document.createElement('script');
        script.src = 'js/accessibility.js';
        script.async = true;
        document.head.appendChild(script);
    }
    
    // Setup focus indicators
    setupFocusIndicators();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    
    // Setup ARIA live regions if not already present
    setupLiveRegions();
}

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
}

// Scroll effects (navbar background, animations)
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        const scrolled = window.scrollY > 50;
        
        if (navbar) {
            navbar.classList.toggle('scrolled', scrolled);
        }
        
        // Parallax effect for hero background
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            const scrollPercent = window.scrollY / window.innerHeight;
            heroBackground.style.transform = `translateY(${scrollPercent * 50}px)`;
        }
        
        // Animate elements on scroll
        animateOnScroll();
    }
    
    // Throttle scroll events for better performance
    let scrollTimer = null;
    window.addEventListener('scroll', () => {
        if (scrollTimer !== null) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(handleScroll, 10);
    });
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .about-description');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

// Initialize entrance animations
function initAnimations() {
    // Add intersection observer for better performance
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate
        document.querySelectorAll('.project-card, .about-description, .skill-category').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Floating elements animation
    initFloatingElements();
}

// Floating elements in hero section
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    if (floatingElements.length === 0) {
        console.log('No floating elements found');
        return;
    }
    
    console.log(`Initializing ${floatingElements.length} floating elements`);
    
    floatingElements.forEach((element, index) => {
        // Set initial position and animation delay
        element.style.animationDelay = `${index * 1.5}s`;
        
        // Add tech tooltip
        const tech = element.getAttribute('data-tech');
        if (tech) {
            element.title = tech;
        }
          // Add hover effects with smooth transition
        element.addEventListener('mouseenter', () => {
            element.style.animationPlayState = 'paused';
            element.style.zIndex = '30';
            element.style.transition = 'all 0.3s ease';
            element.style.transform = 'scale(1.2)';
            element.style.boxShadow = '0 15px 30px rgba(99, 102, 241, 0.4)';
            element.style.background = 'var(--primary-color)';
            element.style.color = 'white';
            element.style.borderColor = 'var(--primary-color)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.animationPlayState = 'running';
            element.style.zIndex = '25';
            element.style.transition = 'all 0.3s ease';
            element.style.transform = '';
            element.style.boxShadow = '';
            element.style.background = '';
            element.style.color = '';
            element.style.borderColor = '';
        });
          // Add click effect
        element.addEventListener('click', () => {
            element.style.transform = 'scale(0.95)';
            setTimeout(() => {
                element.style.transform = '';
            }, 150);
            
            const tech = element.getAttribute('data-tech');
            console.log(`Clicked on ${tech} element`);
        });
    });
}

// Image loading with fade-in effect
function initImageLoading() {
    const profileImg = document.getElementById('profile-img');
    
    if (profileImg) {
        // Create a placeholder if image doesn't exist
        profileImg.addEventListener('error', function() {
            this.style.display = 'none';
            const overlay = this.parentElement.querySelector('.profile-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
                overlay.innerHTML = '<i class="fas fa-user"></i>';
            }
        });
        
        profileImg.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already cached
        if (profileImg.complete) {
            profileImg.classList.add('loaded');
        }
    }
}

// Theme toggle functionality (dark/light mode)
function initThemeToggle() {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Create theme toggle button (if not exists)
    let themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        themeToggle = document.createElement('button');
        themeToggle.id = 'theme-toggle';
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.className = 'theme-toggle-btn';
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        
        // Add to navigation
        const navContainer = document.querySelector('.nav-container');
        if (navContainer) {
            navContainer.appendChild(themeToggle);
        }
    }
    
    // Update icon based on current theme
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Contact form functionality (if exists)
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Enhanced form validation
        const fields = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            message: document.getElementById('message'),
            privacy: document.getElementById('privacy')
        };

        // Real-time validation
        Object.keys(fields).forEach(fieldName => {
            const field = fields[fieldName];
            if (field) {
                field.addEventListener('blur', () => validateField(fieldName, field));
                field.addEventListener('input', () => clearFieldError(fieldName));
            }
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all fields
            let isValid = true;
            Object.keys(fields).forEach(fieldName => {
                if (!validateField(fieldName, fields[fieldName])) {
                    isValid = false;
                }
            });

            if (!isValid) {
                showNotification('Bitte korrigieren Sie die Fehler im Formular.', 'error');
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-flex';

            // Submit form data
            const formData = new FormData(this);
            
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showNotification('Nachricht erfolgreich gesendet! Ich melde mich in Kürze bei Ihnen.', 'success');
                    contactForm.reset();
                    // Track successful form submission
                    window.portfolioUtils?.trackEvent('contact_form_submitted', {
                        project_type: formData.get('project-type'),
                        budget: formData.get('budget')
                    });
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                showNotification('Es gab ein Problem beim Senden der Nachricht. Versuchen Sie es erneut oder kontaktieren Sie mich direkt.', 'error');
            })
            .finally(() => {
                // Reset button state
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            });
        });
    }

    // Field validation function
    function validateField(fieldName, field) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'name':
                if (!field.value.trim()) {
                    errorMessage = 'Name ist erforderlich.';
                    isValid = false;
                } else if (field.value.trim().length < 2) {
                    errorMessage = 'Name muss mindestens 2 Zeichen lang sein.';
                    isValid = false;
                }
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!field.value.trim()) {
                    errorMessage = 'E-Mail ist erforderlich.';
                    isValid = false;
                } else if (!emailRegex.test(field.value.trim())) {
                    errorMessage = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
                    isValid = false;
                }
                break;

            case 'message':
                if (!field.value.trim()) {
                    errorMessage = 'Nachricht ist erforderlich.';
                    isValid = false;
                } else if (field.value.trim().length < 10) {
                    errorMessage = 'Nachricht muss mindestens 10 Zeichen lang sein.';
                    isValid = false;
                }
                break;

            case 'privacy':
                if (!field.checked) {
                    errorMessage = 'Sie müssen der Datenschutzerklärung zustimmen.';
                    isValid = false;
                }
                break;
        }

        if (errorElement) {
            if (!isValid) {
                errorElement.textContent = errorMessage;
                errorElement.style.display = 'block';
                field.parentElement.classList.add('error');
            } else {
                errorElement.style.display = 'none';
                field.parentElement.classList.remove('error');
            }
        }

        return isValid;
    }

    // Clear field error function
    function clearFieldError(fieldName) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.style.display = 'none';
            const field = document.getElementById(fieldName);
            if (field) {
                field.parentElement.classList.remove('error');
            }
        }
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Tab functionality for About page
function initTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length === 0) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding tab content
            const targetContent = document.getElementById(`${targetTab}-tab`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Add smooth transition effect
            setTimeout(() => {
                targetContent.style.opacity = '1';
                targetContent.style.transform = 'translateY(0)';
            }, 10);
        });
    });
    
    // Initialize first tab as active if no active tab is set
    if (!document.querySelector('.tab-button.active')) {
        tabButtons[0]?.classList.add('active');
        tabContents[0]?.classList.add('active');
    }
}

// 3D Carousel Rotation
function init3DCarousel() {
    const carousel = document.querySelector('.hero-3d-carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 5000);
}

// Modal Functionality
function initModals() {
    const modals = document.querySelectorAll('.image-modal');
    const modalTriggers = document.querySelectorAll('[data-modal]');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
                const modalImage = modal.querySelector('.modal-content');
                modalImage.src = this.src;
            }
        });
    });

    modals.forEach(modal => {
        const closeButton = modal.querySelector('.modal-close');
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// Initialize Features
document.addEventListener('DOMContentLoaded', function () {
    init3DCarousel();
    initModals();
});

// Enhanced accessibility helper functions
function setupFocusIndicators() {
    // Add visible focus indicators for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

function setupKeyboardNavigation() {
    // Enhanced keyboard navigation for interactive elements
    document.addEventListener('keydown', function(e) {
        // Handle escape key for modals and menus
        if (e.key === 'Escape') {
            closeActiveModal();
            closeMobileMenu();
        }
        
        // Handle enter key for button-like elements
        if (e.key === 'Enter' && e.target.classList.contains('btn-like')) {
            e.target.click();
        }
    });
}

function setupLiveRegions() {
    // Create ARIA live regions for dynamic content announcements
    if (!document.getElementById('live-region-polite')) {
        const politeRegion = document.createElement('div');
        politeRegion.id = 'live-region-polite';
        politeRegion.className = 'sr-only';
        politeRegion.setAttribute('aria-live', 'polite');
        politeRegion.setAttribute('aria-atomic', 'true');
        document.body.appendChild(politeRegion);
    }
    
    if (!document.getElementById('live-region-assertive')) {
        const assertiveRegion = document.createElement('div');
        assertiveRegion.id = 'live-region-assertive';
        assertiveRegion.className = 'sr-only';
        assertiveRegion.setAttribute('aria-live', 'assertive');
        assertiveRegion.setAttribute('aria-atomic', 'true');
        document.body.appendChild(assertiveRegion);
    }
}

function announceToScreenReader(message, priority = 'polite') {
    const regionId = priority === 'assertive' ? 'live-region-assertive' : 'live-region-polite';
    const region = document.getElementById(regionId);
    
    if (region) {
        region.textContent = message;
        setTimeout(() => {
            region.textContent = '';
        }, 1000);
    }
}

function closeActiveModal() {
    const activeModal = document.querySelector('.modal.active, .project-modal.active');
    if (activeModal) {
        activeModal.classList.remove('active');
        announceToScreenReader('Modal geschlossen');
        
        // Return focus to the element that opened the modal
        const modalTrigger = document.querySelector(`[data-modal="${activeModal.id}"]`);
        if (modalTrigger) {
            modalTrigger.focus();
        }
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
        announceToScreenReader('Menü geschlossen');
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('In Zwischenablage kopiert!', 'success');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('In Zwischenablage kopiert!', 'success');
    }
}

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    // Integrate with your analytics service here
    // Example: gtag('event', eventName, properties);
}

// Performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
            
            // Track performance
            trackEvent('page_load_time', {
                load_time: pageLoadTime,
                page: window.location.pathname
            });
        });
    }
}

// Initialize performance monitoring
measurePerformance();

// Export functions for use in other scripts
window.portfolioUtils = {
    showNotification,
    copyToClipboard,
    trackEvent,
    debounce
};
