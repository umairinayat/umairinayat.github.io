// Data for Projects
const projects = [
    {
        title: "Transformer from Scratch",
        description: "Implemented a full Transformer architecture from scratch using PyTorch, featuring Multi-Head Attention and Positional Encodings.",
        tech: ["PyTorch", "NLP", "Deep Learning"],
        links: {
            github: "https://github.com/umairinayat/Transformer-from-scratch",
            demo: "#"
        },
        icon: "fa-robot"
    },
    {
        title: "AI Research Assistant",
        description: "An intelligent assistant capable of summarizing research papers and answering questions using RAG (Retrieval-Augmented Generation).",
        tech: ["LangChain", "OpenAI API", "Vector DB"],
        links: {
            github: "https://github.com/umairinayat/AI-Research-Assistant",
            demo: "#"
        },
        icon: "fa-microchip"
    },
    {
        title: "Plant Disease Detection",
        description: "Computer Vision model to detect plant diseases from leaf images using Convolutional Neural Networks (CNNs).",
        tech: ["TensorFlow", "OpenCV", "CNN"],
        links: {
            github: "https://github.com/umairinayat/Plant-Disease-Detection",
            demo: "#"
        },
        icon: "fa-leaf"
    },
    {
        title: "MiniLang++ Compiler",
        description: "A custom compiler for a subset of C++ language, including lexical analysis, parsing, and semantic analysis phases.",
        tech: ["C++", "Compiler Design", "Flex/Bison"],
        links: {
            github: "https://github.com/umairinayat/MiniLangPP-Compiler",
            demo: "#"
        },
        icon: "fa-code"
    },
    {
        title: "EmotiEase",
        description: "Real-time emotion recognition system designed to help users understand and manage their emotional well-being.",
        tech: ["Python", "Face Recognition", "ML"],
        links: {
            github: "https://github.com/umairinayat/EmotiEase",
            demo: "#"
        },
        icon: "fa-smile"
    },
    {
        title: "100 Days of CUDA",
        description: "Intensive 100-day journey mastering parallel computing and GPU programming with CUDA C++ for high-performance ML ops.",
        tech: ["CUDA", "C++", "HPC"],
        links: {
            github: "https://github.com/umairinayat/100-days-of-cuda",
            demo: "#"
        },
        icon: "fa-memory"
    },
    {
        title: "Heart Disease Prediction",
        description: "Predictive model for early heart disease detection used in clinical decision support systems. Optimized for high sensitivity.",
        tech: ["Scikit-learn", "Pandas", "HealthTech"],
        links: {
            github: "https://github.com/umairinayat/Heart-Disease-Prediction",
            demo: "#"
        },
        icon: "fa-heartbeat"
    },
    {
        title: "Banking System",
        description: "Robust banking management application handling user accounts, secure transactions, and persistence.",
        tech: ["C++", "File Handling", "Security"],
        links: {
            github: "https://github.com/umairinayat/Banking-management-system",
            demo: "#"
        },
        icon: "fa-university"
    }
];

// Typewriter Effect
const typewriterText = ["Machine Learning Engineer.", "Data Scientist.", "Deep Learning Researcher."];
const typewriterElement = document.getElementById("typewriter");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentText = typewriterText[textIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterText.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Render Projects
function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="window.open('${project.links.github}', '_blank')">
            <div class="card-top">
                <div class="dot red"></div>
                <div class="dot yellow"></div>
                <div class="dot green"></div>
            </div>
            <div class="card-body">
                <i class="fas ${project.icon} project-icon"></i>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.links.github}" target="_blank" class="project-link" title="GitHub Code"><i class="fab fa-github"></i></a>
                    <a href="${project.links.demo}" class="project-link" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// Mobile Menu Toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("open");
        navMenu.classList.toggle("open");
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navToggle.classList.remove("open");
        navMenu.classList.remove("open");
    });
});

// Custom Cursor (Optional but "Premium")
const cursorDot = document.getElementById("cursor-dot");
const cursorOutline = document.getElementById("cursor-outline");

if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Simple follow
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Trailing effect using simple animation api or just css transition
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
}

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
        navbar.style.background = "rgba(10, 10, 10, 0.95)";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(10, 10, 10, 0.85)";
    }
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
    renderProjects();
});