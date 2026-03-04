/**
 * Lovin' Bowl — Shift4Shop Theme Scripts
 * Vanilla JS (no jQuery dependency for frame.html features)
 *
 * Modules:
 *   initMobileMenu()      — sidebar toggle
 *   initSearchDialog()     — native <dialog> open/close
 *   initScrollToTop()      — show/hide scroll-to-top button
 *   initRevealOnScroll()   — IntersectionObserver for scroll animations
 */

(function () {
  'use strict';

  /* ========================================================================
     1. MOBILE MENU
     ======================================================================== */
  function initMobileMenu() {
    var menu = document.getElementById('mobile-menu');
    var overlay = document.getElementById('lb-mobile-overlay');
    var triggers = document.querySelectorAll('[data-lb-mobile-toggle]');
    var closeBtn = menu ? menu.querySelector('.lb-mobile-menu__close') : null;

    if (!menu) return;

    function openMenu() {
      menu.classList.add('is-open');
      if (overlay) overlay.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Update all triggers
      triggers.forEach(function (t) {
        t.setAttribute('aria-expanded', 'true');
      });

      // Focus the close button
      if (closeBtn) {
        closeBtn.focus();
      }
    }

    function closeMenu() {
      menu.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      triggers.forEach(function (t) {
        t.setAttribute('aria-expanded', 'false');
      });
    }

    // Bind trigger clicks
    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        var isOpen = menu.classList.contains('is-open');
        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      });
    });

    // Bind close button
    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        closeMenu();
      });
    }

    // Bind overlay click
    if (overlay) {
      overlay.addEventListener('click', function () {
        closeMenu();
      });
    }

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  /* ========================================================================
     2. SEARCH DIALOG
     ======================================================================== */
  function initSearchDialog() {
    var dialog = document.getElementById('lb-search-dialog');
    var openTriggers = document.querySelectorAll('[data-lb-search-open]');
    var closeBtn = dialog ? dialog.querySelector('.lb-search-dialog__close') : null;

    if (!dialog || typeof dialog.showModal !== 'function') return;

    openTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        dialog.showModal();
        // Focus the search input after opening
        var input = dialog.querySelector('#searchlight');
        if (input) {
          setTimeout(function () { input.focus(); }, 50);
        }
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        dialog.close();
      });
    }

    // Close when clicking backdrop
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  }

  /* ========================================================================
     3. SCROLL TO TOP
     ======================================================================== */
  function initScrollToTop() {
    var btn = document.querySelector('.lb-scroll-top');
    if (!btn) return;

    var threshold = 400;
    var ticking = false;

    function updateVisibility() {
      if (window.scrollY > threshold) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    }, { passive: true });

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initial check
    updateVisibility();
  }

  /* ========================================================================
     4. REVEAL ON SCROLL (IntersectionObserver)
     Replaces jQuery scroll handler while keeping data-animation and
     data-timeout attributes for backwards compatibility.
     ======================================================================== */
  function initRevealOnScroll() {
    var elements = document.querySelectorAll('.revealOnScroll');
    if (!elements.length) return;

    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) {
        el.classList.add('animated');
        var anim = el.getAttribute('data-animation');
        if (anim) el.classList.add(anim);
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var animation = el.getAttribute('data-animation');
          var timeout = el.getAttribute('data-timeout');

          function applyAnimation() {
            el.classList.add('animated', 'animated1');
            if (animation) {
              el.classList.add(animation);
            }
          }

          if (timeout) {
            setTimeout(applyAnimation, parseInt(timeout, 10));
          } else {
            applyAnimation();
          }

          // Stop observing once animated
          observer.unobserve(el);
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ========================================================================
     5. FOOTER LINKS TOGGLE (mobile)
     ======================================================================== */
  function initFooterLinksToggle() {
    var toggle = document.querySelector('[data-lb-footer-links-toggle]');
    var list = document.getElementById('extrapages');
    if (!toggle || !list) return;

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      list.classList.toggle('is-open');
      var isOpen = list.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ========================================================================
     6. IMAGE GALLERY (product page)
     ======================================================================== */
  function initImageGallery() {
    var mainImg = document.querySelector('.lb-product__gallery-img');
    var thumbs = document.querySelectorAll('[data-lb-gallery-thumb]');
    if (!mainImg || !thumbs.length) return;

    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var img = this.querySelector('img');
        if (!img) return;

        // Update main image
        mainImg.setAttribute('src', img.getAttribute('src').replace('150x150', '800x800'));
        mainImg.setAttribute('alt', img.getAttribute('alt'));

        // Toggle selected state
        thumbs.forEach(function (t) { t.classList.remove('is-selected'); });
        this.classList.add('is-selected');
      });
    });
  }

  /* ========================================================================
     7. QUANTITY SELECTOR (product page)
     ======================================================================== */
  function initQuantitySelector() {
    var containers = document.querySelectorAll('.lb-quantity');
    if (!containers.length) return;

    containers.forEach(function (container) {
      var input = container.querySelector('.lb-quantity__input');
      var btns = container.querySelectorAll('.lb-quantity__btn');
      if (!input || !btns.length) return;

      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var action = this.getAttribute('data-lb-qty-action');
          var current = parseInt(input.value, 10) || 1;
          var min = parseInt(input.getAttribute('min'), 10) || 1;
          var max = parseInt(input.getAttribute('max'), 10) || 99;

          if (action === 'increment' && current < max) {
            input.value = current + 1;
          } else if (action === 'decrement' && current > min) {
            input.value = current - 1;
          }
        });
      });
    });
  }

  /* ========================================================================
     8. SIZE SELECTOR (product page)
     ======================================================================== */
  function initSizeSelector() {
    var selectors = document.querySelectorAll('.lb-size-selector');
    if (!selectors.length) return;

    selectors.forEach(function (selector) {
      var btns = selector.querySelectorAll('.lb-size-selector__btn');
      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          btns.forEach(function (b) { b.classList.remove('is-selected'); });
          this.classList.add('is-selected');
        });
      });
    });
  }

  /* ========================================================================
     9. AUTOSHIP TOGGLE (product page)
     ======================================================================== */
  function initAutoshipToggle() {
    var options = document.querySelectorAll('.lb-purchase-option');
    if (!options.length) return;

    options.forEach(function (option) {
      var radio = option.querySelector('input[type="radio"]');
      if (!radio) return;

      option.addEventListener('click', function () {
        // Deactivate all
        options.forEach(function (o) { o.classList.remove('is-active'); });
        // Activate this one
        option.classList.add('is-active');
        radio.checked = true;
      });
    });
  }

  /* ========================================================================
     INIT
     ======================================================================== */
  function init() {
    initMobileMenu();
    initSearchDialog();
    initScrollToTop();
    initRevealOnScroll();
    initFooterLinksToggle();
    initImageGallery();
    initQuantitySelector();
    initSizeSelector();
    initAutoshipToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
