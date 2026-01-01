// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
    navList.classList.remove('active');
});

// Smooth scrolling pas link diklik
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        navList.classList.remove('active'); // Close mobile menu on link click
    });
});

// Typing animation loop for nama
const pauseBetweenLoops = 3000; // ms to pause after typing and before deleting
const namaElement = document.querySelector('.nama');
const fullText = namaElement.textContent;
let charIndex = 0;
let isDeletingNama = false;
function typeWriterNama() {
    if (!isDeletingNama) {
        namaElement.textContent = fullText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === fullText.length) {
            isDeletingNama = true;
            setTimeout(typeWriterNama, pauseBetweenLoops);
            return;
        }
    } else {
        namaElement.textContent = fullText.substring(0, charIndex);
        charIndex--;
        if (charIndex === 0) {
            isDeletingNama = false;
            namaElement.textContent = ''; 
            setTimeout(typeWriterNama, pauseBetweenLoops);
            return;
        }
    }
    setTimeout(typeWriterNama, 100);
}
// Start animation
typeWriterNama();

// const typingSpeed = 100; // ms per character
// const pauseTime = 2000; // ms to pause after typing and before deleting
// const rincianElement = document.querySelector('.rincian');

// let index = 0;
// let isDeleting = false;

// function typeWriter() {
//     if (!isDeleting) {
//         rincianElement.textContent = text.substring(0, index + 1);
//         index++;
//         if (index === text.length) {
//             isDeleting = true;
//             setTimeout(typeWriter, pauseTime);
//             return;
//         }
//     } else {
//         rincianElement.textContent = text.substring(0, index);
//         index--;
//         if (index === 0) {
//             isDeleting = false;
//             setTimeout(typeWriter, pauseTime);
//             return;
//         }
//     }
//     setTimeout(typeWriter, typingSpeed);
// }

// // Start the animation
// typeWriter();