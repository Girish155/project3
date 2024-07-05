// Example of JavaScript for hover effect (optional)
const ctaButton = document.querySelector('.cta-btn');

ctaButton.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#0056b3';
});

ctaButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#007bff';
});
