

document.addEventListener("DOMContentLoaded", function() {
  var aboutText = document.querySelector(".about-text");
  var aboutListItems = document.querySelectorAll(".about-list li");
  var aboutImage = document.querySelector(".about-image");

  function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function animateAboutSection() {
      if (isInViewport(aboutText)) {
          aboutText.classList.add("animate");
          aboutListItems.forEach(function(item, index) {
              setTimeout(function() {
                  item.classList.add("animate");
              }, index * 200); // Adjust delay timing as needed
          });
          aboutImage.classList.add("animate");
          // Remove scroll event listener after animation
          window.removeEventListener("scroll", animateAboutSection);
      }
  }

  // Initial check in case section is already in view on page load
  animateAboutSection();

  // Listen for scroll events to trigger animation
  window.addEventListener("scroll", animateAboutSection);
});
   