(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const hero = document.querySelector("#hero");
  const navLinks = document.querySelectorAll(".nav-link");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterEmail = document.getElementById("newsletter-email");
  const newsletterSuccess = document.getElementById("newsletter-success");

  // ——— 1. Navbar: add shadow + background on scroll past hero ———
  function updateHeaderOnScroll() {
    if (!header || !hero) return;
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom < 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
  updateHeaderOnScroll();

  // ——— 2. IntersectionObserver: fade-in + slide-up for [data-animate] with staggered data-delay ———
  const animateEls = document.querySelectorAll("[data-animate]");
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.getAttribute("data-delay"), 10);
      const delayMs = Number.isNaN(delay) ? 0 : delay * 120;
      setTimeout(() => {
        el.classList.add("animate-in");
      }, delayMs);
    });
  }, observerOptions);

  animateEls.forEach((el) => observer.observe(el));

  // USP and testimonial cards use same .animate-in class
  const uspItems = document.querySelectorAll(".usp-item");
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const uspObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.getAttribute("data-delay"), 10);
      const delayMs = Number.isNaN(delay) ? 0 : delay * 100;
      setTimeout(() => el.classList.add("animate-in"), delayMs);
    });
  }, observerOptions);

  uspItems.forEach((el) => uspObserver.observe(el));
  testimonialCards.forEach((el) => uspObserver.observe(el));

  // ——— 3. Smooth active state on nav links based on scroll position ———
  const sections = [
    { id: "hero", link: document.querySelector('.nav-link[href="#products"]') },
    { id: "story", link: document.querySelector('.nav-link[href="#story"]') },
    {
      id: "recipes",
      link: document.querySelector('.nav-link[href="#recipes"]'),
    },
    {
      id: "contact",
      link: document.querySelector('.nav-link[href="#contact"]'),
    },
  ].filter(Boolean);

  // Map href to section and link (nav order: Shop -> #products, Our Story -> #story, etc.)
  const sectionIds = [
    "hero",
    "products",
    "story",
    "usp",
    "recipes",
    "testimonials",
    "contact",
  ];
  const linkHrefs = ["#products", "#story", "#recipes", "#contact"];

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    let current = "";
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = id;
      }
    });
    // Map section to nav link: products->Shop, story->Our Story, recipes->Recipes, contact->Contact
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const isActive =
        (href === "#products" &&
          (current === "products" || current === "hero")) ||
        (href === "#story" && current === "story") ||
        (href === "#recipes" && current === "recipes") ||
        (href === "#contact" && current === "contact");
      link.classList.toggle("active", !!isActive);
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  // ——— 4. Category Accordion: Toggle categories ———
  const categoryHeaders = document.querySelectorAll(".category-header");

  categoryHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const isExpanded = header.getAttribute("aria-expanded") === "true";
      const contentId = header.getAttribute("aria-controls");
      const content = document.getElementById(contentId);

      // Close all other categories (exclusive behavior)
      categoryHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.setAttribute("aria-expanded", "false");
          const otherContentId = otherHeader.getAttribute("aria-controls");
          const otherContent = document.getElementById(otherContentId);
          if (otherContent) {
            otherContent.setAttribute("hidden", "");
          }
        }
      });

      // Toggle current category
      header.setAttribute("aria-expanded", String(!isExpanded));
      if (content) {
        if (isExpanded) {
          content.setAttribute("hidden", "");
        } else {
          content.removeAttribute("hidden");
          // Smooth scroll to header if opening
          setTimeout(() => {
            header.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 450); // Wait for transition
        }
      }
    });
  });

  // ——— 5. Mobile nav toggle ———
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
      document.body.style.overflow = !expanded ? "hidden" : "";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth >= 640) return;
        navToggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }
})();
