// Comprehensive Functionality Test Script
// Tests all implemented optimizations for the portfolio website

class PortfolioTester {
    constructor() {
        this.testResults = [];
        this.errors = [];
    }

    // Test Suite Runner
    async runAllTests() {
        console.log('🧪 Starting Portfolio Functionality Tests...\n');
        
        try {
            await this.testAccessibilityFeatures();
            await this.testModalFunctionality();
            await this.testQRGenerator();
            await this.testFormValidation();
            await this.testSEOOptimizations();
            await this.testKeyboardNavigation();
            await this.testResponsiveDesign();
            
            this.displayResults();
        } catch (error) {
            console.error('❌ Test suite failed:', error);
        }
    }

    // Test Accessibility Features
    async testAccessibilityFeatures() {
        console.log('🔍 Testing Accessibility Features...');
        
        // Check if AccessibilityManager is loaded
        this.test('AccessibilityManager Class', () => {
            return typeof AccessibilityManager !== 'undefined';
        });

        // Check for ARIA live regions
        this.test('ARIA Live Regions', () => {
            const liveRegion = document.getElementById('aria-live-region');
            const assertiveRegion = document.getElementById('aria-live-assertive');
            return liveRegion && assertiveRegion;
        });

        // Check for skip links
        this.test('Skip Links', () => {
            const skipLinks = document.querySelectorAll('.skip-link');
            return skipLinks.length > 0;
        });

        // Check for screen reader utilities
        this.test('Screen Reader Utilities', () => {
            const srOnlyElements = document.querySelectorAll('.sr-only');
            return srOnlyElements.length > 0;
        });

        console.log('✅ Accessibility tests completed\n');
    }

    // Test Modal Functionality
    async testModalFunctionality() {
        console.log('🔍 Testing Modal Functionality...');

        // Check if projects.js is loaded
        this.test('Projects.js Loaded', () => {
            return typeof openProjectModal === 'function' && typeof closeProjectModal === 'function';
        });

        // Check for modal triggers
        this.test('Modal Triggers', () => {
            const modalTriggers = document.querySelectorAll('[data-modal]');
            return modalTriggers.length > 0;
        });

        // Test modal creation
        this.test('Modal Creation Function', () => {
            return typeof createProjectModal === 'function';
        });

        console.log('✅ Modal tests completed\n');
    }

    // Test QR Generator
    async testQRGenerator() {
        console.log('🔍 Testing QR Generator...');

        // Check if QR generator is loaded
        this.test('QR Generator Class', () => {
            return typeof PortfolioQRGenerator !== 'undefined';
        });

        // Check for QRious library
        this.test('QRious Library', () => {
            return typeof QRious !== 'undefined';
        });

        // Check for QR canvas elements
        this.test('QR Canvas Elements', () => {
            const mainQR = document.getElementById('qr-code');
            const variations = document.querySelectorAll('#qr-standard, #qr-branded, #qr-minimal');
            return mainQR || variations.length > 0;
        });

        // Test URL detection
        this.test('URL Detection', () => {
            if (typeof qrGenerator !== 'undefined') {
                const url = qrGenerator.getCurrentPortfolioUrl();
                return url && url.length > 0 && !url.includes('undefined');
            }
            return false;
        });

        console.log('✅ QR Generator tests completed\n');
    }

    // Test Form Validation
    async testFormValidation() {
        console.log('🔍 Testing Form Validation...');

        // Check for contact form
        this.test('Contact Form Exists', () => {
            const contactForm = document.getElementById('contact-form');
            return contactForm !== null;
        });

        // Check for form fields
        this.test('Form Fields', () => {
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const messageField = document.getElementById('message');
            return nameField && emailField && messageField;
        });

        // Check for validation functions
        this.test('Validation Functions', () => {
            return typeof validateField === 'function' || typeof initContactForm === 'function';
        });

        // Check for error elements
        this.test('Error Elements', () => {
            const errorElements = document.querySelectorAll('[id$="-error"]');
            return errorElements.length > 0;
        });

        console.log('✅ Form validation tests completed\n');
    }

    // Test SEO Optimizations
    async testSEOOptimizations() {
        console.log('🔍 Testing SEO Optimizations...');

        // Check meta tags
        this.test('Meta Description', () => {
            const metaDesc = document.querySelector('meta[name="description"]');
            return metaDesc && metaDesc.content.length > 50;
        });

        // Check Open Graph tags
        this.test('Open Graph Tags', () => {
            const ogTitle = document.querySelector('meta[property="og:title"]');
            const ogDesc = document.querySelector('meta[property="og:description"]');
            return ogTitle && ogDesc;
        });

        // Check JSON-LD structured data
        this.test('Structured Data', () => {
            const jsonLD = document.querySelector('script[type="application/ld+json"]');
            return jsonLD !== null;
        });

        // Check canonical URL
        this.test('Canonical URL', () => {
            const canonical = document.querySelector('link[rel="canonical"]');
            return canonical !== null;
        });

        console.log('✅ SEO tests completed\n');
    }

    // Test Keyboard Navigation
    async testKeyboardNavigation() {
        console.log('🔍 Testing Keyboard Navigation...');

        // Check for tabindex attributes
        this.test('Focusable Elements', () => {
            const focusableElements = document.querySelectorAll('[tabindex]');
            return focusableElements.length > 0;
        });

        // Check for keyboard event listeners
        this.test('Keyboard Events', () => {
            // This is harder to test directly, so we check for related functions
            return typeof setupKeyboardNavigation === 'function' || 
                   typeof handleTabNavigation === 'function';
        });

        console.log('✅ Keyboard navigation tests completed\n');
    }

    // Test Responsive Design
    async testResponsiveDesign() {
        console.log('🔍 Testing Responsive Design...');

        // Check viewport meta tag
        this.test('Viewport Meta Tag', () => {
            const viewport = document.querySelector('meta[name="viewport"]');
            return viewport && viewport.content.includes('width=device-width');
        });

        // Check for responsive CSS
        this.test('Responsive Stylesheets', () => {
            const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
            return Array.from(stylesheets).some(link => 
                link.href.includes('responsive') || 
                link.href.includes('style.css')
            );
        });

        console.log('✅ Responsive design tests completed\n');
    }

    // Test Helper Function
    test(name, testFunction) {
        try {
            const result = testFunction();
            this.testResults.push({
                name: name,
                passed: result,
                status: result ? '✅' : '❌'
            });
            
            if (!result) {
                this.errors.push(`Failed: ${name}`);
            }
            
        } catch (error) {
            this.testResults.push({
                name: name,
                passed: false,
                status: '❌',
                error: error.message
            });
            this.errors.push(`Error in ${name}: ${error.message}`);
        }
    }

    // Display Results
    displayResults() {
        console.log('\n📊 TEST RESULTS SUMMARY');
        console.log('═'.repeat(50));
        
        const passedTests = this.testResults.filter(test => test.passed).length;
        const totalTests = this.testResults.length;
        const successRate = ((passedTests / totalTests) * 100).toFixed(1);
        
        console.log(`Total Tests: ${totalTests}`);
        console.log(`Passed: ${passedTests}`);
        console.log(`Failed: ${totalTests - passedTests}`);
        console.log(`Success Rate: ${successRate}%\n`);
        
        // Detailed results
        this.testResults.forEach(test => {
            console.log(`${test.status} ${test.name}`);
            if (test.error) {
                console.log(`   Error: ${test.error}`);
            }
        });
        
        // Summary
        if (this.errors.length === 0) {
            console.log('\n🎉 All tests passed! The portfolio is fully optimized.');
        } else {
            console.log('\n⚠️  Some tests failed. Review the following:');
            this.errors.forEach(error => console.log(`   • ${error}`));
        }
        
        // Recommendations
        console.log('\n💡 OPTIMIZATION RECOMMENDATIONS:');
        this.generateRecommendations();
    }

    // Generate Recommendations
    generateRecommendations() {
        const recommendations = [
            '1. Test in multiple browsers (Chrome, Firefox, Safari, Edge)',
            '2. Run Lighthouse audit for performance insights',
            '3. Test with screen readers (NVDA, JAWS, VoiceOver)',
            '4. Validate HTML and CSS with W3C validators',
            '5. Test form submission with real backend',
            '6. Update placeholder URLs with actual domain',
            '7. Test QR codes with different devices',
            '8. Verify social media meta tags with debuggers',
            '9. Test accessibility with keyboard-only navigation',
            '10. Validate structured data with Google\'s Rich Results Test'
        ];
        
        recommendations.forEach(rec => console.log(`   ${rec}`));
    }
}

// Performance Testing
class PerformanceTester {
    static async measureLoadTime() {
        if (window.performance) {
            const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
            console.log(`⏱️  Page Load Time: ${loadTime}ms`);
            
            if (loadTime < 2000) {
                console.log('✅ Excellent load time!');
            } else if (loadTime < 4000) {
                console.log('⚠️  Good load time, but could be improved');
            } else {
                console.log('❌ Slow load time - optimization needed');
            }
        }
    }

    static checkImageOptimization() {
        const images = document.querySelectorAll('img');
        let largeImages = 0;
        
        images.forEach(img => {
            // Check for lazy loading
            if (!img.hasAttribute('loading')) {
                console.log(`⚠️  Image without lazy loading: ${img.src}`);
            }
            
            // Check for alt text
            if (!img.alt) {
                console.log(`❌ Image without alt text: ${img.src}`);
            }
        });
        
        console.log(`📸 Total images: ${images.length}`);
    }
}

// Initialize and run tests when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runTests);
} else {
    runTests();
}

function runTests() {
    // Wait a bit for all scripts to load
    setTimeout(async () => {
        const tester = new PortfolioTester();
        await tester.runAllTests();
        
        // Performance tests
        console.log('\n🚀 PERFORMANCE TESTS:');
        PerformanceTester.measureLoadTime();
        PerformanceTester.checkImageOptimization();
        
    }, 1000);
}

// Export for use in console
window.PortfolioTester = PortfolioTester;
window.PerformanceTester = PerformanceTester;
