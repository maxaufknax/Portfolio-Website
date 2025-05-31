// QR Code Generator for Portfolio Website
class PortfolioQRGenerator {
    constructor() {
        // Dynamic URL detection with fallback
        this.defaultUrl = this.getCurrentPortfolioUrl();
        this.currentSize = 300;
        this.init();
    }    getCurrentPortfolioUrl() {
        // Check if we're in development or production
        const hostname = window.location.hostname;
        const protocol = window.location.protocol;
        const port = window.location.port;
        
        console.log('🔍 Detecting deployment environment:', { hostname, protocol, port });
        
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            // Development environment
            const url = `${protocol}//${hostname}${port ? ':' + port : ''}`;
            console.log('🛠️ Development environment detected:', url);
            return url;
        } else if (hostname.includes('github.io')) {
            // GitHub Pages
            const url = window.location.origin;
            console.log('🐙 GitHub Pages detected:', url);
            return url;
        } else if (hostname.includes('vercel.app') || hostname.includes('vercel.com')) {
            // Vercel deployment
            const url = window.location.origin;
            console.log('▲ Vercel deployment detected:', url);
            return url;
        } else if (hostname.includes('netlify.app') || hostname.includes('netlify.com')) {
            // Netlify deployment
            const url = window.location.origin;
            console.log('🌐 Netlify deployment detected:', url);
            return url;
        } else if (hostname.includes('surge.sh')) {
            // Surge.sh deployment
            const url = window.location.origin;
            console.log('⚡ Surge.sh deployment detected:', url);
            return url;
        } else if (hostname.includes('firebase') || hostname.includes('web.app')) {
            // Firebase hosting
            const url = window.location.origin;
            console.log('🔥 Firebase hosting detected:', url);
            return url;
        } else if (hostname !== '' && protocol !== 'file:') {
            // Custom domain or other hosting service
            const url = window.location.origin;
            console.log('🌍 Custom domain detected:', url);
            return url;
        } else {
            // Fallback for file:// protocol or unknown
            const fallbackUrl = 'https://your-portfolio.com'; // Update this with your actual domain
            console.log('⚠️ Using fallback URL:', fallbackUrl);
            return fallbackUrl;
        }
    }

    init() {
        // Wait for DOM to be loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupQRCodes());
        } else {
            this.setupQRCodes();
        }
    }    setupQRCodes() {
        console.log('🎯 Setting up QR codes with URL:', this.defaultUrl);
        
        // Update URL input with detected URL
        const urlInput = document.getElementById('portfolio-url');
        if (urlInput) {
            // Always update the input with the detected URL
            urlInput.value = this.defaultUrl;
            
            // Show different placeholder text based on environment
            const hostname = window.location.hostname;
            if (hostname === 'localhost' || hostname === '127.0.0.1') {
                urlInput.placeholder = 'Entwicklungsumgebung erkannt';
            } else if (this.defaultUrl.includes('your-portfolio.com')) {
                urlInput.placeholder = 'Aktualisieren Sie die URL in qr-generator.js';
                urlInput.style.borderColor = '#f59e0b';
                urlInput.title = 'Diese URL sollte durch Ihre echte Domain ersetzt werden';
            } else {
                urlInput.placeholder = 'Live-Domain automatisch erkannt';
                urlInput.style.borderColor = '#10b981';
                urlInput.title = 'URL automatisch aus der aktuellen Domain erkannt';
            }
        }

        // Generate all QR codes
        this.generateMainQR();
        this.generateVariations();
        this.generatePrintQR();
        
        // Show user feedback about URL detection
        if (this.defaultUrl.includes('your-portfolio.com')) {
            console.warn('⚠️ Default fallback URL wird verwendet. Aktualisieren Sie die URL in der Produktion.');
        } else {
            console.log('✅ QR-Codes erfolgreich mit automatisch erkannter URL generiert');
        }
    }

    generateMainQR() {
        const canvas = document.getElementById('qr-code');
        if (!canvas) return;

        const qr = new QRious({
            element: canvas,
            value: this.defaultUrl,
            size: this.currentSize,
            background: 'white',
            foreground: '#6366f1',
            level: 'M'
        });
    }

    generateVariations() {
        // Standard QR Code
        const standardCanvas = document.getElementById('qr-standard');
        if (standardCanvas) {
            new QRious({
                element: standardCanvas,
                value: this.defaultUrl,
                size: 150,
                background: 'white',
                foreground: 'black',
                level: 'M'
            });
        }

        // Branded QR Code
        const brandedCanvas = document.getElementById('qr-branded');
        if (brandedCanvas) {
            new QRious({
                element: brandedCanvas,
                value: this.defaultUrl,
                size: 150,
                background: 'white',
                foreground: '#6366f1',
                level: 'M'
            });
        }

        // Minimal QR Code
        const minimalCanvas = document.getElementById('qr-minimal');
        if (minimalCanvas) {
            new QRious({
                element: minimalCanvas,
                value: this.defaultUrl,
                size: 150,
                background: '#f8fafc',
                foreground: '#1e293b',
                level: 'M'
            });
        }
    }

    generatePrintQR() {
        const printCanvas = document.getElementById('qr-print');
        if (!printCanvas) return;

        new QRious({
            element: printCanvas,
            value: this.defaultUrl,
            size: 120,
            background: 'white',
            foreground: 'black',
            level: 'H' // Higher error correction for print
        });
    }

    updateQRSize() {
        const sizeSelect = document.getElementById('qr-size');
        if (!sizeSelect) return;

        this.currentSize = parseInt(sizeSelect.value);
        this.generateMainQR();
    }

    updateQRCode() {
        const urlInput = document.getElementById('portfolio-url');
        if (urlInput) {
            this.defaultUrl = urlInput.value || this.defaultUrl;
        }
        
        this.generateMainQR();
        this.generateVariations();
        this.generatePrintQR();
        
        this.showToast('QR-Code aktualisiert!');
    }

    downloadQR() {
        const canvas = document.getElementById('qr-code');
        if (!canvas) return;

        const link = document.createElement('a');
        link.download = 'portfolio-qr-code.png';
        link.href = canvas.toDataURL();
        link.click();
        
        this.showToast('QR-Code heruntergeladen!');
    }

    generateVariation(type) {
        let canvas, filename;
        
        switch(type) {
            case 'standard':
                canvas = document.getElementById('qr-standard');
                filename = 'portfolio-qr-standard.png';
                break;
            case 'branded':
                canvas = document.getElementById('qr-branded');
                filename = 'portfolio-qr-branded.png';
                break;
            case 'minimal':
                canvas = document.getElementById('qr-minimal');
                filename = 'portfolio-qr-minimal.png';
                break;
            default:
                return;
        }

        if (canvas) {
            const link = document.createElement('a');
            link.download = filename;
            link.href = canvas.toDataURL();
            link.click();
            
            this.showToast(`${type} QR-Code heruntergeladen!`);
        }
    }

    printTemplate() {
        const printCard = document.getElementById('print-card');
        if (!printCard) return;

        const printWindow = window.open('', '_blank');
        const printContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Portfolio QR-Code - Druckvorlage</title>
                <style>
                    @media print {
                        body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                        .print-card { 
                            width: 85mm; 
                            height: 55mm; 
                            border: 1px solid #ddd; 
                            padding: 5mm; 
                            display: flex; 
                            align-items: center; 
                            justify-content: space-between;
                            page-break-after: always;
                        }
                        .card-info { flex: 1; }
                        .card-info h3 { margin: 0; font-size: 14px; color: #333; }
                        .card-info p { margin: 2px 0; font-size: 10px; color: #666; }
                        .card-qr { margin-left: 10px; }
                        .card-qr canvas { width: 30mm; height: 30mm; }
                        .card-footer { text-align: center; margin-top: 5px; }
                        .card-footer p { margin: 0; font-size: 8px; color: #888; }
                        .card-footer small { font-size: 6px; color: #aaa; }
                    }
                </style>
            </head>
            <body>
                ${printCard.outerHTML}
            </body>
            </html>
        `;
        
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }

    downloadTemplate() {
        // This would require a more complex implementation with libraries like jsPDF
        // For now, we'll show a helpful message
        this.showToast('PDF-Export kommt bald! Verwenden Sie vorerst die Druckfunktion.');
    }

    showToast(message) {
        // Create toast notification
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
}

// Global functions for HTML onclick handlers
function copyUrl() {
    const urlInput = document.getElementById('portfolio-url');
    if (urlInput) {
        urlInput.select();
        urlInput.setSelectionRange(0, 99999); // For mobile devices
        document.execCommand('copy');
        qrGenerator.showToast('URL kopiert!');
    }
}

function updateQRCode() {
    qrGenerator.updateQRCode();
}

function updateQRSize() {
    qrGenerator.updateQRSize();
}

function downloadQR() {
    qrGenerator.downloadQR();
}

function generateVariation(type) {
    qrGenerator.generateVariation(type);
}

function printTemplate() {
    qrGenerator.printTemplate();
}

function downloadTemplate() {
    qrGenerator.downloadTemplate();
}

// Initialize QR Generator
const qrGenerator = new PortfolioQRGenerator();
