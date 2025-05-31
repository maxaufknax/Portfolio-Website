// Project-specific JavaScript functionality

let allProjectsData = {};

async function loadProjectsData() {
    try {
        const response = await fetch('../data/projects.json'); // Adjusted path
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        allProjectsData = await response.json();
        renderProjectCards();
        initProjectFilters(); // Call after cards are rendered
        initProjectSearch();  // Call after cards are rendered
        initProjectModals();  // Modals might depend on cards or data
    } catch (error) {
        console.error("Could not load projects data:", error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadProjectsData();
});

function renderProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) {
        console.error("Projects grid not found!");
        return;
    }
    projectsGrid.innerHTML = ''; // Clear existing content

    for (const projectId in allProjectsData) {
        const project = allProjectsData[projectId];
        const card = document.createElement('div');
        card.className = `project-card ${project.featured ? 'featured' : ''}`;
        card.dataset.project = projectId;
        card.dataset.categories = project.categories ? project.categories.join(',') : ''; // Assuming categories is an array

        // Determine image path, assuming a default or project-specific image
        const imagePath = project.images && project.images.length > 0 ? project.images[0] : '../images/placeholder.jpg'; // Adjusted path
        const overlayIcon = project.overlayIcon || 'fas fa-eye'; // Default icon

        card.innerHTML = `
            <div class="project-image">
                <div class="project-overlay">
                    <i class="${overlayIcon}"></i>
                </div>
                ${project.status ? `<div class="project-status"><span class="status-badge ${project.status.type || ''}">${project.status.text || ''}</span></div>` : ''}
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h3>${project.title}</h3>
                    ${project.year ? `<div class="project-year">${project.year}</div>` : ''}
                </div>
                <p>${project.subtitle || project.description.substring(0, 100) + '...'}</p>
                <div class="project-tech">
                    ${project.technologies.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <a href="${project.detailsLink || `projects/${projectId}.html`}" class="btn btn-primary">
                        <i class="fas fa-info-circle"></i> Details
                    </a>
                    ${project.github ? `<a href="${project.github}" class="btn btn-secondary" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" class="btn btn-outline" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                </div>
            </div>
        `;
        // Set project image dynamically
        const projectImageDiv = card.querySelector('.project-image');
        if (projectImageDiv) {
             projectImageDiv.style.backgroundImage = `url('${imagePath}')`;
        }

        projectsGrid.appendChild(card);
    }
    initProjectCards();
    initProjectAnimations();
    initProjectStatsAnimation(); // Initialize stats animation
}

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
    return allProjectsData[projectId];
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

function initProjectStatsAnimation() {
    if (document.querySelector('.project-stats')) {
        const animateStats = () => {
            const stats = document.querySelectorAll('.stat-number');

            stats.forEach(stat => {
                const target = parseInt(stat.dataset.count);
                // Ensure target is a number and not NaN
                if (isNaN(target)) {
                    stat.textContent = stat.dataset.count; // Display original text if not a number
                    return;
                }

                const increment = Math.max(1, target / 100); // Ensure increment is at least 1
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current);
                }, 20); // Animation speed
            });
        };

        const statsSection = document.querySelector('.project-stats');
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateStats();
                observer.disconnect(); // Ensure animation runs only once
            }
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        observer.observe(statsSection);
    }
}
