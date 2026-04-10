document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for scroll reveals
            const observerOptions = { threshold: 0.15 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // Parallax effect for Hero and specific images
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                document.querySelectorAll('.parallax-bg').forEach(bg => {
                    const speed = 0.5;
                    bg.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });

            // Smooth scroll for nav links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });