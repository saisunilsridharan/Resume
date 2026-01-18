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
    document.getElementById('emudhra-expirence-date').textContent = `${years} Years, ${months} Months, and ${days} Days (Total: ${diffInDays} Days)`;
});

// Audio Resume Feature
let audioResumeText = `
Hello! I'm Saisunil Sridharan, and I'm excited to share a bit about myself with you.

I'm a Software Engineer based in Bengaluru, and I've been working in the cybersecurity and PKI space for over 3 and a half years now. If you'd like to connect, you can reach me at saisunilsri@gmail.com or call me at 9159058924.

Let me tell you about my journey. I specialize in Public Key Infrastructure, Identity and Access Management, and Cyber Security. What I really enjoy is taking complex security challenges and turning them into robust, scalable solutions. I've had the privilege of working on full lifecycle development - from the initial system design all the way through to product delivery - using technologies like Java, Spring Boot, and Microservices.

One thing I'm particularly proud of is my experience in modernizing legacy systems. I've led migrations from Java 8 all the way up to Java 21, which is quite an undertaking! I've also implemented various cryptographic protocols like OAuth 2.0 and X.509 certificates.

Now, let me share some of the exciting technologies I work with. I'm really passionate about AI and automation, so I use tools like Antigravity, Gemini CLI, Claude CLI, and n8n. I also work with Model Context Protocol, RAG systems, and Small Language Models.

My core programming languages are Java - specifically versions 8, 17, and 21 - along with Python and JavaScript. For frameworks, I primarily use Spring Boot and Spring AI, Angular for front-end work, JavaFX for desktop applications, and Hibernate for database management.

Security is where I really shine. I work extensively with PKI, OAuth 2.0, OIDC, JWT tokens, LDAP, SSL and X.509 certificates, Hardware Security Modules, OpenSSL, and I'm even exploring Post-Quantum Cryptography to prepare for the future of secure communications.

On the cloud side, I'm experienced with Azure DevOps - including CI/CD pipelines and Infrastructure as Code - Azure IAM, and AWS services like EC2 and S3. I also work with the ELK Stack for logging and monitoring.

For databases, I'm comfortable with PostgreSQL, MySQL, Oracle 21c, and Redis. I work with various protocols and standards including REST APIs, SOAP, XML, JSON, CBOR, and WSDL.

I follow architectural patterns like MVC using JSP and J2EE, and I design Microservices architectures with both REST and SOAP APIs. My build tools include Maven, Gradle, and Docker, and I deploy on servers like Tomcat, Netty, and Nginx.

Beyond technical skills, I pride myself on being a strong team player. I'm good at problem-solving, debugging complex issues, critical thinking, and communicating technical concepts clearly to both technical and non-technical audiences.

My interests span across Research and Development, Software Development, Cyber Security, Blockchain technology, and Project Management.

Currently, I'm working as a Software Engineer at eMudhra in Bangalore. I joined in June 2022, and it's been an incredible journey of almost 4 years now. At eMudhra, we're a licensed Certifying Authority serving both government and private sectors. I develop PKIaaS solutions, Digital Signatures, and Identity Management Systems. I manage the full Software Development Life Cycle for multiple applications, ensuring we deliver high-quality products.

Some of the products I've worked on include Private CA, Time Stamp Authority, OCSP, National Public Key Directory, SPOC, TCC, V2X Security CERT, and mobile Driver License systems.

Let me tell you about my educational background. I earned my Bachelor of Engineering in Computer Science from Ganadipathy Tulsi's Jain Engineering College, which is affiliated with Anna University in Vellore. I completed that from August 2018 to April 2021. Before that, I did my Diploma in Computer Engineering from Sri Venkateswara Polytechnic College in Vellore, from June 2015 to April 2018.

Now, here are some projects I'm really excited about.

First, there's eMCP - the eMudhra Model Context Protocol. I engineered this application using Java 21, Spring Boot, and Spring AI to establish a protocol for intelligent data communication between systems. It's been fascinating work!

Then there's mDL - the Mobile Driver License project. I built a complete digital identification solution using Java 21, Spring Boot, and Angular 17. We implemented CBOR, JSON, and XML serialization to make sure everything works seamlessly across different systems.

I also worked on emCA, which is our Private CA and PKIaaS solution. This was a massive undertaking where I led the migration from JDK 8 to JDK 17 and then to JDK 21. I integrated Single Sign-On using SAML and LDAP - that alone accounted for 60% of our code changes! We enhanced the infrastructure by implementing OCSP, timestamping, and extensive protocol support.

Another interesting project was the National Public Key Directory, or nPKD. I developed this to interface with ICAO PKD, which enables secure exchange of ePassport authentication data via LDAP. I implemented schedulers for automated maintenance of certificates, Certificate Revocation Lists, and Master Lists, all following ICAO standards.

I also spearheaded the SecurePass Identity Management System migration from Java 8 to Java 17, completely restructuring our security protocols to make the system architecture more robust.

One of my favorite projects from my academic days was a Speech to Scenario Simulation system using NLP and Deep Learning. I designed a voice-to-simulation generator using Python 3, PyTorch, TensorFlow, and NLP techniques to translate vocal inputs into dynamic visual simulations. It was primarily for educational research, and it was amazing to see it come to life!

I'm also committed to continuous learning. I've earned several certifications including the Atlassian Agile Project Management Professional Certificate from LinkedIn and Atlassian, the Developing Secure Software certification from The Linux Foundation, the ISO/IEC 42001:2023 Artificial Intelligence Management System certification from Alison, and CompTIA Security Plus from Cybrary.

So that's me in a nutshell! I'm passionate about security, love solving complex problems, and I'm always eager to learn new technologies and take on challenging projects. Thanks so much for taking the time to listen to my introduction. I'd love to connect and discuss how I can contribute to your team or project!
`;

let speechSynthesis = window.speechSynthesis;
let utterance = null;
let isPlaying = false;

// Audio control settings
let audioSettings = {
    volume: 1.0,
    rate: 1.0,
    pitch: 1.0,
    voice: null
};

const audioResumeBtn = document.getElementById('audio-resume-btn');
const audioControlsPanel = document.getElementById('audio-controls-panel');
const volumeControl = document.getElementById('volume-control');
const speedControl = document.getElementById('speed-control');
const pitchControl = document.getElementById('pitch-control');
const voiceSelect = document.getElementById('voice-select');
const volumeValue = document.getElementById('volume-value');
const speedValue = document.getElementById('speed-value');
const pitchValue = document.getElementById('pitch-value');
const resetBtn = document.getElementById('reset-controls');
const closeControlsBtn = document.getElementById('close-controls');
const progressBar = document.getElementById('audio-progress-bar');
const currentTimeSpan = document.getElementById('current-time');
const totalTimeSpan = document.getElementById('total-time');

let progressInterval = null;

// Load available voices
function loadVoices() {
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0 && voiceSelect) {
        voiceSelect.innerHTML = '<option value="">Default Voice</option>';
        voices.forEach((voice, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }
}

// Load voices on page load and when voices change
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
}
loadVoices();

// Voice selection
if (voiceSelect) {
    voiceSelect.addEventListener('change', function () {
        const voices = speechSynthesis.getVoices();
        audioSettings.voice = this.value ? voices[parseInt(this.value)] : null;
        if (utterance && speechSynthesis.speaking) {
            restartAudioWithNewSettings();
        }
    });
}

// Close controls button
if (closeControlsBtn) {
    closeControlsBtn.addEventListener('click', function () {
        audioControlsPanel.classList.remove('active');
    });
}

// Format time in MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update progress bar
function updateProgress() {
    if (!utterance || !speechSynthesis.speaking) {
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
        return;
    }

    // Estimate progress based on text length and speech rate
    const textLength = audioResumeText.length;
    const estimatedDuration = (textLength / 15) / audioSettings.rate; // Rough estimate: 15 chars per second
    const elapsed = (Date.now() - utterance.startTime) / 1000;
    const progress = Math.min((elapsed / estimatedDuration) * 100, 100);

    if (progressBar) {
        progressBar.style.setProperty('--progress', progress + '%');
        progressBar.style.width = progress + '%';
    }

    if (currentTimeSpan) {
        currentTimeSpan.textContent = formatTime(elapsed);
    }

    if (totalTimeSpan) {
        totalTimeSpan.textContent = formatTime(estimatedDuration);
    }
}

// Volume control
if (volumeControl) {
    volumeControl.addEventListener('input', function () {
        audioSettings.volume = parseFloat(this.value);
        volumeValue.textContent = Math.round(audioSettings.volume * 100) + '%';
        if (utterance && speechSynthesis.speaking) {
            restartAudioWithNewSettings();
        }
    });
}

// Speed control
if (speedControl) {
    speedControl.addEventListener('input', function () {
        audioSettings.rate = parseFloat(this.value);
        speedValue.textContent = audioSettings.rate.toFixed(1) + 'x';
        if (utterance && speechSynthesis.speaking) {
            restartAudioWithNewSettings();
        }
    });
}

// Pitch control
if (pitchControl) {
    pitchControl.addEventListener('input', function () {
        audioSettings.pitch = parseFloat(this.value);
        pitchValue.textContent = audioSettings.pitch.toFixed(1);
        if (utterance && speechSynthesis.speaking) {
            restartAudioWithNewSettings();
        }
    });
}

// Reset controls
if (resetBtn) {
    resetBtn.addEventListener('click', function () {
        audioSettings = { volume: 1.0, rate: 1.0, pitch: 1.0 };
        volumeControl.value = 1.0;
        speedControl.value = 1.0;
        pitchControl.value = 1.0;
        volumeValue.textContent = '100%';
        speedValue.textContent = '1.0x';
        pitchValue.textContent = '1.0';
        if (utterance && speechSynthesis.speaking) {
            restartAudioWithNewSettings();
        }
    });
}

function restartAudioWithNewSettings() {
    if (!speechSynthesis.speaking) return;

    speechSynthesis.cancel();

    utterance = new SpeechSynthesisUtterance(audioResumeText);
    utterance.rate = audioSettings.rate;
    utterance.pitch = audioSettings.pitch;
    utterance.volume = audioSettings.volume;
    if (audioSettings.voice) {
        utterance.voice = audioSettings.voice;
    }
    utterance.startTime = Date.now();

    utterance.onstart = function () {
        isPlaying = true;
        audioResumeBtn.classList.add('playing');
        audioResumeBtn.innerHTML = '<i class="fas fa-pause"></i><span class="audio-text">Pause</span>';
        audioControlsPanel.classList.add('active');

        // Start progress tracking
        if (progressInterval) clearInterval(progressInterval);
        progressInterval = setInterval(updateProgress, 100);
    };

    utterance.onend = function () {
        isPlaying = false;
        audioResumeBtn.classList.remove('playing');
        audioResumeBtn.classList.remove('paused');
        audioResumeBtn.innerHTML = '<i class="fas fa-volume-up"></i><span class="audio-text">Audio Resume</span>';

        // Clear progress
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
        if (progressBar) progressBar.style.width = '0%';
        if (currentTimeSpan) currentTimeSpan.textContent = '0:00';
    };

    speechSynthesis.speak(utterance);
}

if (audioResumeBtn) {
    audioResumeBtn.addEventListener('click', function () {
        if (!isPlaying) {
            // Start playing
            if (speechSynthesis.speaking) {
                speechSynthesis.cancel();
            }

            utterance = new SpeechSynthesisUtterance(audioResumeText);
            utterance.rate = audioSettings.rate;
            utterance.pitch = audioSettings.pitch;
            utterance.volume = audioSettings.volume;
            if (audioSettings.voice) {
                utterance.voice = audioSettings.voice;
            }
            utterance.startTime = Date.now();

            utterance.onstart = function () {
                isPlaying = true;
                audioResumeBtn.classList.add('playing');
                audioResumeBtn.innerHTML = '<i class="fas fa-pause"></i><span class="audio-text">Pause</span>';
                audioControlsPanel.classList.add('active');

                // Start progress tracking
                if (progressInterval) clearInterval(progressInterval);
                progressInterval = setInterval(updateProgress, 100);
            };

            utterance.onend = function () {
                isPlaying = false;
                audioResumeBtn.classList.remove('playing');
                audioResumeBtn.classList.remove('paused');
                audioResumeBtn.innerHTML = '<i class="fas fa-volume-up"></i><span class="audio-text">Audio Resume</span>';

                // Clear progress
                if (progressInterval) {
                    clearInterval(progressInterval);
                    progressInterval = null;
                }
                if (progressBar) progressBar.style.width = '0%';
                if (currentTimeSpan) currentTimeSpan.textContent = '0:00';
            };

            speechSynthesis.speak(utterance);
        } else {
            // Pause/Resume
            if (speechSynthesis.speaking && !speechSynthesis.paused) {
                speechSynthesis.pause();
                audioResumeBtn.classList.add('paused');
                audioResumeBtn.classList.remove('playing');
                audioResumeBtn.innerHTML = '<i class="fas fa-play"></i><span class="audio-text">Resume</span>';
            } else if (speechSynthesis.paused) {
                speechSynthesis.resume();
                audioResumeBtn.classList.remove('paused');
                audioResumeBtn.classList.add('playing');
                audioResumeBtn.innerHTML = '<i class="fas fa-pause"></i><span class="audio-text">Pause</span>';
            }
        }
    });
}





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