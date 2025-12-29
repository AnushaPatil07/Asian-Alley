/* ================= MOBILE NAV TOGGLE ================= */
const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggle.classList.toggle('active');
});


/* ================= CARD BACKGROUND IMAGE ROTATION ================= */

const isMobile = window.innerWidth <= 768;

/*
  Each key = existing background class
  Each value = 3 images for rotation
*/
const backgroundSets = {
  ".bg-service-1": [
    "images/social1.jpg",
    "images/social2.jpg",
    "images/social3.jpg"
  ],
  ".bg-service-2": [
    "images/content1.jpg",
    "images/content2.jpg",
    "images/content3.jpg"
  ],
  ".bg-service-3": [
    "images/website1.jpg",
    "images/website2.jpg",
    "images/website3.jpg"
  ],
  ".bg-service-4": [
    "images/droneshoot1.jpg",
    "images/droneshoot2.jpg",
    "images/droneshoot3.jpg"
  ],
  ".bg-service-5": [
    "images/product1.jpg",
    "images/product2.jpg",
    "images/product3.jpg"
  ],
  ".bg-service-6": [
    "images/fashion1.jpg",
    "images/fashion2.jpg",
    "images/fashion3.jpg"
  ],
  ".bg-service-7": [
    "images/video1.jpg",
    "images/video2.jpg",
    "images/video3.jpg"
  ]
};

/* Rotate backgrounds */
Object.entries(backgroundSets).forEach(([selector, images]) => {
  const card = document.querySelector(selector);
  if (!card) return;

  let index = 0;
  const interval = isMobile ? 6000 : 3500;

  setInterval(() => {
    index = (index + 1) % images.length;
    card.style.backgroundImage = `url("${images[index]}")`;
  }, interval);
});
