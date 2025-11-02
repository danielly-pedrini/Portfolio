// Criar partículas
      function createParticles() {
        const particlesContainer = document.querySelector('.particles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.top = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 6 + 's';
          particle.style.animationDuration = Math.random() * 4 + 4 + 's';

          if (Math.random() > 0.5) {
            particle.style.background = '#0088ff';
          }

          particlesContainer.appendChild(particle);
        }
      }

      // Animação de scroll
      function handleScroll() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementTop < windowHeight * 0.8) {
            element.classList.add('visible');
          }
        });
      }

      // Efeito de hover nos cartões
      function initCardHovers() {
        document.querySelectorAll('.project-card').forEach(card => {
          card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
          });

          card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
          });
        });
      }

      // Inicializar tudo
      document.addEventListener('DOMContentLoaded', () => {
        createParticles();
        handleScroll();
        initCardHovers();

        window.addEventListener('scroll', handleScroll);
      });