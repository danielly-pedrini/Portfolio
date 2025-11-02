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

  // Efeito na navegação
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.9)';
  }
}

// Smooth scroll para os links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Smooth scroll para o indicador
document.querySelector('.scroll-indicator').addEventListener('click', () => {
  document.querySelector('#sobre').scrollIntoView({
    behavior: 'smooth',
  });
});

// Efeito de hover nos cartões
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Inicializar
createParticles();
handleScroll();
window.addEventListener('scroll', handleScroll);

// Animação de digitação para o título
const heroTitle = document.querySelector('.hero-title');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
const typeWriter = () => {
  if (i < originalText.length) {
    heroTitle.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
};

setTimeout(typeWriter, 1000);
