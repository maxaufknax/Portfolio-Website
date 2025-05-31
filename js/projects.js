// Project-specific JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    initProjectCards();
    initProjectModals();
    initProjectFilters();
    initProjectSearch();
    initProjectAnimations();
});

// Project card interactions
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add click tracking
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.project-link')) {
                const projectLink = card.querySelector('.project-link');
                if (projectLink) {
                    window.portfolioUtils?.trackEvent('project_card_clicked', {
                        project: card.dataset.project
                    });
                    window.location.href = projectLink.href;
                }
            }
        });
        
        // Add hover effects for project images
        const projectImage = card.querySelector('.project-image');
        if (projectImage) {
            card.addEventListener('mouseenter', () => {
                projectImage.style.transform = 'scale(1.05)';
            });
            
            card.addEventListener('mouseleave', () => {
                projectImage.style.transform = 'scale(1)';
            });
        }
        
        // Add keyboard navigation
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

// Project modal functionality
function initProjectModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.dataset.modal;
            openProjectModal(modalId);
        });
    });
    
    // Close modal functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeProjectModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    const modalData = getProjectModalData(projectId);
    if (!modalData) return;
    
    const modal = createProjectModal(modalData);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    window.portfolioUtils?.trackEvent('project_modal_opened', {
        project: projectId
    });
}

function closeProjectModal() {
    const modal = document.querySelector('.project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

function createProjectModal(data) {
    const modal = document.createElement('div');
    modal.className = 'project-modal modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeProjectModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-header">
                <h2>${data.title}</h2>
                <p class="modal-subtitle">${data.subtitle}</p>
            </div>
            <div class="modal-body">
                <div class="project-images">
                    ${data.images.map(img => `
                        <img src="${img}" alt="${data.title} Screenshot" loading="lazy">
                    `).join('')}
                </div>
                <div class="project-details">
                    <div class="project-description">
                        <h3>Projektbeschreibung</h3>
                        <p>${data.description}</p>
                    </div>
                    <div class="project-technologies">
                        <h3>Verwendete Technologien</h3>
                        <div class="tech-list">
                            ${data.technologies.map(tech => `
                                <span class="tech-tag">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="project-features">
                        <h3>Hauptfunktionen</h3>
                        <ul>
                            ${data.features.map(feature => `
                                <li>${feature}</li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="project-actions">
                        ${data.github ? `
                            <a href="${data.github}" class="btn btn-primary" target="_blank" rel="noopener">
                                <i class="fab fa-github"></i> Code auf GitHub
                            </a>
                        ` : ''}
                        ${data.demo ? `
                            <a href="${data.demo}" class="btn btn-secondary" target="_blank" rel="noopener">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        ` : ''}
                        ${data.download ? `
                            <a href="${data.download}" class="btn btn-outline">
                                <i class="fas fa-download"></i> Download
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
    return modal;
}

// Project data (placeholder - replace with your actual project data)
function getProjectModalData(projectId) {
    const projects = {
        'medical-spytool': {
            title: 'Medical Spytool',
            subtitle: 'Innovative medizinische Analyse-Software',
            description: 'Ein fortschrittliches Tool zur medizinischen Datenanalyse mit KI-Integration. Das System ermöglicht es Ärzten, komplexe medizinische Daten zu analysieren und fundierte Entscheidungen zu treffen.',
            technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Docker'],
            features: [
                'KI-gestützte Diagnose-Unterstützung',
                'Echtzeit-Datenanalyse',
                'Sichere Patientendaten-Verwaltung',
                'Intuitive Benutzeroberfläche',
                'Integration mit bestehenden Systemen'
            ],
            images: [
                'images/projects/medical-spytool-1.jpg',
                'images/projects/medical-spytool-2.jpg'
            ],
            github: 'https://github.com/yourusername/medical-spytool',
            demo: null,
            download: null
        },
        'ai-discord-bot': {
            title: 'AI Discord Bot',
            subtitle: 'Intelligenter Discord Bot mit NLP',
            description: 'Ein Discord Bot mit fortschrittlicher KI-Integration, der natürliche Sprache versteht und kontextuelle Antworten generiert.',
            technologies: ['Node.js', 'Discord.js', 'OpenAI API', 'MongoDB', 'Express'],
            features: [
                'Natural Language Processing',
                'Kontextuelle Gespräche',
                'Moderation Tools',
                'Custom Commands',
                'Musik-Streaming Integration'
            ],
            images: [
                'images/projects/discord-bot-1.jpg',
                'images/projects/discord-bot-2.jpg'
            ],
            github: 'https://github.com/yourusername/ai-discord-bot',
            demo: 'https://discord.com/invite/yourbot',
            download: null
        },
        'soulscribe': {
            title: 'SoulScribe',
            subtitle: 'KI-gestütztes Reflexions- und Journaling-Tool',
            description: 'Eine innovative Anwendung, die KI nutzt, um Benutzern bei der Selbstreflexion und dem emotionalen Wohlbefinden zu helfen.',
            technologies: ['React', 'TypeScript', 'OpenAI API', 'Firebase', 'Material-UI'],
            features: [
                'KI-gestützte Reflexionsführung',
                'Emotionale Analyse',
                'Personalisierte Insights',
                'Sichere Datenspeicherung',
                'Progress Tracking'
            ],
            images: [
                'images/projects/soulscribe-1.jpg',
                'images/projects/soulscribe-2.jpg'
            ],
            github: 'https://github.com/yourusername/soulscribe',
            demo: 'https://soulscribe-demo.vercel.app',
            download: null
        },
        'local-ai-assistant': {
            title: 'Lokaler KI-Assistent',
            subtitle: 'Datenschutzfreundlicher AI-Assistent',
            description: 'Ein vollständig lokaler KI-Assistent, der ohne Cloud-Verbindung funktioniert und maximalen Datenschutz gewährleistet.',
            technologies: ['Python', 'Transformers', 'PyQt6', 'SQLite', 'ONNX'],
            features: [
                'Vollständig offline',
                'Zero-Data-Collection',
                'Sprachverarbeitung',
                'Task-Automation',
                'Anpassbare Modelle'
            ],
            images: [
                'images/projects/local-ai-1.jpg',
                'images/projects/local-ai-2.jpg'
            ],
            github: 'https://github.com/yourusername/local-ai-assistant',
            demo: null,
            download: 'https://github.com/yourusername/local-ai-assistant/releases'
        }
    };
    
    return projects[projectId];
}

// Project filtering
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            filterProjects(filter, projectCards);
            
            window.portfolioUtils?.trackEvent('project_filter_used', {
                filter: filter
            });
        });
    });
}

function filterProjects(filter, projectCards) {
    projectCards.forEach(card => {
        const shouldShow = filter === 'all' || card.dataset.categories?.includes(filter);
        
        if (shouldShow) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Project search functionality
function initProjectSearch() {
    const searchInput = document.getElementById('project-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', window.portfolioUtils?.debounce(function(e) {
        const searchTerm = e.target.value.toLowerCase();
        searchProjects(searchTerm);
    }, 300));
}

function searchProjects(searchTerm) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = card.querySelector('p')?.textContent.toLowerCase() || '';
        const technologies = Array.from(card.querySelectorAll('.tech-tag'))
            .map(tag => tag.textContent.toLowerCase()).join(' ');
        
        const searchContent = `${title} ${description} ${technologies}`;
        const shouldShow = searchContent.includes(searchTerm);
        
        card.style.display = shouldShow ? 'block' : 'none';
    });
    
    // Show "no results" message if needed
    const visibleCards = document.querySelectorAll('.project-card[style*="block"]');
    showNoResultsMessage(visibleCards.length === 0);
}

function showNoResultsMessage(show) {
    let noResultsMsg = document.querySelector('.no-results-message');
    
    if (show && !noResultsMsg) {
        noResultsMsg = document.createElement('div');
        noResultsMsg.className = 'no-results-message';
        noResultsMsg.innerHTML = `
            <div class="no-results-content">
                <i class="fas fa-search"></i>
                <h3>Keine Projekte gefunden</h3>
                <p>Versuchen Sie andere Suchbegriffe oder Filter.</p>
            </div>
        `;
        
        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid) {
            projectsGrid.appendChild(noResultsMsg);
        }
    } else if (!show && noResultsMsg) {
        noResultsMsg.remove();
    }
}

// Project animations
function initProjectAnimations() {
    // Stagger animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        projectCards.forEach(card => {
            observer.observe(card);
        });
    }
}

// Project sharing functionality
function shareProject(projectId, platform) {
    const project = getProjectModalData(projectId);
    if (!project) return;
    
    const url = window.location.href;
    const text = `Schaut euch mein Projekt "${project.title}" an!`;
    
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        email: `mailto:?subject=${encodeURIComponent(project.title)}&body=${encodeURIComponent(text + ' ' + url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        
        window.portfolioUtils?.trackEvent('project_shared', {
            project: projectId,
            platform: platform
        });
    }
}

// Export functions
window.projectUtils = {
    openProjectModal,
    closeProjectModal,
    shareProject,
    filterProjects,
    searchProjects
};
