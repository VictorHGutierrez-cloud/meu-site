// Advanced Features for Ultimate Website Experience
// This file contains cutting-edge interactive features

class AdvancedWebsiteFeatures {
    constructor() {
        this.init();
    }

    init() {
        this.setupParticleSystem();
        this.setupAdvancedAnimations();
        this.setupInteractiveElements();
        this.setupPerformanceOptimizations();
        this.setupAccessibilityFeatures();
    }

    // Particle System for Background
    setupParticleSystem() {
        const canvas = document.createElement('canvas');
        canvas.id = 'particleCanvas';
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.3;
        `;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                this.opacity += (Math.random() - 0.5) * 0.02;
                this.opacity = Math.max(0.1, Math.min(0.8, this.opacity));
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // Advanced GSAP Animations
    setupAdvancedAnimations() {
        // Stagger animations for cards
        gsap.from('.card-hover', {
            scrollTrigger: {
                trigger: '.card-hover',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotation: 5,
            ease: 'back.out(1.7)',
            stagger: 0.1
        });

        // Text reveal animations
        gsap.from('.gradient-text', {
            scrollTrigger: {
                trigger: '.gradient-text',
                start: 'top 80%'
            },
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });

        // Parallax scrolling effects
        gsap.to('.floating-elements', {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1
            },
            y: -200,
            ease: 'none'
        });

        // Morphing shapes animation
        this.createMorphingShapes();
    }

    // Create morphing geometric shapes
    createMorphingShapes() {
        const shapes = document.createElement('div');
        shapes.className = 'morphing-shapes';
        shapes.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.05;
        `;
        document.body.appendChild(shapes);

        const shapesData = [
            { type: 'circle', x: '10%', y: '20%', size: '100px' },
            { type: 'square', x: '80%', y: '30%', size: '80px' },
            { type: 'triangle', x: '20%', y: '70%', size: '120px' },
            { type: 'hexagon', x: '70%', y: '80%', size: '90px' }
        ];

        shapesData.forEach((shape, index) => {
            const element = document.createElement('div');
            element.className = `morph-shape ${shape.type}`;
            element.style.cssText = `
                position: absolute;
                left: ${shape.x};
                top: ${shape.y};
                width: ${shape.size};
                height: ${shape.size};
                background: linear-gradient(45deg, #3b82f6, #8b5cf6);
                border-radius: ${shape.type === 'circle' ? '50%' : '0'};
                transform: rotate(0deg);
            `;
            shapes.appendChild(element);

            // Animate each shape
            gsap.to(element, {
                rotation: 360,
                scale: 1.2,
                duration: 20 + index * 5,
                repeat: -1,
                ease: 'none',
                yoyo: true
            });
        });
    }

    // Interactive Elements
    setupInteractiveElements() {
        // Hover effects for statistics
        document.querySelectorAll('.stat-counter').forEach(counter => {
            counter.addEventListener('mouseenter', () => {
                gsap.to(counter, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            });

            counter.addEventListener('mouseleave', () => {
                gsap.to(counter, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            });
        });

        // Interactive chart hover effects
        this.setupInteractiveChart();
    }

    // Enhanced Chart.js with interactions
    setupInteractiveChart() {
        const chartCanvas = document.getElementById('pixChart');
        if (!chartCanvas) return;

        // Add custom hover effects
        chartCanvas.addEventListener('mousemove', (e) => {
            const rect = chartCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Create hover effect
            gsap.to(chartCanvas, {
                scale: 1.02,
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        chartCanvas.addEventListener('mouseleave', () => {
            gsap.to(chartCanvas, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    }

    // Performance Optimizations
    setupPerformanceOptimizations() {
        // Lazy loading for images and heavy content
        this.setupLazyLoading();
        
        // Debounced scroll events
        this.setupDebouncedScroll();
        
        // Intersection Observer for animations
        this.setupIntersectionObserver();
    }

    // Lazy loading implementation
    setupLazyLoading() {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const dataSrc = element.getAttribute('data-lazy');
                    
                    if (dataSrc) {
                        if (element.tagName === 'IMG') {
                            element.src = dataSrc;
                        } else {
                            element.innerHTML = dataSrc;
                        }
                        element.removeAttribute('data-lazy');
                        lazyObserver.unobserve(element);
                    }
                }
            });
        });

        lazyElements.forEach(el => lazyObserver.observe(el));
    }

    // Debounced scroll events
    setupDebouncedScroll() {
        let ticking = false;
        
        function updateOnScroll() {
            // Update scroll-based animations here
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick);
    }

    // Enhanced Intersection Observer
    setupIntersectionObserver() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.getAttribute('data-animation') || 'fadeIn';
                    
                    this.playAnimation(element, animationType);
                    animationObserver.unobserve(element);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => animationObserver.observe(el));
    }

    // Play different animation types
    playAnimation(element, type) {
        const animations = {
            'fadeIn': {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            },
            'slideInLeft': {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'back.out(1.7)'
            },
            'slideInRight': {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'back.out(1.7)'
            },
            'scaleIn': {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: 'back.out(1.7)'
            }
        };

        const animation = animations[type] || animations.fadeIn;
        
        // Set initial state
        gsap.set(element, {
            opacity: 0,
            y: type.includes('slide') ? (type.includes('Left') ? -50 : 50) : 0,
            x: type.includes('slide') ? (type.includes('Left') ? -50 : 50) : 0,
            scale: type.includes('scale') ? 0.5 : 1
        });

        // Animate to final state
        gsap.to(element, animation);
    }

    // Accessibility Features
    setupAccessibilityFeatures() {
        // Keyboard navigation
        this.setupKeyboardNavigation();
        
        // Screen reader support
        this.setupScreenReaderSupport();
        
        // High contrast mode toggle
        this.setupHighContrastMode();
    }

    // Keyboard navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    // Screen reader support
    setupScreenReaderSupport() {
        // Add ARIA labels to interactive elements
        const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
        
        interactiveElements.forEach(element => {
            if (!element.getAttribute('aria-label')) {
                const text = element.textContent.trim();
                if (text) {
                    element.setAttribute('aria-label', text);
                }
            }
        });
    }

    // High contrast mode
    setupHighContrastMode() {
        const contrastToggle = document.createElement('button');
        contrastToggle.innerHTML = '🌙';
        contrastToggle.className = 'contrast-toggle';
        contrastToggle.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 1000;
            background: #333;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(contrastToggle);
        
        contrastToggle.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
            contrastToggle.innerHTML = document.body.classList.contains('high-contrast') ? '☀️' : '🌙';
        });
    }

    // Utility methods
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize advanced features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AdvancedWebsiteFeatures();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdvancedWebsiteFeatures;
}
