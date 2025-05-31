// Accessibility Enhancement Scripts
// Maximilian Paasch Portfolio - 2025

class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupAriaLiveRegions();
        this.setupReducedMotion();
        this.setupHighContrast();
        this.setupScreenReaderSupport();
    }

    // Keyboard Navigation Enhancement
    setupKeyboardNavigation() {
        // Tab navigation for modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeActiveModal();
            }
            
            if (e.key === 'Tab') {
                this.handleTabNavigation(e);
            }
        });

        // Skip links functionality
        const skipLinks = document.querySelectorAll('.skip-link');
        skipLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // Focus Management
    setupFocusManagement() {
        // Store focus for modal restoration
        this.lastFocusedElement = null;

        // Enhanced focus indicators
        document.addEventListener('focusin', (e) => {
            this.announcePageSection(e.target);
        });

        // Mobile navigation focus
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
                navToggle.setAttribute('aria-expanded', !isExpanded);
                
                if (!isExpanded) {
                    // Focus first nav item when opening
                    const firstNavItem = navMenu.querySelector('.nav-link');
                    if (firstNavItem) {
                        setTimeout(() => firstNavItem.focus(), 100);
                    }
                }
            });
        }
    }

    // ARIA Live Regions
    setupAriaLiveRegions() {
        // Create live region for dynamic announcements
        if (!document.getElementById('aria-live-region')) {
            const liveRegion = document.createElement('div');
            liveRegion.id = 'aria-live-region';
            liveRegion.className = 'sr-only';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            document.body.appendChild(liveRegion);
        }

        // Create assertive live region for urgent announcements
        if (!document.getElementById('aria-live-assertive')) {
            const assertiveRegion = document.createElement('div');
            assertiveRegion.id = 'aria-live-assertive';
            assertiveRegion.className = 'sr-only';
            assertiveRegion.setAttribute('aria-live', 'assertive');
            assertiveRegion.setAttribute('aria-atomic', 'true');
            document.body.appendChild(assertiveRegion);
        }
    }

    // Reduced Motion Support
    setupReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        const handleReducedMotion = (mediaQuery) => {
            if (mediaQuery.matches) {
                document.body.classList.add('reduced-motion');
                this.disableAnimations();
            } else {
                document.body.classList.remove('reduced-motion');
            }
        };

        handleReducedMotion(prefersReducedMotion);
        prefersReducedMotion.addEventListener('change', handleReducedMotion);
    }

    // High Contrast Mode Support
    setupHighContrast() {
        const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
        
        const handleHighContrast = (mediaQuery) => {
            if (mediaQuery.matches) {
                document.body.classList.add('high-contrast');
            } else {
                document.body.classList.remove('high-contrast');
            }
        };

        handleHighContrast(prefersHighContrast);
        prefersHighContrast.addEventListener('change', handleHighContrast);
    }

    // Screen Reader Support
    setupScreenReaderSupport() {
        // Enhanced form labels and descriptions
        this.setupFormAccessibility();
        
        // Dynamic content announcements
        this.setupDynamicContentAnnouncements();
        
        // Progress indicators
        this.setupProgressIndicators();
    }

    // Form Accessibility Enhancement
    setupFormAccessibility() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                // Add error announcement
                input.addEventListener('invalid', (e) => {
                    this.announceError(e.target);
                });

                // Add success announcement for validation
                input.addEventListener('input', (e) => {
                    if (e.target.validity.valid && e.target.getAttribute('aria-invalid') === 'true') {
                        e.target.setAttribute('aria-invalid', 'false');
                        this.announceSuccess(`${this.getFieldLabel(e.target)} ist jetzt gültig`);
                    }
                });
            });
        });
    }

    // Dynamic Content Announcements
    setupDynamicContentAnnouncements() {
        // Project filter announcements
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                const filterName = button.textContent.trim();
                this.announce(`Filter geändert zu: ${filterName}`);
            });
        });

        // Search result announcements
        const searchInput = document.getElementById('project-search');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', () => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    const visibleProjects = document.querySelectorAll('.project-card:not([style*="display: none"])').length;
                    this.announce(`${visibleProjects} Projekte gefunden`);
                }, 500);
            });
        }
    }

    // Progress Indicators
    setupProgressIndicators() {
        // Form submission progress
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', () => {
                this.announce('Formular wird gesendet...', 'assertive');
            });
        });

        // Loading states
        const loadingElements = document.querySelectorAll('[data-loading]');
        loadingElements.forEach(element => {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'data-loading') {
                        const isLoading = element.getAttribute('data-loading') === 'true';
                        this.announce(isLoading ? 'Lädt...' : 'Laden abgeschlossen', 'assertive');
                    }
                });
            });
            
            observer.observe(element, { attributes: true });
        });
    }

    // Utility Methods
    announce(message, priority = 'polite') {
        const liveRegionId = priority === 'assertive' ? 'aria-live-assertive' : 'aria-live-region';
        const liveRegion = document.getElementById(liveRegionId);
        
        if (liveRegion) {
            liveRegion.textContent = message;
            
            // Clear after announcement
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }

    announceError(field) {
        const label = this.getFieldLabel(field);
        const errorMessage = field.validationMessage;
        field.setAttribute('aria-invalid', 'true');
        this.announce(`Fehler in ${label}: ${errorMessage}`, 'assertive');
    }

    announceSuccess(message) {
        this.announce(message, 'polite');
    }

    getFieldLabel(field) {
        const label = document.querySelector(`label[for="${field.id}"]`);
        return label ? label.textContent.trim() : field.name || field.placeholder || 'Feld';
    }

    announcePageSection(element) {
        const section = element.closest('section');
        if (section) {
            const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
            if (heading && !element.dataset.announced) {
                element.dataset.announced = 'true';
                // Remove announcement flag after a delay
                setTimeout(() => {
                    delete element.dataset.announced;
                }, 2000);
            }
        }
    }

    closeActiveModal() {
        const activeModal = document.querySelector('.modal.active, .modal.show');
        if (activeModal) {
            activeModal.classList.remove('active', 'show');
            
            // Restore focus
            if (this.lastFocusedElement) {
                this.lastFocusedElement.focus();
                this.lastFocusedElement = null;
            }
            
            this.announce('Modal geschlossen');
        }
    }

    handleTabNavigation(e) {
        const modal = document.querySelector('.modal.active, .modal.show');
        if (modal) {
            const focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements.length > 0) {
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        }
    }

    disableAnimations() {
        const style = document.createElement('style');
        style.id = 'reduced-motion-styles';
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize accessibility manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AccessibilityManager();
});

// Color contrast checker utility
class ContrastChecker {
    static getLuminance(r, g, b) {
        const [rs, gs, bs] = [r, g, b].map(c => {
            c = c / 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    }
    
    static getContrastRatio(rgb1, rgb2) {
        const lum1 = this.getLuminance(...rgb1);
        const lum2 = this.getLuminance(...rgb2);
        const lighter = Math.max(lum1, lum2);
        const darker = Math.min(lum1, lum2);
        return (lighter + 0.05) / (darker + 0.05);
    }
    
    static checkAccessibility(ratio) {
        return {
            AA: ratio >= 4.5,
            AAA: ratio >= 7,
            AALarge: ratio >= 3,
            AAALarge: ratio >= 4.5
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AccessibilityManager, ContrastChecker };
}
