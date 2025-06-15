// Accessibility enhancements for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    initAccessibility();
});

function initAccessibility() {
    // Skip to main content link
    addSkipLink();
    
    // Keyboard navigation
    initKeyboardNavigation();
    
    // Focus management
    initFocusManagement();
    
    // Screen reader announcements
    initScreenReaderSupport();
    
    // High contrast mode detection
    initHighContrastSupport();
}

// Add skip to main content link
function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Zum Hauptinhalt springen';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color, #6366f1);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    // Show on focus
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Enhanced keyboard navigation
function initKeyboardNavigation() {
    // Tab trap for modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals
            const openModal = document.querySelector('.modal.active, .gallery-modal.active');
            if (openModal) {
                closeModal(openModal);
                e.preventDefault();
            }
        }
        
        // Arrow key navigation for galleries
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.classList.contains('gallery-item')) {
                navigateGallery(e.key, focusedElement);
                e.preventDefault();
            }
        }
    });
}

// Focus management
function initFocusManagement() {
    // Store last focused element before modal opens
    let lastFocusedElement = null;
    
    // Monitor modal opens
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.classList.contains('modal') || target.classList.contains('gallery-modal')) {
                    if (target.classList.contains('active')) {
                        // Modal opened
                        lastFocusedElement = document.activeElement;
                        setTimeout(() => {
                            const focusableElement = target.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                            if (focusableElement) {
                                focusableElement.focus();
                            }
                        }, 100);
                    } else {
                        // Modal closed
                        if (lastFocusedElement) {
                            lastFocusedElement.focus();
                            lastFocusedElement = null;
                        }
                    }
                }
            }
        });
    });
    
    observer.observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class']
    });
}

// Screen reader support
function initScreenReaderSupport() {
    // Add live region for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    `;
    document.body.appendChild(liveRegion);
    
    // Function to announce to screen readers
    window.announceToScreenReader = function(message) {
        liveRegion.textContent = message;
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    };
}

// High contrast mode support
function initHighContrastSupport() {
    // Detect Windows high contrast mode
    if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Listen for changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-contrast: high)').addListener((e) => {
            if (e.matches) {
                document.body.classList.add('high-contrast');
            } else {
                document.body.classList.remove('high-contrast');
            }
        });
    }
}

// Helper functions
function closeModal(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
}

function navigateGallery(direction, currentElement) {
    const gallery = currentElement.closest('.gallery, .project-gallery');
    if (!gallery) return;
    
    const items = gallery.querySelectorAll('.gallery-item');
    const currentIndex = Array.from(items).indexOf(currentElement);
    
    if (direction === 'ArrowLeft' && currentIndex > 0) {
        items[currentIndex - 1].focus();
    } else if (direction === 'ArrowRight' && currentIndex < items.length - 1) {
        items[currentIndex + 1].focus();
    }
}
