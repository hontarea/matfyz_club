/* ══════════════════════════════════════════
   MATFYZ QUANT CLUB — main.js
   ══════════════════════════════════════════ */

/* ─── 1. Lucide Icons ───────────────────── */
// Init icons as soon as DOM is parsed
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});

/* ─── 2. tsParticles init ───────────────── */
window.addEventListener('load', () => {
  if (window.tsParticles) {
    tsParticles.load("vanta-bg", {
      background: { color: { value: "#011627" } },
      particles: {
        number: { value: 160, density: { enable: true, area: 900 } },
        color: { value: ["#2ec4b6", "#20bf55", "#fdfffc"] },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.35, max: 0.85 },
          animation: { enable: true, speed: 0.8, minimumValue: 0.3 }
        },
        size: { value: { min: 1.5, max: 4.5 } },
        links: { enable: false },
        move: {
          enable: true, speed: 0.6, direction: "none",
          random: true, straight: false,
          outModes: { default: "bounce" }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "attract" },
          resize: true
        },
        modes: {
          attract: { distance: 80, duration: 0.6, speed: 0.8, factor: 1, maxSpeed: 3, easing: "ease-out-quad" }
        }
      },
      detectRetina: true
    });
  }
});

/* ─── 3. Navbar scroll effect ───────────── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ─── 4. Mobile hamburger ───────────────── */
const burger = document.getElementById('burger');
if (burger && navbar) {
  burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
  });

  // Close menu when any nav link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('nav-open');
    });
  });

  // Close menu when clicking outside the nav
  document.addEventListener('click', (e) => {
    if (navbar.classList.contains('nav-open') && !navbar.contains(e.target)) {
      navbar.classList.remove('nav-open');
    }
  });
}

/* ─── 5. IntersectionObserver fade-ins ──── */
(function initFadeIns() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  elements.forEach(el => observer.observe(el));
}());
