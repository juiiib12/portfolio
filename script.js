// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll buttons functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollDownBtn = document.getElementById("scrollDownBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
        scrollDownBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
        scrollDownBtn.style.display = "none";
    }

    // Hide scroll down button at the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        scrollDownBtn.style.display = "none";
    }

    // Add scrolled class to header for background change
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Animate sections on scroll
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollDown() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

scrollToTopBtn.addEventListener('click', scrollToTop);
scrollDownBtn.addEventListener('click', scrollDown);

// Project details toggle
const projectDetailsBtns = document.querySelectorAll('.project-details-btn');
projectDetailsBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const details = this.nextElementSibling;
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            this.textContent = 'Hide Details';
        } else {
            details.style.display = 'none';
            this.textContent = 'View Details';
        }
    });
});

// Skill bar animation
const skillLevels = document.querySelectorAll('.skill-level');
const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-level');
        }
    });
};

const skillObserver = new IntersectionObserver(animateSkills, { threshold: 0.5 });
skillLevels.forEach(level => skillObserver.observe(level));

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.classList.add('dark-mode-toggle');
darkModeToggle.innerHTML = '🌓';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Add custom cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Parallax effect for section backgrounds
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const scrollPosition = window.pageYOffset;
        section.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
});

// Add hover effect to navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px)';
        link.style.color = '#ffb74d';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
        link.style.color = '';
    });
});

// Add a simple loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    document.body.appendChild(loader);

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
});

// Add a simple form validation for the contact form
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name && email && message) {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Add a simple animation to skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Add a typing effect to the header
const headerTitle = document.querySelector('header h1');
const headerText = headerTitle.textContent;
headerTitle.textContent = '';
let i = 0;

function typeWriter() {
    if (i < headerText.length) {
        headerTitle.textContent += headerText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start the typing effect when the page loads
window.addEventListener('load', typeWriter);

// Add a scroll progress indicator
const progressBar = document.createElement('div');
progressBar.classList.add('scroll-progress');
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

