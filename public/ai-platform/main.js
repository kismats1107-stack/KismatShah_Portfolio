document.addEventListener('DOMContentLoaded', () => {
  // ── 1) Mobile Menu Management ──
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-signin');

  function openMenu() {
    if (!burgerBtn || !mobileMenu || !mobileOverlay) return;
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    mobileOverlay.removeAttribute('hidden');
    mobileMenu.removeAttribute('hidden');
  }

  function closeMenu() {
    if (!burgerBtn || !mobileMenu || !mobileOverlay) return;
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    mobileOverlay.setAttribute('hidden', '');
    mobileMenu.setAttribute('hidden', '');
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) closeMenu();
  });

  // ── 2) Active Nav Indicator Switch ──
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link');
  allNavLinks.forEach((link) => {
    link.addEventListener('click', function () {
      allNavLinks.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ── 3) Stats Easing Count-Up Animation ──
  const statItems = document.querySelectorAll('.stat-item');

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateStat(item, index) {
    const target = parseFloat(item.dataset.target || '0');
    const suffix = item.dataset.suffix || '';
    const decimals = parseInt(item.dataset.decimals || '0', 10);
    const valEl = item.querySelector('.stat-val');
    if (!valEl) return;

    const duration = 1500 + index * 80;
    const startDelay = 480 + index * 90;

    setTimeout(() => {
      let startTime = null;

      function step(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = easeOutCubic(progress);
        const currentVal = (eased * target).toFixed(decimals);

        valEl.textContent = `${currentVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          valEl.textContent = `${target.toFixed(decimals)}${suffix}`;
        }
      }

      requestAnimationFrame(step);
    }, startDelay);
  }

  let animated = false;
  const statsFooter = document.querySelector('.stats');

  if (statsFooter && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            statItems.forEach((item, i) => animateStat(item, i));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(statsFooter);
  } else {
    statItems.forEach((item, i) => animateStat(item, i));
  }
});
