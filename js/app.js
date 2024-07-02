document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.images img');
  images.forEach(image => {
    image.addEventListener('click', function() {
      const description = this.nextElementSibling;
      description.style.display = (description.style.display === 'block') ? 'none' : 'block';
    });
  });
});
