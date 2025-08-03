// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add current year to footer
document.querySelector('.footer').querySelector('p:first-child').textContent = 
    `© ${new Date().getFullYear()} Umair Inayat. All rights reserved.`;

document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

// Enhanced Portfolio Website JavaScript
class PortfolioWebsite {
    constructor() {
        this.currentSection = 'home';
        this.isScrolling = false;
        this.particles = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeParticles();
        this.setupAnimations();
        this.setupProjectPages();
        this.setupContactForm();
        this.setupTypingEffect();
        this.setupScrollAnimations();
        this.setupMobileNavigation();
        this.setupPerformanceOptimizations();
    }

    setupEventListeners() {
        // Navigation
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    navMenu.classList.remove('active');
                }
            });
        });

        // Portfolio card interactions
        document.querySelectorAll('.portfolio-card').forEach(card => {
            card.addEventListener('mouseenter', this.handleCardHover.bind(this));
            card.addEventListener('click', this.handleCardClick.bind(this));
        });

        // Window events
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
        window.addEventListener('load', this.handleLoad.bind(this));
    }

    setupProjectPages() {
        // Create dynamic project pages
        const projects = [
            {
                id: 'banking-management-system',
                title: 'Banking Management System',
                tech: 'C++ • OOP • Banking • Systems',
                description: 'A comprehensive banking management system semester project built using object-oriented programming principles in C++, featuring account management, transactions, and security features.',
                github: 'https://github.com/umairinayat/Banking-management-system',
                features: [
                    'Account creation and management (Savings, Current, Fixed Deposit)',
                    'Secure transaction processing (Deposit, Withdrawal, Transfer)',
                    'Interest calculation and balance management',
                    'User authentication and authorization',
                    'Transaction history and reporting',
                    'Data persistence and file management'
                ],
                techStack: ['C++', 'Object-Oriented Programming', 'File I/O', 'Data Structures', 'Algorithms']
            },
            {
                id: 'transformer-from-scratch',
                title: 'Transformer from Scratch',
                tech: 'PyTorch • Deep Learning • NLP',
                description: 'Complete PyTorch implementation of Transformer architecture from scratch, including Scaled Dot-Product Attention, Multi-Head Attention, and Positional Encoding components.',
                github: 'https://github.com/umairinayat/Transformer-from-scratch',
                features: [
                    'Scaled Dot-Product Attention mechanism',
                    'Multi-Head Attention with configurable heads',
                    'Positional Encoding (sinusoidal and learned)',
                    'Feed-Forward Networks with residual connections',
                    'Layer Normalization',
                    'Encoder and Decoder blocks'
                ],
                techStack: ['PyTorch', 'Python', 'Deep Learning', 'NLP', 'Attention Mechanisms']
            },
            {
                id: 'heart-disease-prediction',
                title: 'Heart Disease Prediction',
                tech: 'Python • ML • Healthcare • Data Science',
                description: 'Machine learning model for predicting heart disease using clinical data. Features data preprocessing, model training, evaluation, and visualization for medical diagnosis support.',
                github: 'https://github.com/umairinayat/Heart-Disease-Prediction',
                features: [
                    'Comprehensive data preprocessing and feature engineering',
                    'Multiple ML algorithms (Random Forest, SVM, Logistic Regression)',
                    'Model performance evaluation and comparison',
                    'Feature importance analysis and visualization',
                    'Cross-validation and hyperparameter tuning'
                ],
                techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
            }
        ];

        // Add project detail buttons to portfolio cards
        projects.forEach(project => {
            const card = document.querySelector(`[data-project="${project.id}"]`);
            if (card) {
                const linksContainer = card.querySelector('.portfolio-links');
                if (linksContainer) {
                }
            }
        });
    }
}