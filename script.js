/ script.js
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
    // Close mobile nav when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
    // Sample trail data
    const trails = [
        {
            name: "Mount Baker Trail",
            location: "Washington",
            distance: "12.5 km",
            difficulty: "Moderate",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
        },
        {
            name: "Grouse Grind",
            location: "British Columbia",
            distance: "2.9 km",
            difficulty: "Hard",
            image: "https://images.unsplash.com/photo-1585257611539-e4e11a13e410"
        },
        {
            name: "Pacific Rim Trail",
            location: "Washington",
            distance: "15.2 km",
            difficulty: "Easy",
            image: "https://images.unsplash.com/photo-1583454155184-870a1f63be44"
        }
    ];
    // Populate recent trails
    const trailGrid = document.querySelector('.trail-grid');
    if (trailGrid) {
        trails.forEach(trail => {
            const trailCard = document.createElement('div');
            trailCard.className = 'trail-card';
            trailCard.innerHTML = `
                <img src="${trail.image}" alt="${trail.name}">
                <div class="trail-info">
                    <h3>${trail.name}</h3>
                    <p>${trail.location}</p>
                    <div class="trail-stats">
                        <span><i class="fas fa-route"></i> ${trail.distance}</span>
                        <span><i class="fas fa-mountain"></i> ${trail.difficulty}</span>
                    </div>
                </div>
            `;
            trailGrid.appendChild(trailCard);
        });
    }
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const inputs = form.querySelectorAll('input[required]');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        if (isValid) {
            // Here you would typically send the form data to a server
            console.log('Form submitted successfully');
            form.reset();
        }
    });
}