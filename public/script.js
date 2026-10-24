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

// Menu Tab Logic
const menuBtns = document.querySelectorAll('.menu-tab-btn');
const menuCategories = document.querySelectorAll('.menu-category');

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active styling from all buttons
        menuBtns.forEach(b => {
            b.classList.remove('bg-lalqila-gold', 'text-lalqila-dark', 'active');
            b.classList.add('bg-gray-800', 'text-white');
        });

        // Add active styling to clicked button
        btn.classList.remove('bg-gray-800', 'text-white');
        btn.classList.add('bg-lalqila-gold', 'text-lalqila-dark', 'active');

        // Hide all categories
        menuCategories.forEach(cat => cat.classList.add('hidden'));

        // Show target category
        const targetId = btn.getAttribute('data-target');
        const targetCat = document.getElementById(targetId);
        targetCat.classList.remove('hidden');

        // Re-animate the newly shown cards
        gsap.fromTo(targetCat.querySelectorAll('.menu-card'),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
        );
    });
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

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.remove('hidden');
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    // Restore body scrolling
    document.body.style.overflow = 'auto';
});

// Close lightbox on click outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Reservation Form Logic
const reservationForm = document.getElementById('reservation-form');
const reservationSuccess = document.getElementById('reservation-success');

if(reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        reservationForm.style.display = 'none';
        reservationSuccess.classList.remove('hidden');
    });
}

// Reviews Animations
gsap.from(".review-card", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#reviews",
        start: "top 80%",
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
