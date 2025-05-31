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
    initProjectHeroCarousel(); // Add project hero carousel initialization
    initGalleryModals(); // Add gallery modal initialization
    initAboutPageAnimations(); // Add about page animations initialization
    initFaqAccordion(); // Add FAQ accordion initialization
    initProjectVideoPlayers(); // Add project video players initialization
    
    // Initialize floating elements with a small delay to ensure DOM is ready
    setTimeout(() => {
        initFloatingElements();
    }, 100);
    
});

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
        return;
    }
    
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
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObj = Object.fromEntries(formData);
            
            // Basic validation
            if (!formObj.name || !formObj.email || !formObj.message) {
                showNotification('Bitte füllen Sie alle Felder aus.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formObj.email)) {
                showNotification('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Nachricht wird gesendet...', 'info');
            
            setTimeout(() => {
                showNotification('Nachricht erfolgreich gesendet!', 'success');
                contactForm.reset();
            }, 2000);
        });
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

// Function to initialize the project hero image carousel
function initProjectHeroCarousel() {
    const carousel = document.querySelector('.hero-3d-carousel');
    if (!carousel) {
        return; // Carousel not found on this page
    }

    const images = carousel.querySelectorAll('.hero-interface-image');
    if (images.length < 2) {
        return; // Not enough images for a carousel
    }

    let currentIndex = 0;
    images[currentIndex].classList.add('active');

    setInterval(() => {
        const prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % images.length;

        images[prevIndex].classList.remove('active');
        images[prevIndex].classList.add('prev'); // Add prev class for outgoing image

        images[currentIndex].classList.add('active');
        images[currentIndex].classList.remove('prev'); // Ensure new active image doesn't have prev

        // Clean up prev class from other images
        for (let i = 0; i < images.length; i++) {
            if (i !== prevIndex && i !== currentIndex) {
                images[i].classList.remove('prev');
            }
        }
    }, 4000); // Change image every 4 seconds
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
    // Integrate with your analytics service here
    // Example: gtag('event', eventName, properties);
}

// Performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            
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

// Gallery Modal Functions
function initGalleryModals() {
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        // Close modal on outside click
        imageModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeImageModal();
            }
        });

        // Close modal on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const modal = document.getElementById('imageModal');
                if (modal && modal.style.display === 'flex') {
                    closeImageModal();
                }
            }
        });
    }
}

window.openImageModal = function(buttonOrImageElement) {
    let imgElement, title, description;

    if (buttonOrImageElement.closest('.gallery-item')) { // Handling click from gallery item button
        const galleryItem = buttonOrImageElement.closest('.gallery-item');
        imgElement = galleryItem.querySelector('img');
        title = galleryItem.querySelector('h4')?.textContent || '';
        description = galleryItem.querySelector('p')?.textContent || '';
    } else if (buttonOrImageElement.tagName === 'IMG') { // Handling click directly on an image meant for modal
        imgElement = buttonOrImageElement;
        title = buttonOrImageElement.dataset.modalTitle || imgElement.alt || '';
        description = buttonOrImageElement.dataset.modalDescription || '';
    } else {
        console.error("openImageModal called with an unsupported element:", buttonOrImageElement);
        return;
    }

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    if (!modal || !modalImg || !modalTitle || !modalDescription) {
        console.error("Modal elements not found in the DOM.");
        return;
    }

    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

window.closeImageModal = function() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

function initAboutPageAnimations() {
    if (document.querySelector('.skill-progress')) {
        const skillBars = document.querySelectorAll('.skill-progress');

        const animateSkills = () => {
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const progress = bar.dataset.progress;
                    bar.style.width = progress + '%';
                    bar.style.transition = 'width 1.5s ease-in-out';
                }
            });
        };

        // Initial check
        animateSkills();

        // Check on scroll
        window.addEventListener('scroll', animateSkills);
    }
}

function initFaqAccordion() {
    if (document.querySelector('.faq-item')) {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            // const answer = item.querySelector('.faq-answer'); // Not strictly needed for click logic
            const icon = question.querySelector('i');

            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');

                // Close all other items to ensure only one is open at a time
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) { // Don't close the one being clicked if it's already open
                        otherItem.classList.remove('active');
                        const otherIcon = otherItem.querySelector('.faq-question i');
                        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
                if (icon) icon.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
            });
        });
    }
}

// Portfolio sharing functions (global)
window.copyPortfolioLink = function() {
    const url = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/index.html'); // Assumes index.html is the main page
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            if (window.portfolioUtils && typeof window.portfolioUtils.showNotification === 'function') {
                window.portfolioUtils.showNotification('Portfolio-Link kopiert!', 'success');
            } else {
                alert('Portfolio-Link kopiert!'); // Fallback
            }
        }).catch(err => {
            console.error('Konnte Link nicht kopieren: ', err);
            alert('Link konnte nicht kopiert werden.'); // Fallback
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            if (window.portfolioUtils && typeof window.portfolioUtils.showNotification === 'function') {
                window.portfolioUtils.showNotification('Portfolio-Link kopiert! (Fallback)', 'success');
            } else {
                alert('Portfolio-Link kopiert! (Fallback)');
            }
        } catch (err) {
            console.error('Fallback: Konnte Link nicht kopieren', err);
            alert('Link konnte nicht kopiert werden. (Fallback)');
        }
        document.body.removeChild(textArea);
    }
};

window.sharePortfolio = function() {
    const url = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/index.html');
    const title = document.title;
    const text = `Schauen Sie sich dieses Portfolio an: ${title}`;

    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: url,
        })
        .then(() => console.log('Erfolgreich geteilt'))
        .catch((error) => console.log('Fehler beim Teilen', error));
    } else {
        // Fallback if Web Share API is not available
        window.copyPortfolioLink(); // Offer to copy link as a fallback
        if (window.portfolioUtils && typeof window.portfolioUtils.showNotification === 'function') {
            window.portfolioUtils.showNotification('Web Share nicht unterstützt. Link wurde kopiert.', 'info');
        } else {
            alert('Web Share wird von diesem Browser nicht unterstützt. Der Link wurde stattdessen in die Zwischenablage kopiert.');
        }
    }
};

function initProjectVideoPlayers() {
    const videoCards = document.querySelectorAll('.video-card');
    if (videoCards.length === 0) {
        return;
    }

    const allVideos = document.querySelectorAll('video.showcase-video');

    videoCards.forEach(card => {
        const video = card.querySelector('video.showcase-video');
        if (!video) return;

        video.addEventListener('play', function() {
            // Pause other videos
            allVideos.forEach(otherVideo => {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
            card.classList.add('playing');
        });

        video.addEventListener('pause', function() {
            card.classList.remove('playing');
        });

        video.addEventListener('ended', function() {
            card.classList.remove('playing');
        });

        card.addEventListener('mouseenter', function() {
            if (!card.classList.contains('playing')) {
                // Apply hover effect only if not playing
                video.style.transform = 'scale(1.03)'; // Example hover effect
            }
        });

        card.addEventListener('mouseleave', function() {
            // Remove hover effect
            video.style.transform = 'scale(1)';
        });
    });
}
