(function($) {
    "use strict";

    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('#mainNav').addClass('scrolled');
            $('#backToTop').addClass('visible');
        } else {
            $('#mainNav').removeClass('scrolled');
            $('#backToTop').removeClass('visible');
        }
    });

    $('.navbar-nav a').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800, 'easeInOutExpo');
            
            if ($(window).width() < 992) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });

    function initParticles() {
        const container = document.getElementById('particles-container');
        if (!container) return;
        
        const particleCount = 80;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: rgba(11, 206, 175, ${Math.random() * 0.5 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${Math.random() * 20 + 10}s linear infinite;
                animation-delay: ${Math.random() * 10}s;
            `;
            container.appendChild(particle);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0%, 100% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% {
                    transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function initTypedEffect() {
        const typedStrings = document.querySelector('.typed-strings');
        if (typedStrings && typeof Typed !== 'undefined') {
            const strings = typedStrings.textContent.split(',').map(s => s.trim());
            new Typed('.typed-text-output', {
                strings: strings,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
                startDelay: 1000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }

    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }

    function initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress .progress-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 200);
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
    }

    function initSkillsChart() {
        const ctx = document.getElementById('skillsChart');
        if (!ctx || typeof Chart === 'undefined') return;
        
        const skillsData = {
            labels: ['Java Spring Boot', 'React.js', 'Node.js', 'MySQL', 'MongoDB', 'JavaScript'],
            datasets: [{
                label: 'Proficiency',
                data: [95, 90, 88, 90, 85, 92],
                backgroundColor: [
                    'rgba(11, 206, 175, 0.8)',
                    'rgba(102, 126, 234, 0.8)',
                    'rgba(245, 87, 108, 0.8)',
                    'rgba(79, 172, 254, 0.8)',
                    'rgba(253, 121, 168, 0.8)',
                    'rgba(0, 242, 254, 0.8)'
                ],
                borderColor: [
                    'rgba(11, 206, 175, 1)',
                    'rgba(102, 126, 234, 1)',
                    'rgba(245, 87, 108, 1)',
                    'rgba(79, 172, 254, 1)',
                    'rgba(253, 121, 168, 1)',
                    'rgba(0, 242, 254, 1)'
                ],
                borderWidth: 2,
                hoverOffset: 15
            }]
        };

        const config = {
            type: 'doughnut',
            data: skillsData,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#ffffff',
                            padding: 20,
                            font: { size: 12, family: 'Poppins' },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(18, 18, 18, 0.9)',
                        titleColor: '#ffffff',
                        bodyColor: '#a0a0a0',
                        borderColor: 'rgba(11, 206, 175, 0.5)',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: true,
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 2000,
                    easing: 'easeOutQuart'
                },
                cutout: '60%'
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    new Chart(ctx, config);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(ctx);
    }

    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = document.getElementById('submitBtn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            const formStatus = document.getElementById('formStatus');

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                formStatus.innerHTML = '<div class="alert alert-danger">Please fill in all required fields.</div>';
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
                return;
            }

            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            submitBtn.disabled = true;
            formStatus.innerHTML = '';

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, subject, message })
                });

                const data = await response.json();

                if (response.ok) {
                    formStatus.innerHTML = '<div class="alert alert-success"><i class="fas fa-check-circle mr-2"></i>' + data.message + '</div>';
                    form.reset();
                } else {
                    formStatus.innerHTML = '<div class="alert alert-danger"><i class="fas fa-exclamation-circle mr-2"></i>' + data.error + '</div>';
                }
            } catch (error) {
                formStatus.innerHTML = '<div class="alert alert-warning"><i class="fas fa-exclamation-triangle mr-2"></i>Email service unavailable. Contact directly at srivastavarohan3125@gmail.com</div>';
            }

            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;

            setTimeout(() => { formStatus.innerHTML = ''; }, 5000);
        });
    }

    function initBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            backToTop.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    function initNavbarScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    }

    $(document).ready(function() {
        initParticles();
        initTypedEffect();
        animateCounters();
        initSkillBars();
        initSkillsChart();
        initContactForm();
        initBackToTop();
        initNavbarScrollSpy();
    });

})(jQuery);
