document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu (Hamburger)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Sticky Navbar Hide/Show on Scroll
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Downscroll
            navbar.style.top = '-80px'; // Adjust this value based on your navbar height
        } else {
            // Upscroll
            navbar.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    // Slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.querySelectorAll(".slide");
        if (slides.length === 0) return; // Don't run if there are no slides
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simple validation, can be expanded
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const checkin = document.getElementById('checkin').value;
            const checkout = document.getElementById('checkout').value;

            if (new Date(checkout) <= new Date(checkin)) {
                alert('Check-out date must be after the check-in date.');
                return;
            }
            
            alert('Booking confirmed! We look forward to your stay.');
            bookingForm.reset();
        });
    }

    // Mini Gallery Lightbox
    const thumbs = document.querySelectorAll('.mini-thumb');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            lightbox.classList.add('active');
            lightboxImg.src = this.getAttribute('data-full');
            lightboxImg.alt = this.alt;
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', function() {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
        });
    }
    // Close lightbox on overlay click
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                lightboxImg.src = '';
            }
        });
    }

}); 










