import { useEffect, useRef } from 'react'

function useInitPlugins(location) {
  const isFirstRun = useRef(true);
  const smootherRef = useRef(null);

  useEffect(() => {
    const $ = window.jQuery;
    if (!$) return;

    // Small delay to ensure DOM is rendered
    const timer = setTimeout(() => {
      // ─── Mobile Menu ──────────────────────────────
      if ($('#mobile-menu').length && !$('.mean-container').length) {
        $('#mobile-menu').meanmenu({
          meanMenuContainer: '.mobile-menu',
          meanScreenWidth: '1199',
          meanExpand: ['<i class="far fa-plus"></i>'],
        });
      }

      // ─── Offcanvas Sidebar ────────────────────────
      $('.offcanvas__close, .offcanvas__overlay').off('click.offcanvas').on('click.offcanvas', function () {
        $('.offcanvas__info').removeClass('info-open');
        $('.offcanvas__overlay').removeClass('overlay-open');
      });
      $('.sidebar__toggle').off('click.sidebar').on('click.sidebar', function () {
        $('.offcanvas__info').addClass('info-open');
        $('.offcanvas__overlay').addClass('overlay-open');
      });

      // ─── Body Overlay ─────────────────────────────
      $('.body-overlay').off('click.overlay').on('click.overlay', function () {
        $('.offcanvas__area').removeClass('offcanvas-opened');
        $('.df-search-area').removeClass('opened');
        $('.body-overlay').removeClass('opened');
      });

      // ─── Sticky Header ────────────────────────────
      $(window).off('scroll.sticky').on('scroll.sticky', function () {
        if ($(this).scrollTop() > 250) {
          $('#header-sticky').addClass('sticky');
        } else {
          $('#header-sticky').removeClass('sticky');
        }
      });

      // ─── Scroll Down Button ───────────────────────
      $('#scrollDown').off('click.scrolldown').on('click.scrolldown', function () {
        setTimeout(function () {
          $('html, body').animate({ scrollTop: '+=1000px' }, 'slow');
        }, 1000);
      });

      // ─── Magnific Popup ───────────────────────────
      if ($.fn.magnificPopup) {
        $('.img-popup').magnificPopup({ type: 'image', gallery: { enabled: true } });
        $('.video-popup').magnificPopup({ type: 'iframe', callbacks: {} });
      }

      // ─── Counter Up ───────────────────────────────
      if ($.fn.counterUp) {
        $('.count').counterUp({ delay: 15, time: 4000 });
      }

      // ─── WOW.js ──────────────────────────────────
      if (window.WOW) {
        new window.WOW().init();
      }

      // ─── Nice Select ──────────────────────────────
      if ($.fn.niceSelect && $('.single-select').length) {
        $('.single-select').niceSelect();
      }

      // ─── Progress Bar ─────────────────────────────
      if ($.fn.waypoint) {
        $('.progress-bar').waypoint(function () {
          $('.progress-bar').css({ animation: 'animate-positive 2.6s', opacity: '1' });
        }, { offset: '75%' });
      }

      // ─── Swiper Sliders ──────────────────────────
      if (window.Swiper) {
        if ($('.banner-active').length > 0) {
          new window.Swiper('.banner-active', {
            speed: 1500, loop: true, slidesPerView: 1, effect: 'fade',
            autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false },
            navigation: { nextEl: '.array-prev', prevEl: '.array-next' },
            pagination: {
              el: '.banner__dot', clickable: true,
              renderBullet: function (index, className) {
                const dotContent = document.querySelectorAll('.banner__dot .dot-content');
                return '<span class="' + className + '">' + (dotContent[index]?.outerHTML || '') + '</span>';
              },
            },
          });
        }

        if ($('.brand-slider').length > 0) {
          new window.Swiper('.brand-slider', {
            spaceBetween: 30, speed: 1300, loop: true,
            autoplay: { delay: 2000, disableOnInteraction: false },
            breakpoints: { 1199: { slidesPerView: 6 }, 991: { slidesPerView: 5 }, 767: { slidesPerView: 4 }, 575: { slidesPerView: 3 }, 0: { slidesPerView: 2 } },
          });
        }

        if ($('.team-slider').length > 0) {
          new window.Swiper('.team-slider', {
            spaceBetween: 30, speed: 1300, loop: true,
            autoplay: { delay: 2000, disableOnInteraction: false },
            pagination: { el: '.dot', clickable: true },
            breakpoints: { 1399: { slidesPerView: 3.9 }, 991: { slidesPerView: 3 }, 767: { slidesPerView: 3 }, 575: { slidesPerView: 2 }, 0: { slidesPerView: 1.4 } },
          });
        }

        if ($('.testimonial-slider').length > 0) {
          new window.Swiper('.testimonial-slider', {
            spaceBetween: 30, speed: 1300, loop: true,
            autoplay: { delay: 2000, disableOnInteraction: false },
            pagination: { el: '.dot2', clickable: true },
            breakpoints: { 1199: { slidesPerView: 3 }, 991: { slidesPerView: 3 }, 767: { slidesPerView: 2.1 }, 575: { slidesPerView: 1.7 }, 0: { slidesPerView: 1.3 } },
          });
        }

        if ($('.testimonial-slider-2').length > 0) {
          new window.Swiper('.testimonial-slider-2', {
            spaceBetween: 30, speed: 1500, loop: true,
            autoplay: { delay: 1700, disableOnInteraction: false },
            breakpoints: { 1199: { slidesPerView: 3 }, 991: { slidesPerView: 2.5 }, 767: { slidesPerView: 2 }, 575: { slidesPerView: 1.5 }, 0: { slidesPerView: 1.3 } },
          });
        }

        if ($('.testimonial-slider-3').length > 0) {
          new window.Swiper('.testimonial-slider-3', {
            spaceBetween: 30, speed: 1300, loop: true,
            autoplay: { delay: 2000, disableOnInteraction: false },
            navigation: { prevEl: '.array-prev', nextEl: '.array-next' },
          });
        }

        if ($('.testimonial-slider-5').length > 0) {
          new window.Swiper('.testimonial-slider-5', {
            spaceBetween: 30, speed: 1200, loop: true,
            autoplay: { delay: 1500, disableOnInteraction: false },
            navigation: { prevEl: '.array-prev', nextEl: '.array-next' },
            breakpoints: { 1199: { slidesPerView: 3 }, 991: { slidesPerView: 2.6 }, 767: { slidesPerView: 2.3 }, 575: { slidesPerView: 1.5 }, 0: { slidesPerView: 1 } },
          });
        }

        if ($('.testimonial-slider-6').length > 0) {
          new window.Swiper('.testimonial-slider-6', {
            spaceBetween: 30, speed: 1300, loop: true, centeredSlides: true,
            autoplay: { delay: 2000, disableOnInteraction: false },
            pagination: { el: '.dot', clickable: true },
            navigation: { prevEl: '.array-prev', nextEl: '.array-next' },
            breakpoints: { 1399: { slidesPerView: 3.3 }, 1199: { slidesPerView: 2.9 }, 991: { slidesPerView: 2.5 }, 767: { slidesPerView: 2.2 }, 575: { slidesPerView: 1.6 }, 0: { slidesPerView: 1.2 } },
          });
        }

        if ($('.testimonial-slider-7').length > 0) {
          new window.Swiper('.testimonial-slider-7', {
            spaceBetween: 30, speed: 1300, loop: true, centeredSlides: true,
            autoplay: { delay: 2000, disableOnInteraction: false, reverseDirection: true },
            breakpoints: { 1399: { slidesPerView: 3.3 }, 1199: { slidesPerView: 2.9 }, 991: { slidesPerView: 2.5 }, 767: { slidesPerView: 2.2 }, 575: { slidesPerView: 1.6 }, 0: { slidesPerView: 1.2 } },
          });
        }

        if ($('.service-slider-2').length > 0) {
          new window.Swiper('.service-slider-2', {
            spaceBetween: 30, speed: 1300, loop: true,
            autoplay: { delay: 2000, disableOnInteraction: false },
            navigation: { prevEl: '.array-prev', nextEl: '.array-next' },
            breakpoints: { 1399: { slidesPerView: 4 }, 1199: { slidesPerView: 3.2 }, 991: { slidesPerView: 2.8 }, 767: { slidesPerView: 2.1 }, 575: { slidesPerView: 1.8 }, 0: { slidesPerView: 1.3 } },
          });
        }

        if ($('.gallery-slider-3').length > 0) {
          new window.Swiper('.gallery-slider-3', {
            spaceBetween: 0, speed: 1300, loop: true,
            autoplay: { delay: 2000, disableOnInteraction: false },
            breakpoints: { 1199: { slidesPerView: 5 }, 991: { slidesPerView: 5 }, 767: { slidesPerView: 3 }, 575: { slidesPerView: 2 }, 0: { slidesPerView: 1 } },
          });
        }

        if ($('.project-slider-3').length > 0) {
          new window.Swiper('.project-slider-3', {
            spaceBetween: 30, speed: 1300, loop: true, centeredSlides: true,
            autoplay: { delay: 2000, disableOnInteraction: false },
            breakpoints: { 1199: { slidesPerView: 2.9 }, 991: { slidesPerView: 2.7 }, 767: { slidesPerView: 2.3 }, 575: { slidesPerView: 1.4 }, 0: { slidesPerView: 1.2 } },
          });
        }

        if ($('.project-slider-5').length > 0) {
          new window.Swiper('.project-slider-5', {
            spaceBetween: 30, speed: 1300, loop: true, centeredSlides: true,
            autoplay: { delay: 2000, disableOnInteraction: false },
            breakpoints: { 1399: { slidesPerView: 4.9 }, 1199: { slidesPerView: 3.9 }, 991: { slidesPerView: 3.6 }, 767: { slidesPerView: 2.5 }, 575: { slidesPerView: 2 }, 0: { slidesPerView: 1.3 } },
          });
        }
      }

      // ─── Quantity Controls ────────────────────────
      const quantityButtons = document.querySelectorAll('.quantityIncrement, .quantityDecrement');
      if (quantityButtons.length) {
        quantityButtons.forEach((button) => {
          button.addEventListener('click', function () {
            const input = button.parentElement.querySelector('input');
            let value = parseInt(input.value, 10) || 0;
            if (button.classList.contains('quantityIncrement')) {
              input.value = value + 1;
            } else if (button.classList.contains('quantityDecrement') && value > 1) {
              input.value = value - 1;
            }
          });
        });
      }

      // ─── Payment Method ───────────────────────────
      function updatePaymentMethod() {
        let paymentMethod = $("input[name='pay-method']:checked").val();
        if (paymentMethod) {
          $('.payment').html(paymentMethod);
        }
      }
      updatePaymentMethod();
      $(".checkout-radio-single input[name='pay-method']").off('change.payment').on('change.payment', function () {
        updatePaymentMethod();
      });

      // ─── Additional Quantity Controls ─────────────
      const inputs = document.querySelectorAll('#qty, #qty2, #qty3');
      const btnminus = document.querySelectorAll('.qtyminus');
      const btnplus = document.querySelectorAll('.qtyplus');
      if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {
        inputs.forEach(function (input, index) {
          const min = Number(input.getAttribute('min'));
          const max = Number(input.getAttribute('max'));
          const step = Number(input.getAttribute('step'));
          function qtyminus(e) {
            let current = Number(input.value);
            let newval = current - step;
            if (newval < min) newval = min;
            if (newval > max) newval = max;
            input.value = Number(newval);
            e.preventDefault();
          }
          function qtyplus(e) {
            let current = Number(input.value);
            let newval = current + step;
            if (newval > max) newval = max;
            input.value = Number(newval);
            e.preventDefault();
          }
          if (btnminus[index]) btnminus[index].addEventListener('click', qtyminus);
          if (btnplus[index]) btnplus[index].addEventListener('click', qtyplus);
        });
      }

      // ─── Search Popup ─────────────────────────────
      if ($('.search-toggler').length) {
        $('.search-toggler').off('click.search').on('click.search', function (e) {
          e.preventDefault();
          $('.search-popup').toggleClass('active');
          $('body').toggleClass('locked');
        });
      }

      // ─── Mouse Cursor ─────────────────────────────
      if ($('.mouseCursor').length > 0) {
        const e = document.querySelector('.cursor-inner');
        const t = document.querySelector('.cursor-outer');
        if (e && t) {
          let o = false;
          window.onmousemove = function (s) {
            if (!o) {
              t.style.transform = 'translate(' + s.clientX + 'px, ' + s.clientY + 'px)';
            }
            e.style.transform = 'translate(' + s.clientX + 'px, ' + s.clientY + 'px)';
          };
          $('body').on('mouseenter', 'button, a, .cursor-pointer', function () {
            e.classList.add('cursor-hover');
            t.classList.add('cursor-hover');
          });
          $('body').on('mouseleave', 'button, a, .cursor-pointer', function () {
            if (!($(this).is('a', 'button') && $(this).closest('.cursor-pointer').length)) {
              e.classList.remove('cursor-hover');
              t.classList.remove('cursor-hover');
            }
          });
          e.style.visibility = 'visible';
          t.style.visibility = 'visible';
        }
      }

      // ─── Back To Top ──────────────────────────────
      $(window).off('scroll.backtop').on('scroll.backtop', function () {
        if ($(this).scrollTop() > 20) {
          $('#back-top').addClass('show');
        } else {
          $('#back-top').removeClass('show');
        }
      });
      $(document).off('click.backtop', '#back-top').on('click.backtop', '#back-top', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
      });

      // ─── GSAP Smooth Scroller & Text Animation ───
      if (window.gsap && window.ScrollTrigger && window.ScrollSmoother && window.SplitText) {
        window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother, window.SplitText);
        window.gsap.config({ nullTargetWarn: false });

        // Kill existing smoother
        if (smootherRef.current) {
          smootherRef.current.kill();
          smootherRef.current = null;
        }
        // Kill all existing ScrollTriggers
        window.ScrollTrigger.getAll().forEach(t => t.kill());

        if ($('#smooth-wrapper').length && $('#smooth-content').length) {
          smootherRef.current = window.ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
          });
        }

        // Text Invert
        const split2Elements = document.querySelectorAll('.text_invert-2');
        if (split2Elements.length) {
          const split2 = new window.SplitText('.text_invert-2', { type: 'lines' });
          split2.lines.forEach((target) => {
            window.gsap.to(target, {
              backgroundPositionX: 0,
              ease: 'none',
              scrollTrigger: { trigger: target, scrub: 1, start: 'top 85%', end: 'bottom center' },
            });
          });
        }

        // Text Animation
        const animatedTextElements = document.querySelectorAll('.text-anim');
        if (animatedTextElements.length) {
          let staggerAmount = 0.03, translateXValue = 20, delayValue = 0.1, easeType = 'power2.out';
          animatedTextElements.forEach((element) => {
            let animationSplitText = new window.SplitText(element, { type: 'chars, words' });
            window.ScrollTrigger.create({
              trigger: element,
              start: 'top 85%',
              onEnter: () => {
                window.gsap.from(animationSplitText.chars, {
                  duration: 1, delay: delayValue, x: translateXValue,
                  autoAlpha: 0, stagger: staggerAmount, ease: easeType,
                });
              },
            });
          });
        }
      }

      // ─── Pricing Toggle ───────────────────────────
      const toggle = document.getElementById('pricing-toggle');
      const monthlyLabel = document.querySelector('.monthly-label');
      const yearlyLabel = document.querySelector('.yearly-label');
      const prices = document.querySelectorAll('.price');
      if (toggle && monthlyLabel && yearlyLabel && prices.length) {
        const updatePrices = (isYearly) => {
          prices.forEach((price) => {
            const monthly = price.getAttribute('data-monthly');
            const yearly = price.getAttribute('data-yearly');
            if (monthly && yearly) {
              price.innerHTML = isYearly
                ? '$' + yearly + '<sub>/ per year</sub>'
                : '$' + monthly + '<sub>/ per month</sub>';
            }
          });
          monthlyLabel.classList.toggle('active', !isYearly);
          yearlyLabel.classList.toggle('active', isYearly);
        };
        updatePrices(false);
        toggle.addEventListener('change', function () { updatePrices(this.checked); });
        monthlyLabel.addEventListener('click', function () { toggle.checked = false; updatePrices(false); });
        yearlyLabel.addEventListener('click', function () { toggle.checked = true; updatePrices(true); });
      }

      // ─── Price Range Slider ───────────────────────
      const minSlider = document.getElementById('min-slider');
      const maxSlider = document.getElementById('max-slider');
      const amount = document.getElementById('amount');
      if (minSlider && maxSlider && amount) {
        function updateAmount() {
          let minValue = parseInt(minSlider.value, 10);
          let maxValue = parseInt(maxSlider.value, 10);
          if (minValue > maxValue) {
            [minValue, maxValue] = [maxValue, minValue];
            minSlider.value = minValue;
            maxSlider.value = maxValue;
          }
          amount.value = '$' + minValue + ' - $' + maxValue;
          const minPercent = ((minValue - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
          const maxPercent = ((maxValue - maxSlider.min) / (maxSlider.max - maxSlider.min)) * 100;
          const trackStyle = 'linear-gradient(to right, #063232 ' + minPercent + '%, #4653B8 ' + minPercent + '%, #4653B8 ' + maxPercent + '%, #063232 ' + maxPercent + '%)';
          minSlider.style.background = trackStyle;
          maxSlider.style.background = trackStyle;
        }
        updateAmount();
        minSlider.addEventListener('input', updateAmount);
        maxSlider.addEventListener('input', updateAmount);
      }

    }, 100); // end setTimeout

    return () => {
      clearTimeout(timer);
      // Cleanup GSAP on route change
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(t => t.kill());
      }
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, [location.pathname]);
}

export default useInitPlugins
