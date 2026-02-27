// ─────────────────────────────────────────────────────────
// script.js — LWSC Student Organization
// ─────────────────────────────────────────────────────────

// ── Navbar: shrink on scroll ──────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Hamburger: mobile menu toggle ────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  // Lock body scroll when menu is open
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

// ── Close mobile menu when a link is clicked ─────────────
function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Footer signup form ────────────────────────────────────
// NOTE: This currently shows a success message only.
// To actually store submissions, connect this to a Google Form
// or a free service like Formspree (formspree.io).
const signupForm = document.getElementById('signupForm');
const signupSuccess = document.getElementById('signupSuccess');

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    signupSuccess.classList.add('visible');
  });
}

// ── Responsive: collapse cards to 2 col on tablet ────────
// (CSS handles mobile, this adjusts mid-size screens via JS if needed)