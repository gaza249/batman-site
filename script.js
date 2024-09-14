document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Simple lightbox for gallery images
    const galleryImages = document.querySelectorAll('.gallery-container img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);
  
    galleryImages.forEach(image => {
      image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
          lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
      });
    });
  
    lightbox.addEventListener('click', e => {
      if (e.target !== e.currentTarget) return;
      lightbox.classList.remove('active');
    });
  
    // Form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Form submitted! (Note: This is a demo, no actual submission occurs)');
      form.reset();
    });
  
    // Lazy loading images
    if ('IntersectionObserver' in window) {
      const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px 300px 0px"
      };
  
      const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
  
          const img = entry.target;
          img.src = img.src; // This triggers the image to load
          imgObserver.unobserve(img);
        });
      }, imgOptions);
  
      document.querySelectorAll('img').forEach(img => imgObserver.observe(img));
    }
  });

 // Add this inside your existing DOMContentLoaded event listener

// Animate timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px"
};

const timelineObserver = new IntersectionObserver((entries, timelineObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      timelineObserver.unobserve(entry.target);
    }
  });
}, timelineOptions);

timelineItems.forEach(item => timelineObserver.observe(item));


