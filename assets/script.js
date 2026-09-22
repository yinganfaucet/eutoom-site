document.addEventListener('DOMContentLoaded', () => {
  // Reveal on scroll
  const reveals = document.querySelectorAll('[data-reveal]');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    for (let i = 0; i < reveals.length; i++) {
      const elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) {
        reveals[i].classList.add('revealed');
      }
    }
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
  
  // Navbar scroll effect
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        nav.classList.remove('nav--on-dark');
      } else {
        nav.classList.remove('scrolled');
        nav.classList.add('nav--on-dark');
      }
    });
  }

  // Mobile Menu
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => mobileMenu.classList.add('open'));
    mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq__q');
    if (q) {
      q.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  // Language Switcher Logic
  const langBtn = document.querySelector('.lang-btn');
  const langLinks = document.querySelectorAll('.lang-dropdown a, .mobile-langs button');
  let currentLang = 'en';
  const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
  if (match) { currentLang = match[1]; }

  if (langBtn) {
    const activeLink = document.querySelector(`.lang-dropdown a[data-lang="${currentLang}"]`);
    if (activeLink) {
      langBtn.innerHTML = `${activeLink.dataset.code || currentLang.toUpperCase()} <span>▾</span>`;
      langLinks.forEach(l => {
          if (l.dataset.lang === currentLang) l.classList.add('is-active');
      });
    }
  }

  langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = link.dataset.lang;
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + location.hostname;
      if (lang !== 'en') {
        document.cookie = `googtrans=/en/${lang}; path=/;`;
        document.cookie = `googtrans=/en/${lang}; path=/; domain=${location.hostname}`;
      }
      location.reload();
    });
  });
});
