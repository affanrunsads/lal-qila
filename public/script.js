// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled-nav');
    } else {
        navbar.classList.remove('scrolled-nav');
    }
});

// Hero Animations
const tlHero = gsap.timeline();
tlHero.from(".logo", { y: -50, opacity: 0, duration: 1, ease: "power3.out" })
      .from(".nav-links a", { y: -50, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.5")
      .from(".hero-elem", { y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.5");

// Parallax Effect on Hero
gsap.to(".parallax-bg", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// About Section Animations
gsap.from(".about-text", {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    }
});

gsap.from(".about-image", {
    x: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    }
});

// Menu Section Animations
gsap.from(".section-header", {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#menu",
        start: "top 85%",
    }
});

gsap.from(".menu-card", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#menu",
        start: "top 70%",
    }
});

// Gallery Animations
gsap.from(".gallery-item", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
        trigger: "#gallery",
        start: "top 75%",
    }
});

// Reservation Animations
gsap.from(".reservation-info", {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#reservation",
        start: "top 80%",
    }
});

gsap.from(".reservation-form", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#reservation",
        start: "top 80%",
    }
});
