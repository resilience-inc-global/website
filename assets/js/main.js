// Resilience Inc - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenuMobile = document.querySelector('[data-nav-menu-mobile]');
  const menuOpenIcon = navToggle?.querySelector('[data-menu-open]');
  const menuCloseIcon = navToggle?.querySelector('[data-menu-close]');

  const setMenuState = (isOpen) => {
    if (!navToggle || !navMenuMobile) return;

    navMenuMobile.classList.toggle('hidden', !isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    menuOpenIcon?.classList.toggle('hidden', isOpen);
    menuCloseIcon?.classList.toggle('hidden', !isOpen);
  };

  if (navToggle && navMenuMobile) {
    navToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = navMenuMobile.classList.contains('hidden');
      setMenuState(isOpen);
    });

    document.addEventListener('click', (event) => {
      const target = event.target;
      if (
        navMenuMobile.classList.contains('hidden') ||
        navMenuMobile.contains(target) ||
        navToggle.contains(target)
      ) {
        return;
      }

      setMenuState(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenuState(false);
      }
    });

    navMenuMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuState(false));
    });
  }

  // Smooth scrolling for same-page links
  const scrollLinks = document.querySelectorAll('[data-scroll-link]');
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');

  scrollLinks.forEach((link) => {
    const href = link.getAttribute('href');

    if (!href || !href.startsWith('#')) return;

    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `${currentPath}${href}`);
      }
    });
  });

  // Pre-fill service field from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  const serviceSelect = document.getElementById('service');

  if (serviceParam && serviceSelect) {
    const serviceMap = {
      security: 'security',
      cloud: 'cloud',
      devops: 'devops',
    };

    const mappedValue = serviceMap[serviceParam.toLowerCase()];
    if (mappedValue) {
      serviceSelect.value = mappedValue;
    }
  }

  // Form submission feedback
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      const submitButton = contactForm.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.dataset.originalText = submitButton.textContent ?? '';
        submitButton.textContent = 'Sending…';
        submitButton.disabled = true;
      }
    });
  }

  // Animate elements on scroll
  const animatedElements = document.querySelectorAll('[data-animate]');

  if (animatedElements.length > 0) {
    const animationObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedElements.forEach((element, index) => {
      element.classList.add(
        'transition',
        'duration-500',
        'ease-out',
        'transform',
        'opacity-0',
        'translate-y-6'
      );
      element.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
      animationObserver.observe(element);
    });
  }

  // Highlight active section in navigation (desktop)
  const sections = document.querySelectorAll('main section[id]');

  if (sections.length > 0) {
    const highlightLinks = (id, isActive) => {
      const links = document.querySelectorAll(`[data-scroll-link][href="#${id}"]`);
      links.forEach((link) => {
        link.classList.toggle('text-brand', isActive);
        link.classList.toggle('text-slate-600', !isActive);
        link.classList.toggle('font-semibold', isActive);
      });
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          if (!id) return;

          highlightLinks(id, entry.isIntersecting && entry.intersectionRatio >= 0.5);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }
});
