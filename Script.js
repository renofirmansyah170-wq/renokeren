// Simple interactive behavior: mobile menu, smooth scroll, active nav highlight, contact form stub.
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');
  const yearEl = document.getElementById('year');

  // Set copyright year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // Smooth scroll + close mobile nav on click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // close mobile menu if open
      navList.classList.remove('show');

      // handle smooth scroll
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 64, // offset for header
            behavior: 'smooth'
          });
        }
      }

      // update active states
      navLinks.forEach(n => n.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Update active nav on scroll (basic)
  const sections = Array.from(document.querySelectorAll('main section'));
  window.addEventListener('scroll', () => {
    const y = window.scrollY + 80;
    for (let sec of sections) {
      if (sec.offsetTop <= y && (sec.offsetTop + sec.offsetHeight) > y) {
        const id = sec.getAttribute('id');
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === ('#' + id));
        });
      }
    }
  });

  // Contact form submit (stub)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simpel notifikasi — ganti ini dengan call API atau mailto sesuai kebutuhan
      alert('Terima kasih! Pesan Anda telah dikirim (contoh demo).');
      contactForm.reset();
    });
  }
});
