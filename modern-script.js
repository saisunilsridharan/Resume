// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.skill-item, .experience-item, .education-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

// Add menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('active') &&
        !e.target.closest('.nav-links') &&
        !e.target.closest('.menu-toggle')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Theme toggle button
const themeToggle = document.createElement('button');
themeToggle.classList.add('theme-toggle');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(themeToggle);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Check system theme preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Account for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Navbar effect on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Navbar transparency
    if (currentScroll > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Typing animation for hero title
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';

    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };

    type();
};

// Initialize hero animations
window.addEventListener('load', () => {


    const heroTitle = document.querySelector('.hero h1');
    const heroText = heroTitle.textContent;
    typeWriter(heroTitle, heroText, 100);

    // Fade in hero content
    document.querySelector('.hero-content').style.opacity = '1';

    const startDate = new Date('2022-06-29');
    const endDate = new Date();

    const diffInMilliseconds = endDate - startDate;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffInDays / 365);
    const remainingDaysAfterYears = diffInDays % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const days = remainingDaysAfterYears % 30;

    //console.log(`Experience: ${years} years, ${months} months, and ${days} days.`);
    document.getElementById('emudhra-expirence-date').textContent = `${years} Years, ${months} Months, and ${days} Days.`;
});




// Add CSS classes for animations
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .fade-in {
            animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .hero-content {
            opacity: 0;
            transition: opacity 1s ease-out;
        }
        
        .skill-item, .experience-item, .education-item, .contact-item {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .skill-item:hover, .experience-item:hover, .education-item:hover, .contact-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }
    </style>
`);

// Skill icons animation
document.querySelectorAll('.skill-item i').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
});

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('i');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        }
    });

    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('i');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0)';
        }
    });
});

// Add smooth hover effect to social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.style.transition = 'transform 0.3s ease, color 0.3s ease';

    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px)';
        link.style.color = getComputedStyle(document.documentElement)
            .getPropertyValue('--secondary-color').trim();
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
        link.style.color = getComputedStyle(document.documentElement)
            .getPropertyValue('--text-color').trim();
    });
});