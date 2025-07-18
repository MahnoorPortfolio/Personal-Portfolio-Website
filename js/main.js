document.addEventListener("DOMContentLoaded", () => {
    // Typing animation
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const text = "A Full-Stack Developer";
        let index = 0;

        function type() {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
    }

    const counters = document.querySelectorAll('.counter');
    const speed = 3000; // The lower the slower

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
                observer.unobserve(counter); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });

    // ScrollReveal animations
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true
    });

    sr.reveal('.hero-content, .section-title');
    sr.reveal('.hero-image', {origin: 'bottom'});
    sr.reveal('.stat-item', {interval: 200});
    sr.reveal('.service-card, .project-card', {interval: 200});
    sr.reveal('.about-image', {origin: 'left'});
    sr.reveal('.about-content', {origin: 'right'});
    sr.reveal('.contact-form', {origin: 'bottom'});

    // Active nav link
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Contact Form submission with validation
    const form = document.getElementById('contact-form');
    if (form) {
        const formStatus = document.getElementById('form-status');

        form.addEventListener("submit", async function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let isValid = true;

            // Clear previous status
            formStatus.innerHTML = '';
            formStatus.style.color = 'red'; // Default to red for errors

            if (name === '') {
                formStatus.innerHTML += 'Name is required.<br>';
                isValid = false;
            }
            if (email === '') {
                formStatus.innerHTML += 'Email is required.<br>';
                isValid = false;
            } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                formStatus.innerHTML += 'Please enter a valid email address.<br>';
                isValid = false;
            }
            if (message === '') {
                formStatus.innerHTML += 'Message is required.<br>';
                isValid = false;
            }

            if (!isValid) {
                return; // Stop if form is invalid
            }

            // If valid, proceed with submission
            formStatus.innerHTML = 'Sending...';
            formStatus.style.color = 'var(--text-secondary-color)';

            const data = new FormData(event.target);
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    formStatus.innerHTML = "Thanks for your submission!";
                    formStatus.style.color = 'var(--primary-color)';
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            formStatus.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            formStatus.innerHTML = "Oops! There was a problem submitting your form";
                        }
                    }).catch(() => {
                        formStatus.innerHTML = "Oops! There was a problem submitting your form";
                    });
                }
            }).catch(error => {
                formStatus.innerHTML = "Oops! There was a problem submitting your form";
            });
        });
    }

    // Project card tilt effect
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top; 

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Tilt strength
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
});