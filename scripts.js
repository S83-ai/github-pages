// Toggle navigation for mobile
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Discover More Button Action
function learnMore() {
    alert("Discover our top skincare products that keep your skin glowing!");
}

