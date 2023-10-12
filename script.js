document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector(".background");
    const changeImageBtn = document.getElementById("changeImage");
  
    // Array of image URLs
    const images = [
      "photos/budha.jpg",
      "photos/key.webp",
      "photos/logoooo.jpg"
    ];
  
    let currentImageIndex = 0;
  
    function changeBackground() {
      background.style.backgroundImage = `url(${images[currentImageIndex]})`;
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
  
    changeImageBtn.addEventListener("click", changeBackground);
    
    // Change background on page load
    changeBackground();
  });
  