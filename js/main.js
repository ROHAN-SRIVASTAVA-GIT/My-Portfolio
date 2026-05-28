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

    const projectData = {
        rco: {
            title: 'National RCO Portal',
            subtitle: 'Frontend Developer | Client: Deloitte',
            details: [
                { heading: '🏛️ Regulatory Compliance Platform', text: 'Built scalable React.js and Redux components for a national regulatory compliance and operations management system. Served 10,000+ daily active users across 15+ application modules with seamless navigation and real-time data.' },
                { heading: '⚡ React Performance Engineering', text: 'Engineered reusable UI components using React Hooks, reducing feature development time by 30%. Achieved 25% page load improvement and 40% reduction in re-render cycles through targeted React optimization.' },
                { heading: '🔗 REST API Integration', text: 'Integrated REST APIs using Redux middleware for asynchronous data flow and centralized application state management across 15+ modules. Implemented React Router for seamless multi-module navigation.' }
            ],
            stats: ['👥 10,000+ Users', '⚡ 30% Faster Dev', '📦 15+ Modules'],
            tags: ['React.js', 'Redux', 'JavaScript ES6+', 'REST API', 'Bootstrap', 'Git']
        },
        rpo: {
            title: 'MSERC RPO Portal',
            subtitle: 'Frontend Developer | Client: Deloitte',
            details: [
                { heading: '⚡ Renewable Energy Compliance', text: 'Built the Maharashtra State Electricity Regulatory Commission Renewable Purchase Obligation Portal — a regulatory platform for managing renewable energy compliance and reporting for distribution companies across Maharashtra.' },
                { heading: '📊 Real-Time Data Visualization', text: 'Designed and launched real-time compliance dashboards with Recharts for renewable energy monitoring. Built complex form interfaces with client-side validation, reducing data entry errors by 60%.' },
                { heading: '🚀 Frontend Performance', text: 'Applied code-splitting and lazy loading strategies, cutting initial bundle load time by 35%. Maintained 95%+ code coverage through comprehensive unit testing with React Testing Library.' }
            ],
            stats: ['⚡ 35% Faster Load', '✅ 60% Fewer Errors', '🛡️ 95%+ Coverage'],
            tags: ['React.js', 'Redux', 'Recharts', 'JavaScript ES6+', 'REST API', 'Git']
        },
        dvc: {
            title: 'DVC ARIS Portal',
            subtitle: 'Full Stack Developer | Client: Deloitte',
            details: [
                { heading: '🏭 Asset & Compliance Management', text: 'Built a comprehensive asset registration and compliance management system for Damodar Valley Corporation (India\'s first multipurpose river valley project), managing 6,000+ assets across thermal, hydel, and transmission units with automated compliance tracking.' },
                { heading: '📊 KPI Dashboards', text: 'Developed 8 interactive KPI dashboards for real-time monitoring of asset performance, maintenance schedules, and compliance status — reducing manual reporting effort by 80%.' },
                { heading: '🚀 Backend Architecture', text: 'Designed scalable FastAPI microservices with PostgreSQL for high-volume asset data processing. Optimized database queries for sub-second dashboard load times across 6,000+ asset records.' },
                { heading: '🔐 Security & Access Control', text: 'Implemented role-based access control (RBAC) with JWT authentication, ensuring granular permissions across admin, operator, and auditor user roles for secure asset data management.' }
            ],
            stats: ['📦 6,000+ Assets', '📉 80% Less Manual Work', '📊 8 KPI Dashboards'],
            tags: ['React.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS', 'Redux']
        },
        airtel: {
            title: 'Airtel-Vodafone UK Telecom Self-Care Portal',
            subtitle: 'Backend Developer',
            details: [
                { heading: '🏢 Enterprise-Grade Microservices', text: 'Developed robust microservices architecture for user profile & plan management, handling 500K+ active sessions in production with zero downtime.' },
                { heading: '⚡ High-Speed Caching Strategy', text: 'Integrated Aerospike caching layer, achieving 35% reduction in API latency and offloading 60% of repeated database reads for improved performance.' },
                { heading: '🔄 DevOps Excellence', text: 'Configured comprehensive Jenkins CI/CD pipelines and OpenShift YAML manifests enabling seamless zero-downtime deployments across 4 environments (Dev, QA, Staging, Production).' }
            ],
            stats: ['👥 500K+ Users', '⚡ 35% Faster', '🖥️ 4 Environments'],
            tags: ['Java 11', 'Spring Boot', 'Microservices', 'Oracle', 'Aerospike', 'OpenShift', 'Jenkins']
        },
        smrd: {
            title: 'SMRD Tata Power Billing System',
            subtitle: 'Full Stack Developer',
            details: [
                { heading: '⚡ Smart Billing Engine', text: 'Architected advanced billing engine supporting 5+ tariff tiers, completely eliminating manual reconciliation for 10,000+ smart meters across operational zones.' },
                { heading: '🚀 Database Optimization', text: 'Optimized PostgreSQL schemas with advanced indexing and query optimization, achieving 45% faster report generation while supporting 3x data volume growth.' },
                { heading: '📊 Real-Time Visualization', text: 'Crafted interactive Angular dashboards for real-time meter visualization, dramatically reducing data-entry errors by 70% and improving operational efficiency.' }
            ],
            stats: ['⚡ 45% Faster', '📈 3x Scale', '✅ 70% Fewer Errors'],
            tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'AWS', 'Sentry']
        },
        nirapad: {
            title: 'Nirapad Udaan - IoT Road Safety Drone',
            subtitle: 'IoT | GIS | Embedded Systems',
            details: [
                { heading: '🚁 Autonomous Surveillance System', text: 'Developed cutting-edge drone surveillance system deployed across 12 road corridors, revolutionizing road safety monitoring in urban areas.' },
                { heading: '📍 GIS-Triggered Alerts', text: 'Implemented intelligent GIS-triggered alert system, cutting manual patrol dependency by 60% through autonomous incident detection and immediate notification.' },
                { heading: '🔗 IoT Integration', text: 'Integrated advanced IoT sensors with GIS mapping for comprehensive real-time road safety monitoring and data analytics dashboard.' }
            ],
            stats: ['🛣️ 12 Corridors', '🛡️ 60% Safer', '🛰️ IoT Powered'],
            tags: ['IoT', 'GIS', 'Embedded Systems', 'Python', 'Sensors']
        },
        ai: {
            title: 'AI Facial Recommendation Engine',
            subtitle: 'Machine Learning | Computer Vision',
            details: [
                { heading: '🧠 Advanced ML Model', text: 'Built state-of-the-art machine learning model trained on 10,000+ facial samples, achieving 87% relevance accuracy for facial recognition and intelligent recommendations.' },
                { heading: '🛠 Tech Stack', text: 'Developed using Python, Machine Learning, Computer Vision algorithms, and Flask for lightweight API deployment.' },
                { heading: '🏆 Competition Success', text: 'Secured 3rd Place at GEEK-O-THON 2023 organized by IIIT Bhubaneswar competing against 100+ teams nationwide.' }
            ],
            stats: ['🧠 87% Accuracy', '📊 10K+ Samples', '🏆 3rd Place'],
            tags: ['Python', 'ML', 'Computer Vision', 'Flask', 'OpenCV']
        }
    };

    const timelineData = {
        centroxy: {
            title: 'Software Engineer | Centroxy Solutions | Client: Deloitte',
            subtitle: 'Full Stack Developer & Backend Engineer | 2+ Years of Experience',
            sections: [
                {
                    heading: '🏢 Centroxy Direct Clients',
                    items: [
                        { label: 'Airtel-Vodafone UK Telecom', role: 'Backend Developer', period: 'Jun 2024 - Dec 2024', desc: 'Telecom domain — Microservices, Aerospike caching, CI/CD for 500K+ sessions' },
                        { label: 'SMRD Tata Power Billing System', role: 'Full Stack Developer', period: 'Sept 2025 - Mar 2026', desc: 'Energy domain — Angular dashboards, PostgreSQL optimization, billing engine' }
                    ]
                },
                {
                    heading: '🤝 Deputed to Deloitte (SDA)',
                    period: 'Mar 2025 - Present',
                    text: 'Delivered 5+ production-grade enterprise applications across telecom, energy, and regulatory domains.'
                },
                {
                    heading: '📋 Deloitte Projects Delivered',
                    items: [
                        { label: 'RPO', desc: 'MSERC RPO Portal (Energy Compliance)' },
                        { label: 'RCO', desc: 'National RCO Portal (Regulatory Compliance)' },
                        { label: 'DVC Consumer Portal', desc: 'Electricity Utility Platform' },
                        { label: 'DVC ARIS', desc: 'Asset & Compliance Management' }
                    ]
                },
                {
                    heading: '⚡ Impact Highlights',
                    text: 'Engineered REST APIs handling 10,000+ daily transactions with 90%+ backend test coverage. Improved page load speed by 25%, reduced re-render cycles by 40%, and cut release cycles by 20% via Jenkins/OpenShift CI/CD.'
                }
            ],
            stats: ['5+ Enterprise Projects', '2+ Yrs Experience'],
            tags: ['React.js', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Jenkins', 'OpenShift', 'REST APIs', 'Redux', 'Java', 'Angular', 'Microservices', 'AWS']
        }
    };

    function initTimelineModal() {
        const modal = document.getElementById('timelineDetailModal');
        if (!modal) return;

        const modalInstance = new bootstrap.Modal(modal);

        document.querySelectorAll('.timeline-clickable').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                const key = this.getAttribute('data-timeline');
                if (!key) return;
                const data = timelineData[key];
                if (!data) return;

                document.getElementById('timelineModalTitle').textContent = data.title;

                let body = '<h4>' + data.subtitle + '</h4>';
                data.sections.forEach(s => {
                    body += '<h5>' + s.heading + '</h5>';
                    if (s.items) {
                        body += '<ul class="timeline-modal-list">';
                        s.items.forEach(item => {
                            body += '<li><strong>' + item.label + '</strong>';
                            if (item.role) body += ' — ' + item.role;
                            if (item.period) body += ' <em>(' + item.period + ')</em>';
                            if (item.desc) body += '<br><span>' + item.desc + '</span>';
                            body += '</li>';
                        });
                        body += '</ul>';
                    }
                    if (s.text) {
                        body += '<p>' + s.text + '</p>';
                    }
                });

                body += '<div class="project-modal-stats">';
                data.stats.forEach(s => {
                    body += '<span>' + s + '</span>';
                });
                body += '</div>';

                body += '<div class="project-modal-tags">';
                data.tags.forEach(t => {
                    body += '<span>' + t + '</span>';
                });
                body += '</div>';

                document.getElementById('timelineModalBody').innerHTML = body;
                modalInstance.show();
            });
        });
    }

    function initProjectModals() {
        const modal = document.getElementById('projectDetailModal');
        if (!modal) return;

        const modalInstance = new bootstrap.Modal(modal);

        document.querySelectorAll('.project-card').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                const key = this.getAttribute('data-project');
                if (!key) return;
                const data = projectData[key];
                if (!data) return;

                document.getElementById('projectModalTitle').textContent = data.title;

                let body = '<h4>' + data.subtitle + '</h4>';
                data.details.forEach(d => {
                    body += '<h5>' + d.heading + '</h5><p>' + d.text + '</p>';
                });

                body += '<div class="project-modal-stats">';
                data.stats.forEach(s => {
                    body += '<span>' + s + '</span>';
                });
                body += '</div>';

                body += '<div class="project-modal-tags">';
                data.tags.forEach(t => {
                    body += '<span>' + t + '</span>';
                });
                body += '</div>';

                document.getElementById('projectModalBody').innerHTML = body;
                modalInstance.show();
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
        initTimelineModal();
        initProjectModals();
    });

})(jQuery);
